import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <div className="page-wrapper bg-gradient-shaph">
        {/* 404 Section */}
        <section className="position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <Image 
                src="/assets/images/backgrounds/404.png" 
                alt="404" 
                width={670} 
                height={400}
                className="img-fluid mx-auto"
                data-aos="zoom-in" 
                data-aos-delay="100" 
                data-aos-duration="1000" 
              />
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    Oops! The page you are looking for <em className="font-instrument">doesn&apos;t exist</em>
                  </h2>
                </div>
              </div>
              <Link 
                href="/" 
                className="btn btn-dark mx-auto" 
                data-aos="fade-up" 
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <span className="btn-text">Back to home</span>
                <iconify-icon icon="solar:arrow-right-up-linear"
                  className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

