import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { blogListingSchema } from '@/lib/structured-data';
import { blogPosts } from '@/data/blog-posts';

export const metadata = {
  title: "Blog - Web Design & Development Insights | Dev Aspire",
  description:
    "Expert insights on web design, development, and digital marketing from Dev Aspire. Learn strategies to grow your business online in Pakistan.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/blog`,
    siteName: "Dev Aspire",
    title: "Blog - Dev Aspire",
    description:
      "Expert insights on web design, development, and digital marketing for Pakistani businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire Blog - Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Blog - Dev Aspire",
    description:
      "Expert insights on web design, development, and digital marketing for Pakistani businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

const schema = blogListingSchema();

export default function BlogListing() {
  const categories = ['All', 'Web Design', 'Development', 'Digital Marketing', 'Business Tips'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const allPosts = blogPosts;

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Dev Aspire <em className="font-instrument fw-normal">Blog</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Expert insights on web design, development, digital marketing, and growing your business online in Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-10 py-lg-12 py-xl-13 bg-light">
            <div className="container">
              <div className="d-flex flex-column gap-10">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  Featured <em className="font-instrument">Articles</em>
                </h2>
                <div className="row">
                  {featuredPosts.map((post, idx) => (
                    <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                      <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                        <div className="card h-100">
                          <div className="card-body d-flex flex-column gap-3">
                            <div className="d-flex gap-2 align-items-center">
                              <span className="badge text-bg-primary">{post.category}</span>
                              <span className="text-muted fs-4">{post.readTime}</span>
                            </div>
                            <h3 className="mb-0">{post.title}</h3>
                            <p className="mb-0 text-muted">{post.description}</p>
                            <div className="d-flex justify-content-between align-items-center mt-auto">
                              <span className="text-muted fs-4">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              <span className="text-primary">Read More →</span>
                            </div>
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

        {/* All Posts */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="d-flex flex-column gap-5">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  All <em className="font-instrument">Articles</em>
                </h2>

                {/* Category Filter - For future enhancement */}
                <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="100">
                  {categories.map((cat, idx) => (
                    <button key={idx} className={`btn ${idx === 0 ? 'btn-primary' : 'btn-outline-primary'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="row">
                {allPosts.map((post, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 50}>
                    <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                      <div className="card h-100">
                        <div className="card-body d-flex flex-column gap-3">
                          <div className="d-flex gap-2 align-items-center">
                            <span className={`badge ${
                              post.category === 'Web Design' ? 'text-bg-secondary' :
                              post.category === 'Development' ? 'text-bg-info' :
                              post.category === 'Digital Marketing' ? 'text-bg-success' :
                              'text-bg-warning'
                            }`}>{post.category}</span>
                            <span className="text-muted fs-4">{post.readTime}</span>
                          </div>
                          <h4 className="mb-0">{post.title}</h4>
                          <p className="mb-0 text-muted">{post.description}</p>
                          <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span className="text-muted fs-4">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                            <span className="text-primary">Read More →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Coming Soon Message if only 3 posts */}
              {allPosts.length === 3 && (
                <div className="text-center" data-aos="fade-up">
                  <p className="text-muted">More articles coming soon! We're working on comprehensive guides to help your business succeed online.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <div>
                    <h2 className="mb-3 text-white">Stay Updated with Our Latest Insights</h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get expert tips on web design, development, and digital marketing delivered to your inbox.
                    </p>
                  </div>
                  <Link href="/contact" className="btn btn-white mx-auto">
                    <span className="btn-text">Subscribe to Newsletter</span>
                    <iconify-icon icon="solar:letter-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Ready to Start Your <em className="font-instrument">Project?</em></h2>
                    <p className="mb-0">Have questions or need expert guidance? Our team is here to help you succeed online.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get in Touch</span>
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
