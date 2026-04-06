'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="header position-fixed start-0 top-0 w-100">
        <div className="container">
          <nav className="navbar navbar-expand-xl rounded-pill p-7">
            <div className="d-flex align-items-center justify-content-between w-100">
              <Link href="/" className="logo">
                <Image 
                  src="/assets/images/logos/logo-dark.svg" 
                  className="img-fluid" 
                  alt="Dev Aspire - Web Design & Development Agency" 
                  width={160}
                  height={40}
                  priority
                />
              </Link>
              <button 
                className="navbar-toggler border-0 p-0 shadow-none" 
                type="button" 
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasHeader" 
                aria-controls="offcanvasHeader"
              >
                <iconify-icon icon="solar:hamburger-menu-linear" className="fs-8 text-dark"></iconify-icon>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto gap-2 p-1 bg-light rounded-pill">
                  <li className="nav-item dropdown">
                    <a className="nav-link py-2 px-3 rounded-pill fw-medium dropdown-toggle" href="/#services" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/services/brand-strategy">Brand Strategy</Link></li>
                      <li><Link className="dropdown-item" href="/services/digital-marketing">Digital Marketing</Link></li>
                      <li><Link className="dropdown-item" href="/services/ui-ux-design">UI/UX Design</Link></li>
                      <li><Link className="dropdown-item" href="/services/shopify-development">Shopify Development</Link></li>
                      <li><Link className="dropdown-item" href="/services/web-app-development">Web & App Development</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link py-2 px-3 rounded-pill fw-medium dropdown-toggle" href="/industries" role="button" data-bs-toggle="dropdown" aria-expanded="false">Industries</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/industries">All Industries</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" href="/industries/ecommerce">E-Commerce</Link></li>
                      <li><Link className="dropdown-item" href="/industries/education">Education</Link></li>
                      <li><Link className="dropdown-item" href="/industries/healthcare">Healthcare</Link></li>
                      <li><Link className="dropdown-item" href="/industries/real-estate">Real Estate</Link></li>
                      <li><Link className="dropdown-item" href="/industries/finance">Finance & FinTech</Link></li>
                      <li><Link className="dropdown-item" href="/industries/food-restaurant">Food & Restaurant</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link py-2 px-3 rounded-pill fw-medium" href="/portfolio">Portfolio</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link py-2 px-3 rounded-pill fw-medium dropdown-toggle" href="/resources" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" href="/blog">Blog</Link></li>
                      <li><Link className="dropdown-item" href="/faq">FAQ</Link></li>
                      <li><Link className="dropdown-item" href="/how-it-works">How It Works</Link></li>
                      <li><Link className="dropdown-item" href="/resources">All Resources</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link py-2 px-3 rounded-pill fw-medium" href="/about-us">About</Link>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <Link href="/contact" className="btn btn-dark px-4 py-2">Contact</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasHeader" aria-labelledby="offcanvasHeaderLabel">
        <div className="offcanvas-header">
          <Link href="/" className="logo">
            <Image 
              src="/assets/images/logos/logo-dark.svg" 
              className="img-fluid" 
              alt="Dev Aspire - Web Design & Development Agency" 
              width={160}
              height={40}
            />
          </Link>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-column gap-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-2" href="/#services">Services</a>
                <ul className="list-unstyled ps-3">
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/services/brand-strategy">Brand Strategy</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/services/digital-marketing">Digital Marketing</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/services/ui-ux-design">UI/UX Design</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/services/shopify-development">Shopify Development</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/services/web-app-development">Web & App Development</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/industries">Industries</Link>
                <ul className="list-unstyled ps-3">
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/industries/ecommerce">E-Commerce</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/industries/education">Education</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/industries/healthcare">Healthcare</Link></li>
                  <li><Link className="nav-link text-dark fw-normal px-2 py-1 fs-3" href="/industries/real-estate">Real Estate</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/locations">Locations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-medium px-2" href="/faq">FAQ</Link>
              </li>
            </ul>
            <div className="d-flex flex-column">
              <Link href="/contact" className="btn btn-dark px-4 py-2 w-100 justify-content-center">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

