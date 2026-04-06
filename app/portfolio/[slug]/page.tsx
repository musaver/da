import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { caseStudySchema, breadcrumbSchema } from '@/lib/structured-data';
import { caseStudies, type CaseStudy } from '@/data/case-studies';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return caseStudies.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - ${project.client} Case Study | Dev Aspire`,
    description: project.description,
    openGraph: {
      type: "article" as const,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      siteName: "Dev Aspire",
      title: `${project.title} - ${project.client}`,
      description: project.description,
      images: [
        {
          url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
          width: 1200,
          height: 630,
          alt: `${project.client} Case Study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${project.title} - ${project.client}`,
      description: project.description,
      images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
    },
    alternates: {
      canonical: `${SITE_URL}/portfolio/${project.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = caseStudies.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const schema = caseStudySchema(
    project.title,
    project.description,
    project.client,
    project.industry,
    `${SITE_URL}/portfolio/${project.slug}`
  );

  const breadcrumb = breadcrumbSchema(`${project.client} Case Study`, `/portfolio/${project.slug}`);

  // Get related projects from same industry
  const relatedProjects = caseStudies
    .filter((p) => p.industry === project.industry && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Project Header */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-5">
                  {/* Breadcrumb */}
                  <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      <li className="breadcrumb-item"><Link href="/portfolio">Portfolio</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">{project.client}</li>
                    </ol>
                  </nav>

                  {/* Industry Badge */}
                  <div data-aos="fade-up" data-aos-delay="100">
                    <span className="badge text-bg-primary">{project.industry}</span>
                  </div>

                  {/* Title */}
                  <h1 className="mb-0" data-aos="fade-up" data-aos-delay="200">
                    {project.title}
                  </h1>

                  {/* Client & Date */}
                  <div className="d-flex gap-4 align-items-center text-muted" data-aos="fade-up" data-aos-delay="300">
                    <div className="d-flex gap-2 align-items-center">
                      <iconify-icon icon="solar:buildings-2-linear" className="fs-6"></iconify-icon>
                      <span>{project.client}</span>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <iconify-icon icon="solar:calendar-linear" className="fs-6"></iconify-icon>
                      <span>{new Date(project.completedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    </div>
                    {project.projectUrl && (
                      <div className="d-flex gap-2 align-items-center">
                        <iconify-icon icon="solar:link-linear" className="fs-6"></iconify-icon>
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-muted">
                          Visit Website
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mb-0 fs-5" data-aos="fade-up" data-aos-delay="400">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-10">
                  {/* The Challenge */}
                  <div data-aos="fade-up">
                    <h2 className="mb-4">The Challenge</h2>
                    <p className="mb-0">{project.challenge}</p>
                  </div>

                  {/* Our Solution */}
                  <div data-aos="fade-up">
                    <h2 className="mb-4">Our Solution</h2>
                    <p className="mb-0">{project.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0">Key Features</h2>
                  <div className="row g-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="d-flex align-items-center gap-2">
                          <iconify-icon icon="solar:check-circle-linear" className="fs-5 text-primary"></iconify-icon>
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0">Results & Impact</h2>
                  <div className="row g-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="col-md-6">
                        <div className="card">
                          <div className="card-body d-flex align-items-center gap-3">
                            <iconify-icon icon="solar:chart-2-linear" className="fs-1 text-primary"></iconify-icon>
                            <span>{result}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0">Technology Stack</h2>
                  <div className="d-flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="badge text-bg-primary fs-5 px-3 py-2">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-10 py-lg-12 py-xl-13">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <div className="card bg-dark text-white" data-aos="fade-up">
                    <div className="card-body d-flex flex-column gap-5 p-5 p-lg-7">
                      <iconify-icon icon="solar:quote-up-linear" className="fs-1 text-white text-opacity-50"></iconify-icon>
                      <p className="mb-0 fs-5">{project.testimonial.quote}</p>
                      <div className="d-flex flex-column gap-1">
                        <h5 className="mb-0">{project.testimonial.author}</h5>
                        <span className="text-white text-opacity-75">{project.testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-10 py-lg-12 py-xl-13 bg-light">
            <div className="container">
              <div className="d-flex flex-column gap-10">
                <h2 className="mb-0 text-center" data-aos="fade-up">
                  Related <em className="font-instrument">Projects</em>
                </h2>
                <div className="row g-4">
                  {relatedProjects.map((relatedProject, idx) => (
                    <div key={idx} className="col-md-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                      <Link href={`/portfolio/${relatedProject.slug}`} className="text-decoration-none">
                        <div className="card h-100">
                          <div className="card-body d-flex flex-column gap-3">
                            <span className="badge text-bg-secondary w-fit">{relatedProject.industry}</span>
                            <h4 className="mb-0">{relatedProject.client}</h4>
                            <p className="mb-0 text-muted">{relatedProject.description}</p>
                            <span className="text-primary mt-auto">View Case Study →</span>
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
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <div>
                    <h2 className="mb-4 text-white">
                      Have a Project in <em className="font-instrument">Mind?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Let&apos;s discuss how we can help you achieve similar results. Get a free consultation
                      to explore your project requirements and our approach.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/portfolio" className="btn btn-outline-white">
                      <span className="btn-text">View All Projects</span>
                      <iconify-icon icon="solar:gallery-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
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
