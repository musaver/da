import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ContactForm from '@/components/ContactForm';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: 'Contact - Dev Aspire',
  description:
    'Get in touch with Dev Aspire for web design, development, and branding services. Request a free consultation and start building your next project today.',
  openGraph: {
    type: 'website' as const,
    url: `${SITE_URL}/contact`,
    siteName: 'Dev Aspire',
    title: 'Contact - Dev Aspire',
    description:
      'Get in touch with Dev Aspire for web design, development, and branding services. Request a free consultation and start building your next project today.',
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: 'Contact Dev Aspire - Web Design & Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Contact - Dev Aspire',
    description:
      'Get in touch with Dev Aspire for web design, development, and branding services. Request a free consultation and start building your next project today.',
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      
      <div className="page-wrapper overflow-hidden">
        {/* Contact Section */}
        <section className="bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-5">
                  <h1 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Love to hear from you, Get in <em className="font-instrument">touch</em>
                  </h1>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-4">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Got questions? We&apos;ve got <em className="font-instrument">answers</em>
                  </h2>
                </div>
              </div>
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="accordionExample">
                {[
                  {
                    id: 'One',
                    question: 'What services does Dev Aspire offer?',
                    answer:
                      'Dev Aspire provides a full suite of digital services including web design, web development, SEO optimization, and e-commerce solutions. We specialize in creating modern, responsive, and user-friendly websites tailored to your business goals.',
                    expanded: true,
                  },
                  {
                    id: 'Two',
                    question: 'How long does a typical project take?',
                    answer:
                      'Project timelines vary depending on the scope and complexity. On average, a standard website project takes between 2 to 6 weeks, while larger custom applications or e-commerce solutions may require additional time. We always keep clients updated with clear milestones and progress reports.',
                    expanded: false,
                  },
                  {
                    id: 'Three',
                    question: 'How is pricing structured at Dev Aspire?',
                    answer:
                      'Our pricing is transparent and project-based. Each quotation is prepared after evaluating your specific requirements. We offer flexible packages to fit different budgets, ensuring you get the best value for your investment without compromising quality.',
                    expanded: false,
                  },
                  {
                    id: 'Four',
                    question: 'Do you offer ongoing support after project completion?',
                    answer:
                      'Yes, absolutely. Dev Aspire provides ongoing maintenance, updates, and technical support even after project completion. We ensure your website stays secure, optimized, and up-to-date with the latest technology standards.',
                    expanded: false,
                  },
                  {
                    id: 'Five',
                    question: 'How often will I receive updates on my project?',
                    answer:
                      'We believe in transparent communication. You’ll receive regular updates during each phase of the project — from design to deployment — along with direct contact with your assigned project manager for any queries.',
                    expanded: false,
                  },
                  {
                    id: 'Six',
                    question: 'Can Dev Aspire help redesign or upgrade my existing website?',
                    answer:
                      'Yes, we can. Whether you want a visual refresh, better performance, or complete restructuring, Dev Aspire offers redesign and upgrade solutions that bring your existing website up to modern standards.',
                    expanded: false,
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="accordion-item border rounded-1 position-relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100}
                    data-aos-duration="1000"
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${faq.id}`}
                        aria-expanded={faq.expanded}
                        aria-controls={`flush-collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${faq.id}`}
                      className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pt-0">{faq.answer}</div>
                    </div>
                  </div>
                ))}
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
