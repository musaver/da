import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata = {
  title: "About Us - Dev Aspire",
  description: "Learn about Dev Aspire, the leading web design and web development company in Pakistan",
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
                        Dev Aspire is the leading web design and web development company in Pakistan. Our team is dedicated to developing intuitive, bespoke websites. We have a team of professional web designers that have the modern knowledge and technologies to help our customers improve their online business.
                      </p>
                      <p className="mb-0 fs-5 mt-4">
                        At Dev Aspire you will get the web design, ecommerce, SEO and optimization solutions and strategies that have been proven by experts. We are providing the expert services in Islamabad, Pakistan and Waterloo, Toronto.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <h2 className="mb-4">Who We Are</h2>
                      <p className="mb-0 fs-5">
                        Since the establishment of Dev Aspire, we have successfully served hundreds of customers around the globe. The primary skills are related to web development and web design. We have a team of professionals that know how to manage different types of tasks.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <h2 className="mb-4">Our Mission</h2>
                      <p className="mb-0 fs-5">
                        We have a single mission in mind of finding a way that how our customers can benefit from our services. Once we receive the project requirements, we will send the detailers that will be checked and followed up with the mockups design. After the final implementation of the project, our experts will check the project to assure that there is no room for error.
                      </p>
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <h2 className="mb-4">Why Us</h2>
                      <p className="mb-0 fs-5">
                        Dev Aspire is the best Pakistan based web development and web design company. We have a large portfolio that you can check before you hire our services. In order to assure that we will provide our customers with the best web development services, we train our experts on the regular basis. We focus on upgrading our knowledge because that is the only way we can meet the latest requirements of our customers.
                      </p>

                      <div className="mt-6">
                        <ul className="list-unstyled d-flex flex-column gap-4">
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <p className="mb-0 fs-5">All you have to do is let us know that services that you want and our experts will assure to convert all the dreams into reality.</p>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <p className="mb-0 fs-5">The biggest attraction of our services is that we have the best packages that will allow you to select the one that meets your requirements.</p>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <p className="mb-0 fs-5">If you want you can order the customized services.</p>
                          </li>
                          <li className="d-flex gap-3">
                            <iconify-icon icon="lucide:check" className="fs-5 text-primary mt-1"></iconify-icon>
                            <p className="mb-0 fs-5">There are no hidden charges or services involved, which means that you will not have to worry about your budget or other services.</p>
                          </li>
                        </ul>
                      </div>

                      <p className="mb-0 fs-5 mt-6">
                        We are providing all our clients with a complete package so that they will not have visit any other service provider. There are special consultation services available that will allow you to know more about our services.
                      </p>

                      <p className="mb-0 fs-5 mt-4">
                        We have years of experience of working in this field. Dev Aspire has worked for different business organizations and we have the talent of developing a website for any platform, organization or ecommerce store. We have the knowledge related to all types of codes and languages that makes us better than our competitors.
                      </p>

                      <p className="mb-0 fs-5 mt-4">
                        We have the best reviews from our previous customers and this is the reason we enjoy a positive reputation in the market. Dev Aspire gain the trust of our client by providing the best services so you will come back for more. If you want to know about our services you can visit our website.
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
