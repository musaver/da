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
  const featuredProjects = caseStudies.filter(project => project.featured);
  const allProjects = caseStudies;

  // Get color for each industry
  const getIndustryColor = (industry: string) => {
    const colors: {[key: string]: string} = {
      'Finance & SaaS': 'primary',
      'E-Commerce': 'success',
      'Education': 'info',
      'Real Estate': 'warning',
      'Healthcare': 'danger',
      'Food & Restaurant': 'orange',
      'Travel & Hospitality': 'secondary',
      'Interior Design': 'primary',
    };
    return colors[industry] || 'primary';
  };

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Our <em className="font-instrument fw-normal">Portfolio</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
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
          <section className="py-10 py-lg-12 py-xl-13">
            <div className="container">
              <div className="d-flex flex-column gap-10">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  Featured <em className="font-instrument">Projects</em>
                </h2>
                <div className="row g-4">
                  {featuredProjects.map((project, idx) => {
                    const color = getIndustryColor(project.industry);
                    return (
                      <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                        <Link href={`/portfolio/${project.slug}`} className="text-decoration-none">
                          <div className={`card h-100 bg-${color}-subtle border-0 hover-lift`}>
                            <div className="card-body d-flex flex-column gap-4 p-5">
                              <div className="d-flex justify-content-between align-items-start">
                                <span className={`badge bg-${color} text-white`}>{project.industry}</span>
                                <iconify-icon icon="solar:arrow-right-up-linear" className={`fs-5 text-${color}`}></iconify-icon>
                              </div>
                              <div>
                                <h3 className="mb-2">{project.client}</h3>
                                <p className="mb-0 fw-medium text-muted">{project.title}</p>
                              </div>
                              <p className="mb-0 text-muted fs-4">{project.description}</p>
                              <div className="mt-auto">
                                <h6 className="mb-2 fs-4">Key Results:</h6>
                                <ul className="mb-0 ps-4">
                                  {project.results.slice(0, 2).map((result, ridx) => (
                                    <li key={ridx} className="text-muted fs-4">{result}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="d-flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech, tidx) => (
                                  <span key={tidx} className="badge text-bg-white text-dark fs-5">{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                All <em className="font-instrument">Projects</em>
              </h2>

              <div className="row g-4">
                {allProjects.map((project, idx) => {
                  const color = getIndustryColor(project.industry);
                  return (
                    <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 50}>
                      <Link href={`/portfolio/${project.slug}`} className="text-decoration-none">
                        <div className="card h-100 border-0 hover-lift">
                          <div className="card-body d-flex flex-column gap-3 p-5">
                            <div className="d-flex gap-2 align-items-center justify-content-between">
                              <span className={`badge bg-${color}-subtle text-${color}`}>{project.industry}</span>
                              <span className="text-muted fs-4">{new Date(project.completedDate).getFullYear()}</span>
                            </div>
                            <div>
                              <h4 className="mb-2">{project.client}</h4>
                              <p className="mb-0 fw-medium">{project.title}</p>
                            </div>
                            <p className="mb-0 text-muted fs-4">{project.description.substring(0, 100)}...</p>
                            <div className="d-flex flex-wrap gap-2 mt-auto">
                              {project.technologies.slice(0, 3).map((tech, tidx) => (
                                <span key={tidx} className="badge text-bg-light">{tech}</span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="badge text-bg-light">+{project.technologies.length - 3}</span>
                              )}
                            </div>
                            <span className={`text-${color} fw-bold`}>
                              View Case Study <iconify-icon icon="solar:arrow-right-linear" className="ms-1"></iconify-icon>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card bg-dark mb-0" data-aos="fade-up">
                  <div className="card-body px-lg-7 py-lg-10">
                    <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
                      <div className="col-lg-6">
                        <h2 className="mb-0 text-white">
                          Ready to Start Your <em className="font-instrument">Project?</em>
                        </h2>
                        <p className="mb-0 text-white text-opacity-75 mt-3">
                          Let's create something amazing together. Get a free consultation to discuss your project
                          and see how we can help you achieve similar results.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-3">
                          <Link href="/contact" className="btn btn-white">
                            <span className="btn-text">Get Free Consultation</span>
                            <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                          <Link href="/industries" className="btn btn-outline-white">
                            <span className="btn-text">View Industries</span>
                            <iconify-icon icon="solar:widget-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                        </div>
                      </div>
                    </div>
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
