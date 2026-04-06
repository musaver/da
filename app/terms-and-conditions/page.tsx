import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Terms & Conditions - Dev Aspire",
  description:
    "Read the official Terms and Conditions of Dev Aspire covering all our web design, web development, and digital branding services agreements and policies.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/terms-and-conditions`,
    siteName: "Dev Aspire",
    title: "Terms & Conditions - Dev Aspire",
    description:
      "Read the official Terms and Conditions of Dev Aspire covering all our web design, web development, and digital branding services agreements and policies.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Terms & Conditions - Dev Aspire",
    description:
      "Read the official Terms and Conditions of Dev Aspire covering all our web design, web development, and digital branding services agreements and policies.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <Header />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1
                className="text-center mb-0"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Terms & <em className="font-instrument fw-normal">Conditions</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-8">

                  <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <h2 className="mb-4">Welcome to Dev Aspire</h2>
                    <p className="fs-5 mb-0">
                      Welcome to Dev Aspire. By accessing or using our website and services, you agree to comply with our Terms and Conditions. 
                      These terms are designed to protect both our clients and our team, ensuring a transparent and professional working relationship.
                      We encourage you to read this document carefully before using our services or entering into any agreement with us.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h2 className="mb-4">Our Services</h2>
                    <p className="fs-5 mb-0">
                      Dev Aspire offers professional web design, web development, SEO optimization, and e-commerce solutions. 
                      Every project begins with a clear scope of work approved by the client. Once development begins, any major modifications or additional requests 
                      outside the initial agreement may require a revised quotation and timeline. We strive to deliver all projects on schedule while maintaining 
                      the highest standards of quality and performance.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <h2 className="mb-4">Payments and Refunds</h2>
                    <p className="fs-5 mb-0">
                      Payments are required according to the terms outlined in your project proposal or invoice. 
                      A partial payment may be required to initiate a project, with the remaining balance due upon completion. 
                      Since our work involves time, design, and development effort, payments are non-refundable once the project has commenced. 
                      However, if Dev Aspire fails to deliver the project as agreed, we will work with you to find an appropriate resolution.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                    <h2 className="mb-4">Ownership and Usage Rights</h2>
                    <p className="fs-5 mb-0">
                      Upon full payment, all final deliverables such as website designs, source code, and content become the property of the client. 
                      Dev Aspire retains the right to display completed projects in our portfolio or marketing materials to showcase our work. 
                      Clients may not resell or redistribute Dev Aspire’s design assets or frameworks without written consent.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                    <h2 className="mb-4">Revisions and Project Timeline</h2>
                    <p className="fs-5 mb-0">
                      Each project includes a fixed number of revisions as stated in the proposal. 
                      Additional changes beyond this scope may require extra fees and extended timelines. 
                      We aim to keep all clients informed throughout the process, providing updates at every major milestone to ensure satisfaction and transparency.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                    <h2 className="mb-4">Limitation of Liability</h2>
                    <p className="fs-5 mb-0">
                      While Dev Aspire strives to deliver secure, high-performing digital products, we are not responsible for any 
                      indirect or consequential damages that may arise from the use or misuse of our services. 
                      Our total liability for any claim related to a project will not exceed the total amount paid by the client for that specific service.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                    <h2 className="mb-4">Contact Us</h2>
                    <p className="fs-5 mb-0">
                      If you have any questions about these Terms and Conditions or wish to discuss your project further, please contact our support team at 
                      <a href="mailto:contact@devaspire.com" className="fw-medium text-decoration-none"> contact@devaspire.com</a>. 
                      You can also reach us at our offices in Islamabad, Pakistan and Waterloo, Toronto. 
                      We are always happy to assist you with clarity and transparency.
                    </p>
                  </div>

                  <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                    <p className="fs-5 mb-0 mt-4 text-muted">
                      © {new Date().getFullYear()} <strong>Dev Aspire</strong>. All Rights Reserved.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-8">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column gap-7">
                      <h2 className="mb-0 text-center">
                        Have Questions About Our <em className="font-instrument">Terms?</em>
                      </h2>
                      <p className="text-dark mb-0 text-center">
                        We’re always available to guide you through our process and policies. 
                        Let’s work together to create something outstanding for your brand.
                      </p>
                    </div>
                    <a href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Contact Us</span>
                      <iconify-icon
                        icon="solar:arrow-right-up-linear"
                        className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"
                      ></iconify-icon>
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
