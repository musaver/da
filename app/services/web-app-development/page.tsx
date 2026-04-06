import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Web & App Development Services in Pakistan - Dev Aspire",
  description:
    "Professional web and mobile app development in Pakistan by Dev Aspire. Custom websites, React, Next.js, and full-stack development for startups.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/web-app-development`,
    siteName: "Dev Aspire",
    title: "Web & App Development Services in Pakistan - Dev Aspire",
    description:
      "Professional web and mobile app development in Pakistan. Custom websites, React, Next.js, Node.js, and full-stack development for startups and businesses.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "Web & App Development Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web & App Development Services in Pakistan - Dev Aspire",
    description: "Professional web and mobile app development in Pakistan. Custom websites, React, Next.js, Node.js, and full-stack development by Dev Aspire.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/web-app-development` },
};

const schema = serviceSchema(
  'Web & App Development Services',
  'Full-stack web and mobile app development services using React, Next.js, Node.js, React Native, and modern technologies for businesses and startups in Pakistan.'
);
const breadcrumb = breadcrumbSchema('Web & App Development', '/services/web-app-development');

export default function WebAppDevelopment() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web & App Development in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    From custom websites to full-scale mobile applications, Dev Aspire delivers high-performance web and app development
                    solutions built with modern technologies like React, Next.js, and Node.js for Pakistani businesses and global startups.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Get a Free Project Quote</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Web & App Development <em className="font-instrument">Services</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Custom Website Development', desc: 'Responsive, fast-loading websites built with Next.js, React, and modern frameworks. From business websites to complex web portals optimized for the Pakistani market.', color: 'danger', icon: 'solar:window-frame-linear' },
                  { title: 'Mobile App Development', desc: 'Cross-platform iOS and Android apps built with React Native and Flutter. Native performance with a single codebase to reach Pakistani mobile users effectively.', color: 'info', icon: 'solar:smartphone-linear' },
                  { title: 'E-Commerce Development', desc: 'Full-featured e-commerce solutions with Shopify, WooCommerce, or custom builds. Payment gateway integration with JazzCash, Easypaisa, and international providers.', color: 'success', icon: 'solar:cart-large-2-linear' },
                  { title: 'SaaS Application Development', desc: 'Scalable SaaS products with multi-tenant architecture, subscription billing, user management, and API integrations built for growth.', color: 'orange', icon: 'solar:cloud-linear' },
                  { title: 'API Development & Integration', desc: 'RESTful and GraphQL API development, third-party integrations, microservices architecture, and backend systems built with Node.js, Python, and PostgreSQL.', color: 'secondary', icon: 'solar:programming-linear' },
                  { title: 'WordPress Development', desc: 'Custom WordPress themes, plugins, and WooCommerce stores. Affordable website solutions for small businesses and bloggers in Pakistan.', color: 'primary', icon: 'solar:global-linear' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className={`card bg-${service.color}-subtle h-100`}>
                      <div className="card-body d-flex flex-column gap-4">
                        <iconify-icon icon={service.icon} className={`fs-9 text-${service.color}`}></iconify-icon>
                        <h3 className={`text-${service.color} mb-0`}>{service.title}</h3>
                        <p className="mb-0">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Technologies We <em className="font-instrument">Work With</em>
              </h2>
              <div className="row justify-content-center">
                {[
                  { category: 'Frontend', techs: 'React, Next.js, Vue.js, TypeScript, Tailwind CSS' },
                  { category: 'Backend', techs: 'Node.js, Python, Django, Express, PostgreSQL, MongoDB' },
                  { category: 'Mobile', techs: 'React Native, Flutter, iOS (Swift), Android (Kotlin)' },
                  { category: 'DevOps', techs: 'AWS, Vercel, Docker, CI/CD, GitHub Actions' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 text-center">
                      <div className="card-body d-flex flex-column gap-3">
                        <h3 className="mb-0 text-primary">{item.category}</h3>
                        <p className="mb-0">{item.techs}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our Development <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { step: '01', title: 'Discovery & Planning', desc: 'We analyze your requirements, define scope, and create a detailed project plan with milestones.' },
                  { step: '02', title: 'Design & Prototyping', desc: 'UI/UX design with interactive prototypes for your approval before any code is written.' },
                  { step: '03', title: 'Development & Testing', desc: 'Agile development with regular sprints, code reviews, and comprehensive testing at every stage.' },
                  { step: '04', title: 'Launch & Support', desc: 'Deployment, performance optimization, and ongoing maintenance to keep your app running smoothly.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <span className="fs-11 fw-bold text-primary opacity-25">{item.step}</span>
                        <h3 className="mb-0">{item.title}</h3>
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <h2 className="mb-0">Let&apos;s Build Your Next <em className="font-instrument">Digital Product</em></h2>
                    <p className="mb-0">From idea to launch, Dev Aspire builds web and mobile applications that drive results. Get a free quote for your project today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get Your Free Quote</span>
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
