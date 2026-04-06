import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "About Us - Dev Aspire",
  description:
    "Learn about Dev Aspire, the leading web design and web development agency in Pakistan. Discover our mission, team, and commitment to building bold brands.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/about-us`,
    siteName: "Dev Aspire",
    title: "About Us - Dev Aspire",
    description:
      "Learn about Dev Aspire, the leading web design and web development agency in Pakistan. Discover our mission, team, and commitment to building bold brands.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "About Dev Aspire - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About Us - Dev Aspire",
    description:
      "Learn about Dev Aspire, the leading web design and web development agency in Pakistan. Discover our mission, team, and commitment to building bold brands.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
};

export default function AboutUs() {
  return (
    <>
      <Header />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                About <em className="font-instrument fw-normal">Dev Aspire</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row">
              {[
                { stat: '10+', label: 'Years of Excellence', desc: 'Serving businesses since 2015' },
                { stat: '40+', label: 'Projects Completed', desc: 'Across Pakistan and internationally' },
                { stat: '30+', label: 'Happy Clients', desc: 'Building long-term partnerships' },
                { stat: '10+', label: 'Team Members', desc: 'Experts in design and development' },
              ].map((item, idx) => (
                <div key={idx} className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                  <div className="text-center">
                    <h2 className="mb-2 fs-11 text-primary">{item.stat}</h2>
                    <h5 className="mb-1">{item.label}</h5>
                    <p className="mb-0 text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="d-flex flex-column gap-8">
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <h2 className="mb-4">About Us</h2>
                      <p className="mb-0 fs-5">
                        Dev Aspire is a leading web design and development company based in Islamabad, Pakistan, serving businesses locally and internationally since 2015. Our team of passionate designers, developers, and marketers is dedicated to creating digital experiences that drive growth and deliver measurable results.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        We specialize in comprehensive digital solutions including brand strategy, web and mobile app development, UI/UX design, Shopify e-commerce, and digital marketing. Our approach combines creative excellence with technical expertise to build products that users love and businesses rely on.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <h2 className="mb-4">Who We Are</h2>
                      <p className="mb-0 fs-5">
                        Since our establishment, we've successfully served over 30 clients across Pakistan (Islamabad, Karachi, Lahore) and internationally, completing 40+ projects ranging from simple websites to complex SaaS applications. Our diverse portfolio spans industries including e-commerce, education, healthcare, finance, and technology startups.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        Our team brings together expertise in modern technologies like React, Next.js, Node.js, React Native, and cutting-edge design tools like Figma. We stay ahead of trends through continuous learning and regularly update our skills to deliver solutions using the latest, most reliable technologies.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <h2 className="mb-4">Our Mission</h2>
                      <p className="mb-0 fs-5">
                        Our mission is to empower businesses across Pakistan and globally with exceptional digital products that drive growth. We believe every business, regardless of size, deserves access to world-class design and development that helps them compete in the digital age.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        We're committed to transparency, quality, and long-term partnerships. From the first consultation to post-launch support, we work collaboratively with our clients, keeping them informed at every stage and ensuring the final product exceeds expectations.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <h2 className="mb-4">Why Choose Dev Aspire</h2>
                      <div className="mt-6">
                        <ul className="list-unstyled d-flex flex-column gap-4">
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Pakistani Market Expertise</h5>
                              <p className="mb-0 fs-5">Based in Islamabad, we understand the Pakistani market, cultural nuances, and business landscape across major cities like Karachi, Lahore, and Rawalpindi.</p>
                            </div>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Modern Technology Stack</h5>
                              <p className="mb-0 fs-5">We build with React, Next.js, Node.js, React Native, and other modern technologies that ensure your product is fast, secure, scalable, and future-proof.</p>
                            </div>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Transparent Pricing & Process</h5>
                              <p className="mb-0 fs-5">No hidden costs or surprises. We provide detailed proposals with clear timelines, milestones, and pricing so you know exactly what to expect.</p>
                            </div>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Proven Track Record</h5>
                              <p className="mb-0 fs-5">With 40+ completed projects and clients across industries, we have the experience and portfolio to back our expertise. Check our case studies to see real results.</p>
                            </div>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Long-term Support</h5>
                              <p className="mb-0 fs-5">We build lasting partnerships. Our relationship doesn't end at launch—we provide ongoing maintenance, support, and optimization to help your business grow.</p>
                            </div>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <div>
                              <h5 className="mb-2">Quality-First Approach</h5>
                              <p className="mb-0 fs-5">Every line of code is reviewed, every design is tested, and every detail is perfected. We never compromise on quality, regardless of project size or budget.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our <em className="font-instrument">Journey</em>
              </h2>
              <div className="row">
                {[
                  { year: '2015', title: 'Founded', desc: 'Dev Aspire established in Islamabad, Pakistan with a vision to help businesses succeed online.' },
                  { year: '2017', title: 'Team Expansion', desc: 'Grew our team to 5+ talented designers and developers, expanding service offerings.' },
                  { year: '2019', title: 'International Clients', desc: 'Started serving international clients across North America and Europe.' },
                  { year: '2021', title: '25+ Projects', desc: 'Milestone of 25 completed projects across diverse industries in Pakistan.' },
                  { year: '2023', title: 'Technology Leadership', desc: 'Adopted modern stack: React, Next.js, React Native for cutting-edge solutions.' },
                  { year: '2026', title: 'Continued Growth', desc: '40+ projects completed, serving businesses across Pakistan and globally.' },
                ].map((milestone, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <h3 className="mb-0 text-primary">{milestone.year}</h3>
                        <h4 className="mb-0">{milestone.title}</h4>
                        <p className="mb-0">{milestone.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-8">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-7">
                      <h2 className="mb-0 text-center">Ready to Start Your <em className="font-instrument">Project</em>?</h2>
                      <p className="text-dark mb-0 text-center">
                        Let's work together to create something amazing. Contact us today to discuss your project requirements.
                      </p>
                    </div>
                    <a href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Contact Us</span>
                      <iconify-icon icon="solar:arrow-right-up-linear"
                        className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </a>
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
