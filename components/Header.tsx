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
                  <li className="nav-item">
                    <Link className="nav-link py-2 px-3 rounded-pill fw-medium" href="/#about">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll-link py-2 px-3 rounded-pill fw-medium" href="/#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll-link py-2 px-3 rounded-pill fw-medium" href="/#work">Work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll-link py-2 px-3 rounded-pill fw-medium" href="/#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll-link py-2 px-3 rounded-pill fw-medium" href="/#pricing">Pricing</a>
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
                <Link className="nav-link text-dark fw-medium px-2" href="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-2" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-2" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-2" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-2" href="#pricing">Pricing</a>
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

