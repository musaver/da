import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SignupForm from './SignupForm';

const SITE_URL = 'https://devaspire.co';

export const metadata = {
  title: "Get Started - Dev Aspire",
  description:
    "Sign up and get started with Dev Aspire today. Begin your journey to a custom-built website with our expert web design and development team.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/empty-page`,
    siteName: "Dev Aspire",
    title: "Get Started - Dev Aspire",
    description:
      "Sign up and get started with Dev Aspire today. Begin your journey to a custom-built website with our expert web design and development team.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Get Started with Dev Aspire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Get Started - Dev Aspire",
    description:
      "Sign up and get started with Dev Aspire today. Begin your journey to a custom-built website with our expert web design and development team.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/empty-page`,
  },
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
                <SignupForm />
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
