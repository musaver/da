import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data';
import { blogPosts, type BlogPost } from '@/data/blog-posts';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Dev Aspire Blog`,
    description: post.description,
    openGraph: {
      type: "article" as const,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "Dev Aspire",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedDate,
      modifiedTime: post.modifiedDate,
      authors: [post.author],
      tags: post.keywords,
      images: [
        {
          url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const schema = articleSchema(
    post.title,
    post.description,
    post.slug,
    post.publishedDate,
    post.modifiedDate,
    post.author,
    undefined,
    post.keywords
  );

  const breadcrumb = breadcrumbSchema(post.title, `/blog/${post.slug}`);

  // Get related posts from same category
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Article Header */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-5">
                  {/* Breadcrumb */}
                  <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">{post.category}</li>
                    </ol>
                  </nav>

                  {/* Category & Read Time */}
                  <div className="d-flex gap-3 align-items-center" data-aos="fade-up" data-aos-delay="100">
                    <span className={`badge ${
                      post.category === 'Web Design' ? 'text-bg-secondary' :
                      post.category === 'Development' ? 'text-bg-info' :
                      post.category === 'Digital Marketing' ? 'text-bg-success' :
                      'text-bg-warning'
                    }`}>{post.category}</span>
                    <span className="text-muted">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h1 className="mb-0" data-aos="fade-up" data-aos-delay="200">
                    {post.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="d-flex gap-4 align-items-center text-muted" data-aos="fade-up" data-aos-delay="300">
                    <div className="d-flex gap-2 align-items-center">
                      <iconify-icon icon="solar:user-circle-linear" className="fs-6"></iconify-icon>
                      <span>{post.author}</span>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <iconify-icon icon="solar:calendar-linear" className="fs-6"></iconify-icon>
                      <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                {/* Article Body */}
                <article className="blog-content" data-aos="fade-up">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Keywords/Tags */}
                <div className="mt-10 pt-10 border-top" data-aos="fade-up">
                  <h6 className="mb-3">Tags:</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {post.keywords.map((keyword, idx) => (
                      <span key={idx} className="badge text-bg-light">{keyword}</span>
                    ))}
                  </div>
                </div>

                {/* Related Services */}
                {post.relatedServices.length > 0 && (
                  <div className="mt-10 pt-10 border-top" data-aos="fade-up">
                    <h6 className="mb-4">Related Services:</h6>
                    <div className="d-flex flex-wrap gap-3">
                      {post.relatedServices.map((service, idx) => (
                        <Link key={idx} href={service} className="btn btn-outline-primary">
                          {service.split('/').pop()?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-10 pt-10 border-top" data-aos="fade-up">
                  <h6 className="mb-3">Share this article:</h6>
                  <div className="d-flex gap-2">
                    <a href={`https://twitter.com/intent/tweet?url=${SITE_URL}/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                      <iconify-icon icon="mdi:twitter" className="fs-6"></iconify-icon>
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                      <iconify-icon icon="mdi:facebook" className="fs-6"></iconify-icon>
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${SITE_URL}/blog/${post.slug}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                      <iconify-icon icon="mdi:linkedin" className="fs-6"></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-10 py-lg-12 py-xl-13 bg-light">
            <div className="container">
              <div className="d-flex flex-column gap-10">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  Related <em className="font-instrument">Articles</em>
                </h2>
                <div className="row">
                  {relatedPosts.map((relatedPost, idx) => (
                    <div key={idx} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                      <Link href={`/blog/${relatedPost.slug}`} className="text-decoration-none">
                        <div className="card h-100">
                          <div className="card-body d-flex flex-column gap-3">
                            <div className="d-flex gap-2 align-items-center">
                              <span className={`badge ${
                                relatedPost.category === 'Web Design' ? 'text-bg-secondary' :
                                relatedPost.category === 'Development' ? 'text-bg-info' :
                                relatedPost.category === 'Digital Marketing' ? 'text-bg-success' :
                                'text-bg-warning'
                              }`}>{relatedPost.category}</span>
                              <span className="text-muted fs-4">{relatedPost.readTime}</span>
                            </div>
                            <h4 className="mb-0">{relatedPost.title}</h4>
                            <p className="mb-0 text-muted">{relatedPost.description}</p>
                            <span className="text-primary mt-auto">Read More →</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Need Help with Your <em className="font-instrument">Project?</em></h2>
                    <p className="mb-0">Our team is ready to help you succeed. Get a free consultation today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get Started</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
