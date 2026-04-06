import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer pt-md-11 pt-lg-12 pt-xl-13">
      <div className="container">
        <div className="py-11 py-5 py-lg-12 pb-0 pb-lg-12">
          <div className="row">
            <div className="col-12 col-lg-5 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-4 me-xl-5">
                <Link href="/" className="d-block">
                  <Image 
                    src="/assets/images/logos/logo-dark.svg" 
                    alt="Dev Aspire agency footer logo" 
                    className="img-fluid"
                    width={120}
                    height={40}
                  />
                </Link>
                <p className="mb-0">Empowering businesses with innovative solutions. Let&apos;s create something amazing together.</p>
                <div className="hstack gap-3">
                  {/* <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                    <iconify-icon icon="line-md:twitter-x" className="fs-6 hstack position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="X"></iconify-icon>
                  </a>
                  <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <iconify-icon icon="radix-icons:linkedin-logo" className="fs-7 hstack position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Linkedin"></iconify-icon>
                  </a>
                  <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                    <iconify-icon icon="tabler:brand-dribbble" className="fs-7 hstack position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dribbble"></iconify-icon>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <iconify-icon icon="tabler:brand-instagram" className="fs-7 hstack position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Instagram"></iconify-icon>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Sitemap</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/contact">Contact us</Link></li>
                  <li><Link className="link-hover text-body" href="/about-us">About us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Other Pages</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/terms-and-conditions">Terms & Conditions</Link></li>
                  <li><Link className="link-hover text-body" href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Contact Details</h6>
                <p className="mb-0">G9 Markaz, Islamabad, Pakistan</p>
                <a href="mailto:hello@devaspire.agency">hello@devaspire.com</a>
                <a href="tel:03006825223">0300 6825223</a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-top">
          <p className="mb-0 text-center">©2025 Dev Aspire. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

