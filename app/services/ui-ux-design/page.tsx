import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

const SITE_URL = 'https://devaspire.co';

export const metadata = {
  title: "UI/UX Design Services in Pakistan - Dev Aspire",
  description:
    "Expert UI/UX design services in Pakistan by Dev Aspire. Intuitive user interfaces and seamless experiences for websites, mobile apps, and SaaS products.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/ui-ux-design`,
    siteName: "Dev Aspire",
    title: "UI/UX Design Services in Pakistan - Dev Aspire",
    description:
      "Expert UI/UX design services in Pakistan by Dev Aspire. Intuitive user interfaces and seamless experiences for websites, mobile apps, and SaaS products.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "UI/UX Design Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "UI/UX Design Services in Pakistan - Dev Aspire",
    description: "Expert UI/UX design services in Pakistan. Intuitive interfaces and seamless user experiences for websites, mobile apps, and SaaS products by Dev Aspire.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/ui-ux-design` },
};

const schema = serviceSchema(
  'UI/UX Design Services',
  'Professional UI/UX design services including user research, wireframing, prototyping, interface design, and usability testing for web and mobile applications in Pakistan.'
);
const breadcrumb = breadcrumbSchema('UI/UX Design', '/services/ui-ux-design');

export default function UIUXDesign() {
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
                UI/UX Design Services in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    We design digital experiences that users love. From user research to pixel-perfect interfaces, Dev Aspire&apos;s UI/UX design
                    services help Pakistani businesses create products that are both beautiful and functional.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Discuss Your Design Project</span>
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
                Our UI/UX Design <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { title: 'User Research & Discovery', desc: 'We start by understanding your users, business goals, and market landscape through interviews, surveys, and competitive analysis tailored for Pakistani and global audiences.', color: 'secondary', icon: 'solar:users-group-rounded-linear', step: '01' },
                  { title: 'Wireframing & Information Architecture', desc: 'We create low-fidelity wireframes and site maps that define the structure, navigation, and user flows of your product before any visual design begins.', color: 'info', icon: 'solar:layers-linear', step: '02' },
                  { title: 'Visual Design & Prototyping', desc: 'Our designers create stunning, pixel-perfect interfaces in Figma with interactive prototypes that bring your product to life before development starts.', color: 'orange', icon: 'solar:magic-stick-3-linear', step: '03' },
                  { title: 'Usability Testing & Iteration', desc: 'We test designs with real users to identify pain points and iterate until the experience is smooth, intuitive, and optimized for conversion.', color: 'success', icon: 'solar:test-tube-linear', step: '04' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className={`card bg-${service.color}-subtle h-100`}>
                      <div className="card-body d-flex flex-column gap-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <iconify-icon icon={service.icon} className={`fs-9 text-${service.color}`}></iconify-icon>
                          <span className={`fs-11 fw-bold text-${service.color} opacity-25`}>{service.step}</span>
                        </div>
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

        {/* What We Design */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                What We <em className="font-instrument">Design</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Website UI/UX Design', desc: 'Responsive, conversion-optimized website designs for businesses, startups, and e-commerce stores in Pakistan.' },
                  { title: 'Mobile App Design', desc: 'Native iOS and Android app interfaces with intuitive navigation and engaging user experiences.' },
                  { title: 'SaaS Product Design', desc: 'Complex dashboard and SaaS application interfaces designed for usability, scalability, and user retention.' },
                  { title: 'E-Commerce UX Design', desc: 'Shopping experiences optimized for conversions with smooth checkout flows and product discovery.' },
                  { title: 'Landing Page Design', desc: 'High-converting landing pages designed to capture leads and drive sales for marketing campaigns.' },
                  { title: 'Design System Creation', desc: 'Scalable design systems and component libraries that ensure consistency across your entire product.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
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
                    <h2 className="mb-0">Let&apos;s Design Something <em className="font-instrument">Amazing</em></h2>
                    <p className="mb-0">Transform your digital product with user-centered design. Get a free UI/UX consultation from Dev Aspire today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Start Your Design Project</span>
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
