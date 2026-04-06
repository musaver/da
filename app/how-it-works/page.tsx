import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "How Dev Aspire Works - Our Web Design & Development Process",
  description:
    "Discover Dev Aspire's proven web design and development process. From discovery to launch, see how we bring your vision to life with transparency and collaboration.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/how-it-works`,
    siteName: "Dev Aspire",
    title: "How Dev Aspire Works - Our Process | Dev Aspire",
    description:
      "Discover our proven process for web design and development. From discovery to launch, we work transparently and collaboratively with Pakistani businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "How Dev Aspire Works - Web Design Process Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "How Dev Aspire Works - Our Process",
    description:
      "Discover our proven web design and development process from discovery to launch.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/how-it-works`,
  },
};

export default function HowItWorks() {
  return (
    <>
      <Header />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                How Dev Aspire <em className="font-instrument fw-normal">Works</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Our proven process ensures your project is delivered on time, within budget, and exceeds expectations. Here's exactly how we work with businesses across Pakistan to build exceptional digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Process Steps */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-14">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation & Discovery',
                  subtitle: 'Understanding Your Vision',
                  duration: '1-2 Days',
                  color: 'primary',
                  description: 'We start with a free consultation call to understand your business, goals, challenges, and vision. This is where we learn about your target audience, competitors, and what success looks like for your project.',
                  deliverables: [
                    'Free 30-minute consultation call',
                    'Project scope and requirements document',
                    'Detailed proposal with timeline and pricing',
                    'Contract and project agreement'
                  ]
                },
                {
                  step: '02',
                  title: 'Strategy & Planning',
                  subtitle: 'Laying the Foundation',
                  duration: '3-5 Days',
                  color: 'info',
                  description: 'Once the project kicks off, we dive deep into research and planning. We analyze your industry, competitors, and target audience in Pakistan to create a comprehensive strategy that drives results.',
                  deliverables: [
                    'Market and competitor research report',
                    'User personas and journey maps',
                    'Information architecture and sitemap',
                    'Technical stack and architecture decisions',
                    'Project roadmap with milestones'
                  ]
                },
                {
                  step: '03',
                  title: 'Design & Prototyping',
                  subtitle: 'Bringing Ideas to Life',
                  duration: '1-3 Weeks',
                  color: 'orange',
                  description: 'Our designers create wireframes and high-fidelity mockups in Figma. You'll see exactly how your website or app will look and function before any code is written. We iterate based on your feedback until the design is perfect.',
                  deliverables: [
                    'Low-fidelity wireframes',
                    'High-fidelity visual designs',
                    'Interactive prototypes in Figma',
                    'Design system and style guide',
                    'Mobile and tablet responsive designs'
                  ]
                },
                {
                  step: '04',
                  title: 'Development & Implementation',
                  subtitle: 'Building Your Product',
                  duration: '2-8 Weeks',
                  color: 'success',
                  description: 'Our developers bring the designs to life using modern technologies like React, Next.js, and Node.js. We follow agile methodology with bi-weekly sprints, so you see progress regularly and can provide feedback throughout.',
                  deliverables: [
                    'Frontend development (HTML, CSS, JavaScript, React)',
                    'Backend development and database setup',
                    'API integrations and third-party services',
                    'CMS setup for easy content management',
                    'Bi-weekly progress demos and updates'
                  ]
                },
                {
                  step: '05',
                  title: 'Testing & Quality Assurance',
                  subtitle: 'Ensuring Excellence',
                  duration: '3-7 Days',
                  color: 'secondary',
                  description: 'Before launch, we rigorously test every aspect of your project. This includes functionality testing, browser compatibility, mobile responsiveness, performance optimization, and security audits to ensure everything works flawlessly.',
                  deliverables: [
                    'Cross-browser testing (Chrome, Firefox, Safari, Edge)',
                    'Mobile device testing (iOS and Android)',
                    'Performance optimization and speed testing',
                    'Security audit and vulnerability assessment',
                    'User acceptance testing (UAT) with your team'
                  ]
                },
                {
                  step: '06',
                  title: 'Launch & Deployment',
                  subtitle: 'Going Live',
                  duration: '1-3 Days',
                  color: 'danger',
                  description: 'It's time to go live! We handle all technical aspects of deployment including domain setup, hosting configuration, SSL certificates, and DNS propagation. We monitor closely during launch to ensure a smooth transition.',
                  deliverables: [
                    'Domain and hosting setup',
                    'SSL certificate installation',
                    'Database migration and deployment',
                    'Google Analytics and tracking setup',
                    'Search engine submission (Google, Bing)',
                    'Launch day monitoring and support'
                  ]
                },
                {
                  step: '07',
                  title: 'Training & Handover',
                  subtitle: 'Empowering Your Team',
                  duration: '1-2 Days',
                  color: 'warning',
                  description: 'We provide comprehensive training so your team can manage day-to-day updates confidently. You receive all source code, design files, documentation, and admin credentials. We ensure a smooth handover so you have full control.',
                  deliverables: [
                    'Admin panel training session',
                    'Content management documentation',
                    'Source code and design files',
                    'Technical documentation for developers',
                    'Login credentials for all platforms'
                  ]
                },
                {
                  step: '08',
                  title: 'Ongoing Support & Growth',
                  subtitle: 'Long-term Partnership',
                  duration: 'Ongoing',
                  color: 'primary',
                  description: 'Our relationship doesn't end at launch. We provide ongoing support, maintenance, and optimization to help your business grow. Whether you need bug fixes, new features, or marketing support, we're here for the long haul.',
                  deliverables: [
                    '30-90 days of free post-launch support',
                    'Monthly maintenance packages available',
                    'Performance monitoring and optimization',
                    'SEO and digital marketing services',
                    'New feature development as you scale'
                  ]
                },
              ].map((phase, idx) => (
                <div key={idx} className="row align-items-center" data-aos="fade-up" data-aos-delay={100} data-aos-duration="1000">
                  <div className="col-lg-4 mb-4 mb-lg-0">
                    <div className={`card bg-${phase.color}-subtle h-100 border-0`}>
                      <div className="card-body d-flex flex-column gap-3 p-5">
                        <span className={`fs-11 fw-bold text-${phase.color} opacity-50`}>{phase.step}</span>
                        <h2 className={`mb-0 text-${phase.color}`}>{phase.title}</h2>
                        <h5 className="mb-0 text-muted">{phase.subtitle}</h5>
                        <div className={`badge bg-${phase.color} text-white w-fit mt-2`}>{phase.duration}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p className="fs-5 mb-4">{phase.description}</p>
                    <h6 className="mb-3">Key Deliverables:</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2">
                      {phase.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="d-flex gap-2">
                          <iconify-icon icon="lucide:check" className={`fs-6 text-${phase.color} mt-1`}></iconify-icon>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                What Makes Our Process <em className="font-instrument">Different</em>
              </h2>
              <div className="row">
                {[
                  { icon: 'solar:shield-check-linear', title: 'Transparent Communication', desc: 'No surprises. You receive regular updates, progress reports, and have direct access to our team throughout the project.' },
                  { icon: 'solar:hand-shake-linear', title: 'Collaborative Approach', desc: 'Your input matters. We involve you at key decision points and iterate based on your feedback to ensure the final product matches your vision.' },
                  { icon: 'solar:checklist-linear', title: 'Agile Methodology', desc: 'We break projects into sprints with clear milestones. This allows flexibility to adapt to changes while keeping the project on track.' },
                  { icon: 'solar:chart-square-linear', title: 'Data-Driven Decisions', desc: 'We back our recommendations with research, analytics, and Pakistani market insights rather than assumptions or trends.' },
                  { icon: 'solar:star-shine-linear', title: 'Quality First', desc: 'We never cut corners. Every line of code is reviewed, every design is tested, and every detail is perfected before launch.' },
                  { icon: 'solar:infinite-linear', title: 'Long-term Support', desc: 'We build lasting partnerships. Our relationship continues after launch with maintenance, optimization, and growth support.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-9 text-primary"></iconify-icon>
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
                    <h2 className="mb-0">Ready to Start Your <em className="font-instrument">Project?</em></h2>
                    <p className="mb-0">Let's discuss your goals and create a custom roadmap for your success. Schedule a free consultation today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get Started Today</span>
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
