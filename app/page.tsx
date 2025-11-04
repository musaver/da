import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Building bold brands with <em className="font-instrument fw-normal">thoughtful design</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-6">
                  <p className="text-center mb-0">At Dev Aspire, we help small startups tackle the world&apos;s biggest challenges with
                    tailored solutions, guiding you from strategy to success in a competitive market.</p>
                </div>
              </div>
              <div className="d-md-flex align-items-center justify-content-center gap-10" data-aos="fade-up"
                data-aos-delay="300" data-aos-duration="1000">
                <a href="/contact" className="btn btn-primary py-md-8 pe-md-14 mx-auto mx-md-0 d-block d-md-flex">
                  <span className="btn-text">Get Started</span>
                  <iconify-icon icon="solar:arrow-right-up-linear"
                    className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </a>
                <div className="d-flex align-items-center justify-content-center mt-4 mt-md-0 gap-3 gap-md-4">
                  <ul className="d-flex align-items-center mb-0">
                    <li>
                      <a href="javascript:void(0)">
                        <Image src="/assets/images/profile/user-1.jpg" width={44} height={44}
                          className="rounded-circle border border-2 border-white" alt="user-1" />
                      </a>
                    </li>
                    <li className="ms-n2">
                      <a href="javascript:void(0)">
                        <Image src="/assets/images/profile/user-2.jpg" width={44} height={44}
                          className="rounded-circle border border-2 border-white" alt="user-2" />
                      </a>
                    </li>
                    <li className="ms-n2">
                      <a href="javascript:void(0)">
                        <Image src="/assets/images/profile/user-3.jpg" width={44} height={44}
                          className="rounded-circle border border-2 border-white" alt="user-3" />
                      </a>
                    </li>
                    <li className="ms-n2">
                      <a href="javascript:void(0)">
                        <Image src="/assets/images/profile/user-4.jpg" width={44} height={44}
                          className="rounded-circle border border-2 border-white" alt="user-4" />
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex flex-column gap-1">
                    <ul className="list-unstyled mb-0 hstack gap-1">
                      <li><a className="hstack" href="javascript:void(0)"><iconify-icon icon="solar:star-bold"
                            className="fs-6 text-warning"></iconify-icon></a></li>
                      <li><a className="hstack" href="javascript:void(0)"><iconify-icon icon="solar:star-bold"
                            className="fs-6 text-warning"></iconify-icon></a></li>
                      <li><a className="hstack" href="javascript:void(0)"><iconify-icon icon="solar:star-bold"
                            className="fs-6 text-warning"></iconify-icon></a></li>
                      <li><a className="hstack" href="javascript:void(0)"><iconify-icon icon="solar:star-bold"
                            className="fs-6 text-warning"></iconify-icon></a></li>
                      <li><a className="hstack" href="javascript:void(0)"><iconify-icon icon="solar:star-line-duotone"
                            className="fs-6 text-warning"></iconify-icon></a></li>
                    </ul>
                    <p className="mb-0 fs-3">Trusted by 1000+ clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Ipsum Section */}
        <section className="logo-ipsum py-10 py-lg-12 py-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-9">
              <div className="row position-relative hstack justify-content-center">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <hr className="border-2 w-20 d-block" />
                    <p className="mb-0 text-center flex-sm-shrink-0">Loved by 1000+ big and small brands around the worlds</p>
                    <hr className="border-2 w-20 d-block" />
                  </div>
                </div>
              </div>

              <div className="marquee w-100 d-flex align-items-center overflow-hidden">
                <div className="marquee-content d-flex align-items-center justify-content-between gap-13">
                  {[
                    { src: '/assets/images/client-logos/logo-1.png', alt: 'Client Logo 1', text: '' },
                    { src: '/assets/images/client-logos/logo-3.webp', alt: 'Client Logo 3', text: '' },
                    { src: '/assets/images/client-logos/logo-4.webp', alt: 'School of Islam', text: '' },
                    { src: '/assets/images/client-logos/logo-5.png', alt: 'Lets Enjoy', text: '' },
                    { src: '/assets/images/client-logos/logo-6.png', alt: 'Client Logo 6', text: '' },
                    { src: '/assets/images/client-logos/logo-1.png', alt: 'Client Logo 1', text: '' },
                    { src: '/assets/images/client-logos/logo-3.webp', alt: 'Client Logo 3', text: '' },
                    { src: '/assets/images/client-logos/logo-4.webp', alt: 'School of Islam', text: '' },
                    { src: '/assets/images/client-logos/logo-5.png', alt: 'Lets Enjoy', text: '' },
                    { src: '/assets/images/client-logos/logo-6.png', alt: 'Client Logo 6', text: '' }
                  ].map((logo, idx) => (
                    <div key={idx} className="marquee-tag hstack align-items-center justify-content-center gap-3">
                      <Image src={logo.src} alt={logo.alt} className="logo-img" width={120} height={60} style={{ objectFit: 'contain' }} />
                      {logo.text && <span className="fw-medium fs-6 text-dark">{logo.text}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Count Section */}
        <section className="py-10 py-lg-12 py-xl-13" id="aboutus">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="d-flex flex-column gap-3">
                <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Crafting
                  exceptional, well experienced & technology driven strategies to drive
                  impactful results with</h2>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-3" data-aos="fade-up"
                  data-aos-delay="200" data-aos-duration="1000">
                  <div className="rounded-pill py-1 px-8 hstack gap-7 bg-secondary-subtle">
                    <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-secondary"></iconify-icon>
                    <h2 className="mb-0 text-secondary font-instrument"><em>Creativity</em></h2>
                  </div>
                  <div className="rounded-pill py-1 px-8 hstack gap-7 bg-info-subtle">
                    <iconify-icon icon="solar:lightbulb-bolt-linear" className="fs-9 text-info"></iconify-icon>
                    <h2 className="mb-0 text-info font-instrument"><em>Innovation</em></h2>
                  </div>
                  <div className="rounded-pill py-1 px-8 hstack gap-7 bg-light-orange">
                    <iconify-icon icon="solar:command-linear" className="fs-9 text-orange"></iconify-icon>
                    <h2 className="mb-0 text-orange font-instrument"><em>Strategy</em></h2>
                  </div>
                </div>
              </div>
              <div className="row gap-11 gap-lg-0 border-md-none">
                <div className="col-md-4 border-end" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div className="d-flex flex-column gap-2 text-center">
                    <h2 className="mb-0 fs-13 d-flex align-items-start justify-content-center"><span
                        className="fs-12 lh-1">+</span><span className="count" data-target="40">40</span></h2>
                    <p className="mb-0">Total Projects Completed</p>
                  </div>
                </div>
                <div className="col-md-4 border-end" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="d-flex flex-column gap-2 text-center">
                    <h2 className="mb-0 fs-13 d-flex align-items-start justify-content-center"><span
                        className="fs-12 lh-1">+</span><span className="count" data-target="10">10</span></h2>
                    <p className="mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <div className="d-flex flex-column gap-2 text-center">
                    <h2 className="mb-0 fs-13 d-flex align-items-start justify-content-center"><span
                        className="fs-12 lh-1">+</span><span className="count" data-target="12">12</span></h2>
                    <p className="mb-0">Design Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Meets Section */}
        <section className="innovation-meets py-10 py-lg-12 py-xl-13" id="services">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-4">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Where
                    innovation meets <em className="font-instrument">aesthetics</em></h2>
                </div>
              </div>
              <div className="d-flex flex-column gap-4">
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg">
                    <div className="card bg-secondary-subtle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:palette-round-linear" className="fs-9 text-secondary"></iconify-icon>
                        <h4 className="text-secondary mb-0">Brand<br /> Strategy</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg">
                    <div className="card bg-info-subtle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:gallery-wide-linear" className="fs-9 text-info"></iconify-icon>
                        <h4 className="text-info mb-0">Digital<br />Marketing</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg">
                    <div className="card bg-light-orange" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-orange"></iconify-icon>
                        <h4 className="text-orange mb-0">UI/UX<br />Design</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg">
                    <div className="card bg-success-subtle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:chart-linear" className="fs-9 text-success"></iconify-icon>
                        <h4 className="text-success mb-0">Shopify Custom<br />App Development</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <h4 className="text-danger mb-0">Web & App<br />Development</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-dark mb-0">
                  <div className="card-body px-lg-5">
                    <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
                      <div className="col-lg-4">
                        <h3 className="mb-0 text-white text-center text-lg-start">See Our Work in Action.
                          Start Your Creative Journey with Us!</h3>
                      </div>
                      <div className="col-lg-8">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-7">
                          <a href="#" className="btn btn-white">
                            <span className="btn-text">Let&apos;s Collaborate</span>
                            <iconify-icon icon="solar:arrow-right-up-linear"
                              className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </a>
                          <a href="#" className="btn btn-outline-light">
                            <span className="btn-text">View Portfolio</span>
                            <iconify-icon icon="solar:arrow-right-up-linear"
                              className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section className="py-10 py-lg-12 py-xl-13" id="work">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">How we
                    transformed a small business&apos;s <em className="font-instrument">online presence</em></h2>
                </div>
              </div>
              <div className="row">
                {[
                  { img: 1, title: 'DealGuru', url: 'https://dealguru.se/', tags: ['UX Research', 'Interface Design'] },
                  { img: 2, title: 'Hisaab360', url: 'https://hisaab360.com/', tags: ['Product Design', 'Interaction Design'] },
                  { img: 3, title: 'Schoolofislam', url: 'https://schoolofislam.net/', tags: ['Brand identity design', 'UX Research'] },
                  { img: 4, title: 'Gaga Nest', url: 'https://gaganest.com/', tags: ['Visual Storytelling', 'Web & Mobile Design'] }
                ].map((work, idx) => (
                  <div key={idx} className="col-md-6 mb-10">
                    <div className="work d-flex flex-column gap-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}
                      data-aos-duration="1000">
                      <div className="work-img position-relative overflow-hidden rounded-1">
                        <Image src={`/assets/images/work/work-img-${work.img}.jpg`} alt="work" className="img-fluid" width={600} height={400} />
                        <div className="work-overlay">
                          <a href={work.url} target="_blank" rel="noopener noreferrer"
                            className="work-icon position-absolute top-0 end-0 bg-white m-8 round-50 rounded-circle hstack justify-content-center">
                            <iconify-icon icon="solar:arrow-right-up-linear" className="fs-8"></iconify-icon>
                          </a>
                        </div>
                      </div>
                      <div className="work-details d-flex flex-column gap-3">
                        <a href={work.url} target="_blank" rel="noopener noreferrer">
                          <h4 className="mb-0 work-title">{work.title}</h4>
                        </a>
                        <div className="hstack gap-7">
                          {work.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="badge text-dark border">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-10 py-lg-12 py-xl-13" id="team">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Meet the
                    creative minds behind <em className="font-instrument">our success</em>
                  </h2>
                </div>
              </div>
              <div className="row">
                {[
                  { img: 1, name: 'Musaver', role: 'CEO' },
                  { img: 2, name: 'Noor Fatima', role: 'UI/UX Designer' },
                  { img: 3, name: 'Rehan', role: 'App Developer' },
                  { img: 4, name: 'Amrina', role: 'Web Developer' }
                ].map((member, idx) => (
                  <div key={idx} className="col-sm-6 col-lg-3 mb-11 mb-lg-0">
                    <div className="team d-flex flex-column align-items-center gap-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}
                      data-aos-duration="1000">
                      <div className="team-img">
                        <Image src={`/assets/images/team/team-img-${member.img}.png`} alt="team" className="img-fluid" width={300} height={300} />
                      </div>
                      <div className="team-details text-center d-flex flex-column gap-3">
                        <div className="d-flex flex-column gap-1">
                          <h6 className="mb-0">{member.name}</h6>
                          <p className="mb-0">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customers Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">What our
                    satisfied customers are saying <em className="font-instrument">about us</em>
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="card position-relative customer-bg-img w-100"
                    style={{backgroundImage: 'url(/assets/images/customer/customer-bg.jpg)'}} data-aos="fade-up"
                    data-aos-delay="100" data-aos-duration="1000">
                    <div className="card-body d-flex flex-column justify-content-between gap-15 gap-lg-19">
                      <p className="mb-0 text-uppercase fw-medium fs-3 text-muted">Customer stories</p>
                      <div className="d-flex flex-column gap-4">
                        <h3 className="mb-0 text-white">&quot;Dev Aspire&apos;s expertise transformed my vision into success!&quot;</h3>
                        <div className="d-flex flex-column gap-1">
                          <h3 className="mb-0 text-white">JH Larik</h3>
                          <p className="mb-0 fw-medium fs-3 text-muted">CEO of Hisaab360</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card bg-warning w-100" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="card-body d-flex flex-column justify-content-between gap-14 gap-lg-18">
                      <p className="mb-0 text-uppercase fw-medium fs-3 text-muted">Facts & numbers</p>
                      <div className="d-flex flex-column gap-1">
                        <h2 className="mb-0 fs-11">91%</h2>
                        <h3 className="mb-0">Clients recommend our design services.&quot;</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card bg-dark w-100" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                    <div className="card-body d-flex flex-column gap-4">
                      <div className="d-flex flex-column gap-4">
                        <p className="mb-0 text-uppercase fw-medium fs-3 text-muted">Customer stories</p>
                        <h3 className="mb-0 text-white">Their creativity and attention to detail transformed our brand
                          completely!</h3>
                      </div>
                      <div className="position-relative overflow-hidden rounded">
                        <Image src="/assets/images/customer/customer-stories.jpg" alt="customer-stories"
                          className="img-fluid w-100" width={400} height={300} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="card bg-light position-relative w-100" data-aos="fade-up" data-aos-delay="400"
                    data-aos-duration="1000">
                    <div className="card-body d-flex flex-column justify-content-between gap-14 gap-lg-15">
                      <div className="d-flex flex-column gap-4">
                        <p className="mb-0 text-uppercase fw-medium fs-3 text-muted">Customer stories</p>
                        <h2 className="mb-0 fs-9">&quot;Dev Aspire Design Agency brought our ideas to life with exceptional creativity and
                          precision, exceeding expectations.&quot;</h2>
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <h6 className="mb-0">AR Khan</h6>
                        <p className="mb-0 fw-medium fs-3 text-muted">CEO of SOI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-10 py-lg-12 py-xl-13" id="pricing">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-5">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Pick the
                    plan that fits your <em className="font-instrument">start-up</em>
                  </h2>
                </div>
              </div>
              <div className="row border-md-none">
                <div className="col-xl-6">
                  <div className="card bg-warning" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    <div className="card-body">
                      <div className="row gap-11 gap-md-0">
                        <div className="col-md-6 border-end border-dark border-opacity-10">
                          <div className="d-flex flex-column gap-5">
                            <div className="d-flex flex-column gap-7">
                              <span className="badge text-bg-dark fs-4 w-fit">Starter</span>
                              <p className="mb-0 text-muted">For companies who need design support. One request at a time</p>
                            </div>
                            <div className="d-flex flex-column gap-7">
                              <h2 className="mb-0">$2500</h2>
                              <a href="#" className="btn btn-white">
                                <span className="btn-text">Let&apos;s Collaborate</span>
                                <iconify-icon icon="solar:arrow-right-up-linear"
                                  className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex flex-column gap-3 ps-lg-7">
                            <h6 className="mb-0">Features</h6>
                            <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                              {['Design Updates Every 2 Days', 'Mid-level Designer', 'SEO optimization', 'Monthly analytics', '2x Calls Per Month', 'License free assets'].map((feature, idx) => (
                                <li key={idx} className="hstack gap-7">
                                  <iconify-icon icon="lucide:check" className="fs-6 text-dark"></iconify-icon>
                                  <p className="mb-0 text-dark">{feature}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="card bg-primary" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="card-body">
                      <div className="row gap-11 gap-md-0">
                        <div className="col-md-6 border-end border-white border-opacity-10">
                          <div className="d-flex flex-column gap-5">
                            <div className="d-flex flex-column gap-7">
                              <span className="badge text-bg-dark fs-4 w-fit">Pro</span>
                              <p className="mb-0 text-white">2x the speed. Great for an MVP, Web App or complex problem</p>
                            </div>
                            <div className="d-flex flex-column gap-7">
                              <h2 className="mb-0 text-white">$5000+</h2>
                              <a href="#" className="btn btn-white">
                                <span className="btn-text">Let&apos;s Collaborate</span>
                                <iconify-icon icon="solar:arrow-right-up-linear"
                                  className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex flex-column gap-3 ps-lg-7">
                            <h6 className="mb-0 text-white">Features</h6>
                            <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                              {['Design Updates Daily', 'Senior-level Designer', 'AI Advisory Framework', 'Full-service Creative Team', '4x Calls Per Month', 'License free assets'].map((feature, idx) => (
                                <li key={idx} className="hstack gap-7">
                                  <iconify-icon icon="lucide:check" className="fs-6 text-white"></iconify-icon>
                                  <p className="mb-0 text-white">{feature}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-4">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Got
                    questions? We&apos;ve got <em className="font-instrument">answers</em>
                  </h2>
                </div>
              </div>
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="accordionExample">
                {[
                  { id: 'One', question: 'What services does Dev Aspire Agency offer?', answer: 'Dev Aspire provides a complete range of digital solutions including web design, web development, e-commerce website creation, and SEO optimization.', expanded: true },
                  { id: 'Two', question: 'How long does a typical project take?', answer: 'Project timelines depend on the scope and complexity of your website or service requirements. A standard website usually takes 2-4 weeks, while larger projects such as e-commerce stores or SEO campaigns may take longer.', expanded: false },
                  { id: 'Three', question: 'How is pricing structured at Dev Aspire Agency?', answer: 'Dev Aspire offers flexible and transparent pricing packages tailored to your business needs. There are no hidden charges - you can choose from ready-made plans or request a customized quote depending on your project size, design complexity, and features required.', expanded: false },
                  { id: 'Four', question: 'Do you offer ongoing support after project completion?', answer: 'Yes, absolutely. Dev Aspire believes in long-term partnerships. We provide post-launch support, including website maintenance, SEO updates, and technical assistance to ensure your site runs smoothly even after delivery.', expanded: false },
                  { id: 'Five', question: 'How often will I receive updates on my project?', answer: "You'll receive regular progress updates throughout every phase of your project. Our team communicates closely via email or chat and shares milestones at each development stage - from design mockups to final testing - so you're always informed.", expanded: false },
                  { id: 'Six', question: 'What makes Dev Aspire different from other agencies?', answer: 'Dev Aspire stands out because of its dedicated team, personalized approach, and focus on quality. With years of experience and global clients, we ensure every project is built using modern tools, we help your business grow online.', expanded: false }
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`flush-collapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`flush-collapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#accordionExample">
                      <div className="accordion-body pt-0">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
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
                      <h2 className="mb-0 text-center">Innovative Solutions for <em className="font-instrument">Bold Brands</em>
                      </h2>
                      <p className="text-dark mb-0 text-center">Looking to elevate your brand? We craft immersive experiences
                        that captivate, engage, and make your business unforgettable in every interaction.</p>
                    </div>
                    <a href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Let&apos;s Collaborate</span>
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
