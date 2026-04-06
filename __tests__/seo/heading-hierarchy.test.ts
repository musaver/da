/**
 * Heading Hierarchy Tests
 *
 * Verifies proper heading hierarchy for SEO
 */

import * as fs from 'fs';
import * as path from 'path';

const APP_DIR = path.join(process.cwd(), 'app');

function getPageFiles(dir: string): string[] {
  const files: string[] = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getPageFiles(fullPath));
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }
  return files;
}

describe('SEO - Heading Hierarchy', () => {
  const pageFiles = getPageFiles(APP_DIR);

  test('page files should be found', () => {
    expect(pageFiles.length).toBeGreaterThan(0);
  });

  test.each(pageFiles)('page %s should have exactly one h1 tag', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const h1Matches = content.match(/<h1[\s>]/g);

    // Each page should have exactly one H1
    expect(h1Matches).not.toBeNull();
    expect(h1Matches!.length).toBe(1);
  });

  test.each(pageFiles)('page %s should start with h1 as primary heading', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract all heading levels in order
    const headingMatches = [...content.matchAll(/<h([1-6])[\s>]/g)];
    const levels = headingMatches.map(m => parseInt(m[1]));

    if (levels.length < 2) return; // Skip if only one heading

    // First heading should be h1
    expect(levels[0]).toBe(1);

    // All heading levels used should include h1 and h2 at minimum (good structure)
    const uniqueLevels = new Set(levels);
    expect(uniqueLevels.has(1)).toBe(true);
    expect(uniqueLevels.has(2)).toBe(true);
  });
});
