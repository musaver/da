import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: "Privacy Policy - Dev Aspire",
  description: "Read Dev Aspire's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
                Privacy <em className="font-instrument fw-normal">Policy</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="d-flex flex-column gap-8">

                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <h2 className="mb-4">Introduction</h2>
                      <p className="mb-0 fs-5">
                        This Privacy Policy explains how <strong>Dev Aspire</strong> (“we”, “our”, or “us”) collects, uses, and protects personal information from our clients, visitors, and users of our services. 
                        Dev Aspire operates in Islamabad, Pakistan and Waterloo, Toronto, offering web design, web development, e-commerce, and SEO services.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        By using our website or any of our services, you agree to this Privacy Policy and consent to the processing of your data in accordance with the terms below.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <h2 className="mb-4">Information We Collect</h2>
                      <ul className="list-unstyled d-flex flex-column gap-4 fs-5">
                        <li className="d-flex gap-3">
                          <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                          <p className="mb-0">Personal details such as your name, email address, phone number, and company name when you request a quote or contact us.</p>
                        </li>
                        <li className="d-flex gap-3">
                          <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                          <p className="mb-0">Project information including requirements, design preferences, and business goals.</p>
                        </li>
                        <li className="d-flex gap-3">
                          <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                          <p className="mb-0">Automatically collected data such as IP address, browser type, and general site analytics to improve user experience.</p>
                        </li>
                      </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <h2 className="mb-4">How We Use Your Information</h2>
                      <p className="mb-0 fs-5">
                        Dev Aspire uses collected data to provide, improve, and maintain our services. This includes:
                      </p>
                      <ul className="list-unstyled d-flex flex-column gap-3 fs-5 mt-3">
                        <li>Creating and delivering tailored web solutions.</li>
                        <li>Managing communication during project development.</li>
                        <li>Improving user experience through analytics and feedback.</li>
                        <li>Ensuring compliance with legal and contractual obligations.</li>
                      </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <h2 className="mb-4">Cookies & Tracking</h2>
                      <p className="mb-0 fs-5">
                        We use cookies and similar tracking technologies to understand user behavior and enhance the functionality of our website. 
                        You can disable cookies in your browser settings, but some features of the site may not function properly.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                      <h2 className="mb-4">Sharing of Information</h2>
                      <p className="mb-0 fs-5">
                        Dev Aspire does not sell, rent, or trade your personal information. 
                        We may share data only with trusted third-party partners who help us provide our services, such as payment gateways or hosting providers, under strict confidentiality agreements.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        We may also disclose information if required by law or to protect our legal rights and the safety of our users.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                      <h2 className="mb-4">Data Security</h2>
                      <p className="mb-0 fs-5">
                        We apply modern security measures to protect your information from unauthorized access or misuse. 
                        While we strive to ensure complete security, no online system is entirely risk-free. 
                        We continuously monitor and improve our security infrastructure.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                      <h2 className="mb-4">Your Rights</h2>
                      <p className="mb-0 fs-5">
                        You have the right to request access, correction, or deletion of your personal information. 
                        You can contact our support team anytime to make such requests, and we’ll respond promptly in accordance with applicable laws.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
                      <h2 className="mb-4">Contact Information</h2>
                      <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
                        <li><strong>Email:</strong> <a href="mailto:contact@devaspire.com" className="fw-medium text-decoration-none">contact@devaspire.com</a></li>
                        <li><strong>Phone (Pakistan):</strong> +92-xxx-xxxxxxx</li>
                        <li><strong>Phone (Canada):</strong> +1-xxx-xxx-xxxx</li>
                        <li><strong>Address:</strong> Islamabad, Pakistan & Waterloo, Toronto</li>
                        <li><strong>Support:</strong> Available 24/7</li>
                      </ul>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                      <p className="mb-0 fs-5 mt-4">
                        © {new Date().getFullYear()} <strong>Dev Aspire</strong>. All rights reserved. 
                        We may update this Privacy Policy periodically — please review this page regularly to stay informed.
                      </p>
                    </div>
                  </div>
                </div>
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
                      <h2 className="mb-0 text-center">
                        Have Questions About Our <em className="font-instrument">Privacy Policy</em>?
                      </h2>
                      <p className="text-dark mb-0 text-center">
                        Our team is here to help. Contact us anytime for more details about how we handle your data and protect your privacy.
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
