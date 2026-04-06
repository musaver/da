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
            <div className="col-6 col-md-3 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Services</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/services/brand-strategy">Brand Strategy</Link></li>
                  <li><Link className="link-hover text-body" href="/services/digital-marketing">Digital Marketing</Link></li>
                  <li><Link className="link-hover text-body" href="/services/ui-ux-design">UI/UX Design</Link></li>
                  <li><Link className="link-hover text-body" href="/services/shopify-development">Shopify Development</Link></li>
                  <li><Link className="link-hover text-body" href="/services/web-app-development">Web Development</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Industries</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/industries/ecommerce">E-Commerce</Link></li>
                  <li><Link className="link-hover text-body" href="/industries/education">Education</Link></li>
                  <li><Link className="link-hover text-body" href="/industries/healthcare">Healthcare</Link></li>
                  <li><Link className="link-hover text-body" href="/industries/real-estate">Real Estate</Link></li>
                  <li><Link className="link-hover text-body" href="/industries">All Industries</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Resources</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/portfolio">Portfolio</Link></li>
                  <li><Link className="link-hover text-body" href="/blog">Blog</Link></li>
                  <li><Link className="link-hover text-body" href="/faq">FAQ</Link></li>
                  <li><Link className="link-hover text-body" href="/how-it-works">How It Works</Link></li>
                  <li><Link className="link-hover text-body" href="/resources">All Resources</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Locations</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/location/karachi">Karachi</Link></li>
                  <li><Link className="link-hover text-body" href="/location/lahore">Lahore</Link></li>
                  <li><Link className="link-hover text-body" href="/location/islamabad">Islamabad</Link></li>
                  <li><Link className="link-hover text-body" href="/location/rawalpindi">Rawalpindi</Link></li>
                  <li><Link className="link-hover text-body" href="/locations">All Cities</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-11 mb-lg-0">
              <div className="d-flex flex-column gap-3">
                <h6 className="mb-0">Company</h6>
                <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                  <li><Link className="link-hover text-body" href="/about-us">About Us</Link></li>
                  <li><Link className="link-hover text-body" href="/contact">Contact Us</Link></li>
                  <li><a className="link-hover text-body" href="tel:03006825223">+92 300 6825223</a></li>
                  <li><a className="link-hover text-body" href="mailto:hello@devaspire.com">hello@devaspire.com</a></li>
                </ul>
                <div className="d-flex flex-column gap-2 mt-3">
                  <h6 className="mb-0 fs-4">Legal</h6>
                  <ul className="footer-menu list-unstyled mb-0 d-flex flex-column gap-7">
                    <li><Link className="link-hover text-body" href="/terms-and-conditions">Terms & Conditions</Link></li>
                    <li><Link className="link-hover text-body" href="/privacy-policy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 border-top">
          <p className="mb-0 text-center">©{new Date().getFullYear()} Dev Aspire. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

