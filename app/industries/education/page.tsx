import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Education Website Design & Development Pakistan | Dev Aspire",
  description:
    "Professional website design and development for schools, universities, coaching institutes, and online learning platforms in Pakistan. LMS development and digital solutions.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/education`,
    siteName: "Dev Aspire",
    title: "Education Website Design & Development Pakistan",
    description:
      "Custom websites and learning management systems for educational institutions in Pakistan. Modern, accessible, and feature-rich solutions.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Education Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Education Website Design & Development Pakistan",
    description:
      "Custom websites and learning management systems for educational institutions.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/education`,
  },
};

const schema = serviceSchema(
  'Education Website Development',
  'Professional website design and development services for schools, universities, coaching institutes, and online learning platforms in Pakistan.'
);
const breadcrumb = breadcrumbSchema('Education', '/industries/education');

export default function EducationIndustry() {
  const challenges = [
    {
      challenge: 'Student Engagement',
      solution: 'Interactive features, online portals, and mobile-friendly designs that keep students and parents engaged.',
      icon: 'solar:users-group-rounded-linear',
    },
    {
      challenge: 'Online Admissions',
      solution: 'Streamlined admission systems with online applications, document uploads, and payment integration.',
      icon: 'solar:clipboard-check-linear',
    },
    {
      challenge: 'Learning Management',
      solution: 'Complete LMS solutions for online courses, assignments, grading, and student-teacher communication.',
      icon: 'solar:book-2-linear',
    },
    {
      challenge: 'Information Accessibility',
      solution: 'Well-organized content structure making it easy for students, parents, and staff to find information.',
      icon: 'solar:magnifer-linear',
    },
  ];

  const features = [
    { feature: 'Student/Parent Portals', icon: 'solar:login-2-linear' },
    { feature: 'Online Admissions System', icon: 'solar:document-add-linear' },
    { feature: 'Fee Payment Integration', icon: 'solar:card-linear' },
    { feature: 'Course Catalog', icon: 'solar:book-linear' },
    { feature: 'Faculty Profiles', icon: 'solar:user-id-linear' },
    { feature: 'Event Calendar', icon: 'solar:calendar-linear' },
    { feature: 'News & Announcements', icon: 'solar:bell-linear' },
    { feature: 'Photo & Video Galleries', icon: 'solar:gallery-linear' },
    { feature: 'Alumni Network', icon: 'solar:shield-user-linear' },
    { feature: 'Job/Placement Portal', icon: 'solar:suitcase-linear' },
    { feature: 'Research Publications', icon: 'solar:document-text-linear' },
    { feature: 'Mobile App Integration', icon: 'solar:smartphone-linear' },
  ];

  const solutionTypes = [
    {
      type: 'School Websites',
      desc: 'Complete websites for primary and secondary schools including admission systems, parent portals, and event management.',
      icon: 'solar:buildings-2-linear',
    },
    {
      type: 'University Portals',
      desc: 'Comprehensive university websites with student portals, course management, research databases, and alumni networks.',
      icon: 'solar:diploma-linear',
    },
    {
      type: 'Coaching Institutes',
      desc: 'Websites for coaching centers with course listings, online enrollment, fee payment, and result management systems.',
      icon: 'solar:notebook-linear',
    },
    {
      type: 'Online Learning Platforms',
      desc: 'Full-featured LMS platforms for e-learning with video courses, quizzes, certificates, and progress tracking.',
      icon: 'solar:laptop-linear',
    },
  ];

  const faqs = [
    {
      question: 'How much does an education website cost in Pakistan?',
      answer:
        'Costs vary based on features. A basic school website starts from PKR 150,000, comprehensive university portals range from PKR 400,000-800,000, and custom LMS platforms start from PKR 1,000,000. We provide detailed quotes based on your specific requirements including number of users, custom features, and integrations needed.',
    },
    {
      question: 'Can you build a learning management system (LMS)?',
      answer:
        'Yes! We develop custom LMS platforms with features like course management, video hosting, assignments, quizzes, grading systems, student progress tracking, and certificate generation. We can also customize existing platforms like Moodle or Canvas to match your branding and requirements.',
    },
    {
      question: 'Do you integrate online payment systems for fee collection?',
      answer:
        'Absolutely! We integrate Pakistani payment gateways like JazzCash, Easypaisa, and bank transfers for online fee payment. The system can generate automated receipts, track payment history, and send reminders for pending fees. For international students, we integrate PayPal and Stripe.',
    },
    {
      question: 'Can parents and students access their information online?',
      answer:
        'Yes, we build secure student and parent portals where they can access grades, attendance, fee statements, timetables, and communicate with teachers. Each user gets login credentials with role-based access ensuring privacy and security of information.',
    },
    {
      question: 'How do you handle security and data privacy?',
      answer:
        'We implement robust security measures including SSL certificates, encrypted data transmission, secure login systems, regular backups, and compliance with data protection standards. Student information is stored securely with controlled access based on roles and permissions.',
    },
    {
      question: 'Do you provide training and support after launch?',
      answer:
        'Yes! We provide comprehensive training for your staff on managing content, processing admissions, and using administrative features. Our maintenance packages starting from PKR 12,000/month include updates, technical support, and assistance with any issues that arise.',
    },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
                  <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Education</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Education Website <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Empower your educational institution with modern website solutions. From school websites to comprehensive
                    learning management systems, we build digital platforms that enhance education delivery in Pakistan.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
                <Link href="/portfolio" className="btn btn-outline-dark">
                  <span className="btn-text">View Portfolio</span>
                  <iconify-icon icon="solar:gallery-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Education Challenges <em className="font-instrument">&</em> Our Solutions
              </h2>
              <div className="row g-4">
                {challenges.map((item, idx) => (
                  <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.challenge}</h4>
                        <p className="mb-0 text-muted">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Types */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Education Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {solutionTypes.map((solution, idx) => (
                  <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={solution.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{solution.type}</h4>
                        <p className="mb-0 text-muted">{solution.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Essential <em className="font-instrument">Features</em> We Include
              </h2>
              <div className="row g-4">
                {features.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                    <div className="d-flex align-items-center gap-3">
                      <iconify-icon icon={item.icon} className="fs-3 text-primary"></iconify-icon>
                      <span>{item.feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our Education <em className="font-instrument">Services</em>
              </h2>
              <div className="row g-4">
                {[
                  {
                    title: 'Custom Web Development',
                    desc: 'Tailored websites and portals built specifically for your institution&apos;s unique needs and workflows.',
                    link: '/services/web-app-development',
                  },
                  {
                    title: 'UI/UX Design',
                    desc: 'Student-friendly interfaces that are easy to navigate for all age groups and technical abilities.',
                    link: '/services/ui-ux-design',
                  },
                  {
                    title: 'Brand Strategy',
                    desc: 'Professional branding that positions your institution as a leader in education.',
                    link: '/services/brand-strategy',
                  },
                  {
                    title: 'Digital Marketing',
                    desc: 'SEO and digital marketing to attract more students and increase enrollment.',
                    link: '/services/digital-marketing',
                  },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={service.link} className="text-decoration-none">
                      <div className="card h-100 hover-lift">
                        <div className="card-body d-flex flex-column gap-3">
                          <h4 className="mb-0">{service.title}</h4>
                          <p className="mb-0 text-muted">{service.desc}</p>
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

        {/* FAQ */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Frequently Asked <em className="font-instrument">Questions</em>
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="accordion" id="faqAccordion" data-aos="fade-up">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="accordion-item">
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${idx}`}
                            aria-expanded={idx === 0 ? 'true' : 'false'}
                          >
                            {faq.question}
                          </button>
                        </h3>
                        <div
                          id={`faq${idx}`}
                          className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                      Ready to Transform Your <em className="font-instrument">Institution?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how we can help your educational institution enhance
                      its digital presence and streamline operations with modern web solutions.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/services/web-app-development" className="btn btn-outline-white">
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
