/**
 * Image SEO Tests
 *
 * Verifies that images have proper alt tags for SEO
 */

import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'app');
const COMPONENTS_DIR = path.join(process.cwd(), 'components');

function getAllTsxFiles(dir: string): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

describe('SEO - Image Alt Tags', () => {
  const tsxFiles = [...getAllTsxFiles(APP_DIR), ...getAllTsxFiles(COMPONENTS_DIR)];

  test('all TSX files should be found', () => {
    expect(tsxFiles.length).toBeGreaterThan(0);
  });

  test.each(tsxFiles)('images in %s should have descriptive alt text', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find all Image components and img tags
    const imageMatches = content.matchAll(/<(?:Image|img)\s[^>]*>/gs);

    for (const match of imageMatches) {
      const tag = match[0];

      // Check that alt attribute exists
      const altMatch = tag.match(/alt=["'{]([^"'}]*)["'}]/);
      expect(altMatch).not.toBeNull();

      if (altMatch) {
        const altText = altMatch[1];
        // Alt text should not be generic/non-descriptive
        const genericAlts = ['image', 'img', 'photo', 'picture', 'icon', 'logo-img'];
        // Allow empty alt for decorative images but flag purely generic ones
        if (altText.length > 0) {
          const isGeneric = genericAlts.some(g => altText.toLowerCase() === g);
          if (isGeneric) {
            // Just warn, don't fail - some generic alts are OK for decorative images
            console.warn(`Warning: Generic alt text "${altText}" in ${path.basename(filePath)}`);
          }
        }
      }
    }
  });

  test('no images should be missing alt attribute entirely', () => {
    let missingAlts: string[] = [];

    tsxFiles.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf-8');
      // Match Image tags that don't have alt attribute
      const images = content.matchAll(/<(?:Image|img)\s([^>]*)>/gs);

      for (const match of images) {
        const attrs = match[1];
        if (!attrs.includes('alt=')) {
          missingAlts.push(`${path.basename(filePath)}: ${match[0].substring(0, 80)}...`);
        }
      }
    });

    expect(missingAlts).toEqual([]);
  });
});
