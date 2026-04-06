import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Finance & FinTech Website Development Pakistan | Dev Aspire",
  description:
    "Professional website design for banks, financial services, FinTech startups, and investment firms in Pakistan. Secure, compliant, and user-friendly financial platforms.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/finance`,
    siteName: "Dev Aspire",
    title: "Finance & FinTech Website Development Pakistan",
    description:
      "Custom websites for financial institutions and FinTech companies with security, compliance, and seamless user experience.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Finance Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Finance & FinTech Website Development Pakistan",
    description:
      "Custom websites for financial institutions and FinTech companies.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/finance`,
  },
};

const schema = serviceSchema(
  'Finance Website Development',
  'Professional website design for banks, financial services, and FinTech companies in Pakistan with security and compliance.'
);
const breadcrumb = breadcrumbSchema('Finance', '/industries/finance');

export default function FinanceIndustry() {
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
                  <li className="breadcrumb-item active" aria-current="page">Finance</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Finance & FinTech <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Build trust and drive growth with secure financial platforms. From banking websites to FinTech apps,
                    we create compliant solutions for Pakistan's evolving financial sector.
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
                Finance Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Banking Websites', desc: 'Corporate websites for banks with product info, branch locators, and customer portals.', icon: 'solar:buildings-3-linear' },
                  { title: 'FinTech Platforms', desc: 'Digital wallets, payment gateways, and financial service apps for the modern market.', icon: 'solar:wallet-money-linear' },
                  { title: 'Investment Portals', desc: 'Platforms for stock trading, mutual funds, and investment management services.', icon: 'solar:chart-2-linear' },
                  { title: 'Insurance Websites', desc: 'Policy comparison, quote generation, and claim management for insurance companies.', icon: 'solar:shield-check-linear' },
                  { title: 'Accounting Software', desc: 'Cloud-based accounting and invoicing solutions for businesses and freelancers.', icon: 'solar:calculator-linear' },
                  { title: 'Loan Platforms', desc: 'Online loan application, approval, and management systems for lenders.', icon: 'solar:hand-money-linear' },
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
                  'SSL & Data Encryption',
                  'Two-Factor Authentication',
                  'Secure Payment Processing',
                  'KYC Verification Systems',
                  'Transaction History',
                  'Real-Time Dashboards',
                  'Financial Calculators',
                  'Document Management',
                  'Compliance Reporting',
                  'API Integrations',
                  'Mobile Banking Apps',
                  'Customer Support Chat',
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

        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0 text-white">
                    Ready to Transform <em className="font-instrument">Financial Services?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss secure, compliant financial platforms that meet regulatory
                    requirements while delivering exceptional user experience.
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
