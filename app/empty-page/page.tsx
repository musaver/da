import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SignupWidget from './SignupWidget';

export const metadata = {
  title: "Get Started - Dev Aspire",
  description: "Sign up and get started with Dev Aspire today.",
};

export default function EmptyPage() {
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
                Get <em className="font-instrument fw-normal">Started</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Widget Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <SignupWidget />
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
