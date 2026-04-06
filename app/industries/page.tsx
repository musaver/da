import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Industries We Serve - Web Design & Development | Dev Aspire",
  description:
    "Dev Aspire serves businesses across major industries in Pakistan including E-Commerce, Education, Healthcare, Real Estate, Finance, Food & Restaurant, Travel, and Startups & SaaS.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries`,
    siteName: "Dev Aspire",
    title: "Industries We Serve - Dev Aspire",
    description:
      "Professional web design and development services across Pakistan's key industries. Industry-specific expertise with proven results.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Serving Major Industries in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Industries We Serve - Dev Aspire",
    description:
      "Professional web design and development services across Pakistan's key industries.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
};

const breadcrumb = breadcrumbSchema('Industries', '/industries');

export default function IndustriesHub() {
  const industries = [
    {
      name: 'E-Commerce',
      description: 'Online stores, marketplaces, and shopping platforms with payment integration and inventory management.',
      highlights: ['Shopify Stores', 'Custom Marketplaces', 'Payment Integration', 'Inventory Systems'],
      icon: 'solar:cart-large-2-linear',
      color: 'primary',
      slug: 'ecommerce',
    },
    {
      name: 'Education',
      description: 'School websites, LMS platforms, and online learning solutions for educational institutions.',
      highlights: ['School Websites', 'Learning Management', 'Student Portals', 'Online Admissions'],
      icon: 'solar:book-2-linear',
      color: 'info',
      slug: 'education',
    },
    {
      name: 'Healthcare',
      description: 'Hospital websites, patient portals, and telemedicine platforms for medical institutions.',
      highlights: ['Patient Portals', 'Appointment Systems', 'Telemedicine', 'Medical Records'],
      icon: 'solar:medical-kit-linear',
      color: 'danger',
      slug: 'healthcare',
    },
    {
      name: 'Real Estate',
      description: 'Property listing websites, developer portals, and real estate marketplaces with advanced search.',
      highlights: ['Property Listings', 'Virtual Tours', 'Lead Generation', 'CRM Integration'],
      icon: 'solar:home-2-linear',
      color: 'success',
      slug: 'real-estate',
    },
    {
      name: 'Finance',
      description: 'Banking websites, FinTech platforms, and financial service applications with security compliance.',
      highlights: ['Banking Portals', 'FinTech Apps', 'Investment Platforms', 'Payment Systems'],
      icon: 'solar:wallet-money-linear',
      color: 'warning',
      slug: 'finance',
    },
    {
      name: 'Food & Restaurant',
      description: 'Restaurant websites, food delivery platforms, and online ordering systems for food businesses.',
      highlights: ['Online Ordering', 'Table Reservations', 'Menu Management', 'Delivery Integration'],
      icon: 'solar:chef-hat-linear',
      color: 'danger',
      slug: 'food-restaurant',
    },
    {
      name: 'Travel & Hospitality',
      description: 'Hotel websites, travel agencies, and booking platforms for tourism and hospitality businesses.',
      highlights: ['Booking Engines', 'Property Management', 'Tour Packages', 'Reservation Systems'],
      icon: 'solar:suitcase-linear',
      color: 'info',
      slug: 'travel-hospitality',
    },
    {
      name: 'Startups & SaaS',
      description: 'MVP development, SaaS platforms, and web applications for tech startups and software companies.',
      highlights: ['MVP Development', 'SaaS Platforms', 'API Development', 'Scalable Architecture'],
      icon: 'solar:rocket-2-linear',
      color: 'primary',
      slug: 'startups-saas',
    },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Industries</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Industries We <em className="font-instrument fw-normal">Serve</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Dev Aspire has deep expertise across Pakistan's key industries. From e-commerce to healthcare,
                    we understand the unique challenges and opportunities in each sector, delivering tailored solutions
                    that drive real business results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Industry Expertise Matters */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Why <em className="font-instrument">Industry Expertise</em> Matters
                  </h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        <iconify-icon icon="solar:diploma-verified-linear" className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">Sector-Specific Knowledge</h4>
                        <p className="mb-0 text-muted">
                          We understand the regulations, compliance requirements, and best practices specific to your industry,
                          ensuring your website meets all necessary standards.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        <iconify-icon icon="solar:lightbulb-bolt-linear" className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">Industry Best Practices</h4>
                        <p className="mb-0 text-muted">
                          We implement proven features and workflows from successful projects in your industry,
                          saving you time and avoiding common pitfalls.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        <iconify-icon icon="solar:users-group-rounded-linear" className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">Target Audience Understanding</h4>
                        <p className="mb-0 text-muted">
                          We know what your customers expect from websites in your industry, creating experiences
                          that resonate with your target audience and drive conversions.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-column gap-3">
                        <iconify-icon icon="solar:widget-4-linear" className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">Industry-Specific Features</h4>
                        <p className="mb-0 text-muted">
                          From booking systems for hotels to prescription management for clinics, we build the specialized
                          features your industry requires to operate efficiently.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Industries We <em className="font-instrument">Specialize In</em>
              </h2>
              <div className="row g-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={`/industries/${industry.slug}`} className="text-decoration-none">
                      <div className={`card h-100 bg-${industry.color}-subtle hover-lift`}>
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon={industry.icon} className={`fs-1 text-${industry.color}`}></iconify-icon>
                          <div>
                            <h3 className="mb-2">{industry.name}</h3>
                            <p className="mb-0 text-muted fs-4">{industry.description}</p>
                          </div>
                          <div className="d-flex flex-column gap-2 mt-auto">
                            <h6 className="mb-0">Key Solutions:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {industry.highlights.map((highlight, hidx) => (
                                <span key={hidx} className="badge text-bg-white fs-5">{highlight}</span>
                              ))}
                            </div>
                          </div>
                          <span className={`text-${industry.color} fw-bold mt-2`}>Learn More →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services for All Industries */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="mb-4 text-center" data-aos="fade-up">
                    Services for <em className="font-instrument">All Industries</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    Regardless of your industry, we provide the full range of web design, development, and digital
                    marketing services to help you succeed online.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    service: 'Brand Strategy',
                    desc: 'Build a strong brand identity that sets you apart in your industry.',
                    icon: 'solar:target-linear',
                    link: '/services/brand-strategy',
                  },
                  {
                    service: 'UI/UX Design',
                    desc: 'User-centered designs optimized for your industry&apos;s user expectations.',
                    icon: 'solar:palette-linear',
                    link: '/services/ui-ux-design',
                  },
                  {
                    service: 'Web App Development',
                    desc: 'Custom web applications with industry-specific features and workflows.',
                    icon: 'solar:code-linear',
                    link: '/services/web-app-development',
                  },
                  {
                    service: 'Digital Marketing',
                    desc: 'SEO and marketing strategies tailored to your industry and target audience.',
                    icon: 'solar:chart-2-linear',
                    link: '/services/digital-marketing',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <Link href={item.link} className="text-decoration-none">
                      <div className="card h-100 hover-lift">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">{item.service}</h4>
                          <p className="mb-0 text-muted">{item.desc}</p>
                          <span className="text-primary mt-auto">Learn More →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <div>
                    <h2 className="mb-4 text-white">
                      Ready to Transform Your <em className="font-instrument">Industry Presence?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Whether you're in e-commerce, healthcare, education, or any other industry, we have the expertise
                      to help you succeed online. Get a free consultation today.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/portfolio" className="btn btn-outline-white">
                      <span className="btn-text">View Portfolio</span>
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
