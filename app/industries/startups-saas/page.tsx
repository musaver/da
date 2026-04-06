import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Startup & SaaS Website Development Pakistan | Dev Aspire",
  description:
    "Professional website and web app development for startups and SaaS companies in Pakistan. MVP development, landing pages, and scalable platforms for tech startups.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/startups-saas`,
    siteName: "Dev Aspire",
    title: "Startup & SaaS Website Development Pakistan",
    description:
      "Custom web applications and SaaS platforms for Pakistani startups. From MVP to scale, we build products that grow with your business.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Startup & SaaS Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Startup & SaaS Website Development Pakistan",
    description:
      "Custom web applications and SaaS platforms for Pakistani startups.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/startups-saas`,
  },
};

const schema = serviceSchema(
  'Startup & SaaS Development',
  'Professional web application and SaaS platform development for startups in Pakistan. MVP development and scalable solutions.'
);
const breadcrumb = breadcrumbSchema('Startups & SaaS', '/industries/startups-saas');

export default function StartupsIndustry() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Startups & SaaS</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Startup & SaaS <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Turn your startup idea into reality with professional web development. From MVP to scale,
                    we build SaaS platforms and web applications that help Pakistani startups succeed.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Startup Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'MVP Development', desc: 'Launch your minimum viable product quickly to test the market and gather user feedback.', icon: 'solar:rocket-2-linear' },
                  { title: 'SaaS Platforms', desc: 'Scalable subscription-based software with billing, authentication, and multi-tenancy.', icon: 'solar:cloud-linear' },
                  { title: 'Landing Pages', desc: 'High-converting landing pages that explain your product and capture leads effectively.', icon: 'solar:document-add-linear' },
                  { title: 'Mobile-First Apps', desc: 'Progressive web apps that work seamlessly across all devices and platforms.', icon: 'solar:smartphone-linear' },
                  { title: 'API Development', desc: 'RESTful APIs and integrations to connect your product with other services.', icon: 'solar:code-square-linear' },
                  { title: 'Admin Dashboards', desc: 'Powerful admin panels for managing users, content, and business operations.', icon: 'solar:widget-4-linear' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.title}</h4>
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Essential <em className="font-instrument">Features</em>
              </h2>
              <div className="row g-4">
                {[
                  'User Authentication',
                  'Subscription & Billing',
                  'Multi-Tenant Architecture',
                  'Real-Time Features',
                  'Analytics Dashboard',
                  'Email Integration',
                  'Role-Based Access',
                  'API Integrations',
                  'Payment Processing',
                  'Data Export/Import',
                  'Search & Filtering',
                  'Mobile Responsive',
                ].map((feature, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                    <div className="d-flex align-items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" className="fs-5 text-primary"></iconify-icon>
                      <span className="fs-4">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Technology <em className="font-instrument">Stack</em>
              </h2>
              <div className="row g-4">
                {[
                  { name: 'Next.js', desc: 'React framework for production', icon: 'simple-icons:nextdotjs' },
                  { name: 'Node.js', desc: 'Backend runtime environment', icon: 'simple-icons:nodedotjs' },
                  { name: 'PostgreSQL', desc: 'Reliable relational database', icon: 'simple-icons:postgresql' },
                  { name: 'Stripe', desc: 'Payment processing', icon: 'simple-icons:stripe' },
                  { name: 'AWS', desc: 'Cloud hosting & services', icon: 'simple-icons:amazonaws' },
                  { name: 'TypeScript', desc: 'Type-safe development', icon: 'simple-icons:typescript' },
                ].map((tech, idx) => (
                  <div key={idx} className="col-md-4 col-lg-2" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100 text-center">
                      <div className="card-body d-flex flex-column gap-2 align-items-center">
                        <iconify-icon icon={tech.icon} className="fs-2 text-primary"></iconify-icon>
                        <h6 className="mb-0">{tech.name}</h6>
                        <p className="mb-0 text-muted fs-5">{tech.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0 text-white">
                    Ready to Build Your <em className="font-instrument">Startup?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss your startup idea. We'll help you build an MVP, validate
                    your concept, and scale your product as you grow.
                  </p>
                  <Link href="/contact" className="btn btn-white mx-auto">
                    <span className="btn-text">Get Free Consultation</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                  </Link>
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
