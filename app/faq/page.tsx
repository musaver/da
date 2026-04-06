import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Frequently Asked Questions - Dev Aspire",
  description:
    "Get answers to common questions about Dev Aspire's web design, development, and digital marketing services in Pakistan. Pricing, timelines, process, and more.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/faq`,
    siteName: "Dev Aspire",
    title: "Frequently Asked Questions - Dev Aspire",
    description:
      "Common questions about Dev Aspire's web design, development, and digital marketing services in Pakistan. Learn about pricing, process, and what to expect.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire FAQ - Web Design & Development Agency Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Frequently Asked Questions - Dev Aspire",
    description:
      "Common questions about Dev Aspire's web design, development, and digital marketing services in Pakistan.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FAQ() {
  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          id: 'gen1',
          question: 'What services does Dev Aspire offer?',
          answer: 'Dev Aspire provides comprehensive digital services including Brand Strategy, Digital Marketing (SEO, PPC, Social Media), UI/UX Design, Shopify Development, and Web & App Development. We work with businesses across Pakistan and internationally to build powerful online presence.'
        },
        {
          id: 'gen2',
          question: 'Where is Dev Aspire located?',
          answer: 'We are based in Islamabad, Pakistan, but serve clients throughout Pakistan (Karachi, Lahore, Rawalpindi, Faisalabad, Multan, and more) and internationally. We work remotely with businesses worldwide using modern collaboration tools.'
        },
        {
          id: 'gen3',
          question: 'Do you work with startups or only established businesses?',
          answer: 'We work with both! We have startup-friendly packages for new businesses and comprehensive solutions for established enterprises. Whether you are launching your first product or scaling an existing business, we can help.'
        },
        {
          id: 'gen4',
          question: 'What industries do you serve?',
          answer: 'We serve all industries including e-commerce, education, healthcare, real estate, finance, food & restaurant, travel & hospitality, and startups/SaaS. Our process adapts to your industry-specific needs and regulations.'
        },
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          id: 'price1',
          question: 'How much do your services cost?',
          answer: 'Pricing varies by service and scope. Basic websites start from PKR 200,000, mobile apps from PKR 500,000, brand strategy from PKR 150,000, and digital marketing from PKR 40,000/month. We provide custom quotes after understanding your requirements.'
        },
        {
          id: 'price2',
          question: 'Do you offer payment plans?',
          answer: 'Yes! For larger projects, we offer milestone-based payments (typically 40% upfront, 30% at mid-point, 30% on completion). We also offer monthly retainer packages for ongoing services like digital marketing and maintenance.'
        },
        {
          id: 'price3',
          question: 'What payment methods do you accept?',
          answer: 'We accept bank transfers (local Pakistani banks), JazzCash, Easypaisa, and international payments via PayPal, Stripe, or Wire Transfer. We invoice in PKR for Pakistani clients and USD for international clients.'
        },
        {
          id: 'price4',
          question: 'Are there any hidden costs?',
          answer: 'No hidden costs! We provide transparent proposals outlining all costs upfront. Third-party costs (domain, hosting, paid tools, ad spend) are clearly separated and you pay those directly or reimburse us.'
        },
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          id: 'proc1',
          question: 'How long does a typical project take?',
          answer: 'Timelines vary: basic websites (3-4 weeks), custom web apps (8-12 weeks), mobile apps (8-12 weeks), brand strategy (4-6 weeks), Shopify stores (2-6 weeks). We provide detailed timelines in our proposals.'
        },
        {
          id: 'proc2',
          question: 'What is your development process?',
          answer: 'We follow an agile process: Discovery & Strategy → Design & Prototyping → Development & Testing → Launch & Support. You receive regular updates, and we involve you at key milestones to ensure alignment with your vision.'
        },
        {
          id: 'proc3',
          question: 'How often will I receive project updates?',
          answer: 'We provide bi-weekly sprint updates for development projects and weekly updates for marketing campaigns. You can also reach us anytime via email, WhatsApp, or Slack for quick questions or urgent matters.'
        },
        {
          id: 'proc4',
          question: 'Can you work with tight deadlines?',
          answer: 'Yes, we can accommodate urgent projects with express timelines at an additional cost. We will assess feasibility and provide honest recommendations about what can be delivered within your timeline without compromising quality.'
        },
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          id: 'tech1',
          question: 'What technologies do you use?',
          answer: 'We use modern, battle-tested technologies: Next.js, React, Node.js, Python for web development; React Native for mobile apps; PostgreSQL, MongoDB for databases; AWS, Vercel for hosting. We choose based on your project needs.'
        },
        {
          id: 'tech2',
          question: 'Will I own the code and design files?',
          answer: 'Yes! Upon final payment, you receive full ownership of all code, design files, assets, and documentation. We also provide ongoing support packages if you need help with maintenance or future updates.'
        },
        {
          id: 'tech3',
          question: 'Do you provide hosting and domain services?',
          answer: 'We can set up hosting and domain for you, but we recommend clients own these directly for better control. We guide you through setup with providers like AWS, Vercel, or Pakistani hosting companies, and handle all technical configuration.'
        },
        {
          id: 'tech4',
          question: 'Do you offer maintenance and support after launch?',
          answer: 'Yes! We offer maintenance packages starting from PKR 25,000/month including bug fixes, security updates, content updates, performance monitoring, and technical support. We also provide training so your team can manage basic updates.'
        },
        {
          id: 'tech5',
          question: 'What if I need changes after the project is complete?',
          answer: 'Minor revisions during the project are included. After launch, we provide 30-90 days of free support (depending on package). Beyond that, changes can be handled through hourly rates or monthly retainer packages.'
        },
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          id: 'start1',
          question: 'How do I get started with Dev Aspire?',
          answer: 'Simple! Contact us via our website form, email (hello@devaspire.com), or phone (0300 6825223). We will schedule a free consultation call to understand your needs, provide recommendations, and send you a detailed proposal.'
        },
        {
          id: 'start2',
          question: 'Do you offer free consultations?',
          answer: 'Yes! We offer a free 30-minute consultation where we discuss your goals, challenges, and how we can help. There is no obligation, and we provide honest advice even if we are not the right fit for your project.'
        },
        {
          id: 'start3',
          question: 'What information do you need to provide a quote?',
          answer: 'To provide an accurate quote, we need: your business goals, target audience, key features/functionalities needed, design preferences, timeline, and budget range. The more details you share, the more accurate our proposal will be.'
        },
        {
          id: 'start4',
          question: 'How quickly can we start once I approve the proposal?',
          answer: 'We can typically start within 1-2 weeks after contract signing and initial payment. This allows time for discovery, access to necessary accounts, and project kickoff. For urgent projects, we can expedite the start.'
        },
      ]
    },
  ];

  return (
    <>
      <Header />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Frequently Asked <em className="font-instrument fw-normal">Questions</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Find answers to common questions about Dev Aspire's web design, development, and digital marketing services in Pakistan. Can't find what you're looking for? Contact us directly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqCategories.map((category, catIdx) => (
          <section key={catIdx} className={`py-10 py-lg-12 py-xl-13 ${catIdx % 2 === 1 ? 'bg-light' : ''}`}>
            <div className="container">
              <div className="d-flex flex-column gap-10 gap-lg-12">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-6">
                    <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      {category.category}
                    </h2>
                  </div>
                </div>
                <div className="accordion accordion-flush d-flex flex-column gap-3" id={`faqCategory${catIdx}`}>
                  {category.questions.map((faq, idx) => (
                    <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                      data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                      <h2 className="accordion-header">
                        <button className={`accordion-button fs-7 fw-medium ${idx !== 0 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                          data-bs-target={`#faq${faq.id}`} aria-expanded={idx === 0} aria-controls={`faq${faq.id}`}>
                          {faq.question}
                        </button>
                      </h2>
                      <div id={`faq${faq.id}`} className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`} data-bs-parent={`#faqCategory${catIdx}`}>
                        <div className="accordion-body pt-0">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Still Have Questions CTA */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Still Have <em className="font-instrument">Questions?</em></h2>
                    <p className="mb-0">Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Get in touch and we&apos;ll respond within 24 hours.</p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <Link href="/contact" className="btn btn-dark">
                        <span className="btn-text">Contact Us</span>
                        <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                      </Link>
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
