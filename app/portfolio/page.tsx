import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';
import { caseStudies } from '@/data/case-studies';

export const metadata = {
  title: "Portfolio - Our Work & Case Studies | Dev Aspire",
  description:
    "Explore Dev Aspire's portfolio of successful web design and development projects across Pakistan. Case studies from e-commerce, education, healthcare, and more.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/portfolio`,
    siteName: "Dev Aspire",
    title: "Portfolio - Dev Aspire",
    description:
      "Successful web design and development projects across Pakistan's key industries. Real results for real businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire Portfolio - Web Design & Development Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Portfolio - Dev Aspire",
    description:
      "Successful web design and development projects across Pakistan's key industries.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

const breadcrumb = breadcrumbSchema('Portfolio', '/portfolio');

export default function PortfolioListing() {
  const industries = ['All', 'E-Commerce', 'Education', 'Healthcare', 'Real Estate', 'Finance & SaaS', 'Food & Restaurant'];
  const featuredProjects = caseStudies.filter(project => project.featured);
  const allProjects = caseStudies;

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Our <em className="font-instrument fw-normal">Portfolio</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Explore our successful projects across Pakistan's key industries. Real case studies with measurable results
                    demonstrating our expertise in web design, development, and digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="py-10 py-lg-12 py-xl-13 bg-light">
            <div className="container">
              <div className="d-flex flex-column gap-10">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  Featured <em className="font-instrument">Projects</em>
                </h2>
                <div className="row g-4">
                  {featuredProjects.map((project, idx) => (
                    <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                      <Link href={`/portfolio/${project.slug}`} className="text-decoration-none">
                        <div className="card h-100 hover-lift">
                          <div className="card-body d-flex flex-column gap-3">
                            <span className="badge text-bg-primary w-fit">{project.industry}</span>
                            <h3 className="mb-0">{project.client}</h3>
                            <h5 className="mb-0 fw-normal">{project.title}</h5>
                            <p className="mb-0 text-muted">{project.description}</p>
                            <div className="d-flex flex-column gap-2 mt-auto">
                              <h6 className="mb-0">Key Results:</h6>
                              <ul className="mb-0 ps-4">
                                {project.results.slice(0, 2).map((result, ridx) => (
                                  <li key={ridx} className="text-muted fs-4">{result}</li>
                                ))}
                              </ul>
                            </div>
                            <span className="text-primary mt-2">View Case Study →</span>
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

        {/* All Projects */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="d-flex flex-column gap-5">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  All <em className="font-instrument">Projects</em>
                </h2>

                {/* Industry Filter */}
                <div className="d-flex justify-content-center gap-3 flex-wrap" data-aos="fade-up" data-aos-delay="100">
                  {industries.map((industry, idx) => (
                    <button key={idx} className={`btn ${idx === 0 ? 'btn-primary' : 'btn-outline-primary'}`}>
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className="row g-4">
                {allProjects.map((project, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 50}>
                    <Link href={`/portfolio/${project.slug}`} className="text-decoration-none">
                      <div className="card h-100">
                        <div className="card-body d-flex flex-column gap-3">
                          <div className="d-flex gap-2 align-items-center justify-content-between">
                            <span className="badge text-bg-secondary">{project.industry}</span>
                            <span className="text-muted fs-4">{new Date(project.completedDate).getFullYear()}</span>
                          </div>
                          <h4 className="mb-0">{project.client}</h4>
                          <p className="mb-0 fs-4 fw-medium">{project.title}</p>
                          <p className="mb-0 text-muted">{project.description}</p>
                          <div className="d-flex flex-wrap gap-2 mt-auto">
                            {project.technologies.slice(0, 3).map((tech, tidx) => (
                              <span key={tidx} className="badge text-bg-light">{tech}</span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="badge text-bg-light">+{project.technologies.length - 3}</span>
                            )}
                          </div>
                          <span className="text-primary">View Case Study →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <div>
                    <h2 className="mb-4 text-white">
                      Ready to Start Your <em className="font-instrument">Project?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Let's create something amazing together. Get a free consultation to discuss your project
                      and see how we can help you achieve similar results.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/services" className="btn btn-outline-white">
                      <span className="btn-text">View Services</span>
                      <iconify-icon icon="solar:widget-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
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
