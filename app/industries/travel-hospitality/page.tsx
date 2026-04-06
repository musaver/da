import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Travel & Hospitality Website Design Pakistan | Dev Aspire",
  description:
    "Professional website design for hotels, travel agencies, tour operators, and hospitality businesses in Pakistan. Booking systems, property management, and travel platforms.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/travel-hospitality`,
    siteName: "Dev Aspire",
    title: "Travel & Hospitality Website Design Pakistan",
    description:
      "Custom websites for hotels, travel agencies, and tourism businesses with booking engines and property management systems.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Travel Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Travel & Hospitality Website Design Pakistan",
    description:
      "Custom websites for hotels, travel agencies, and tourism businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/travel-hospitality`,
  },
};

const schema = serviceSchema(
  'Travel & Hospitality Website Development',
  'Professional website design for hotels, travel agencies, and hospitality businesses in Pakistan with booking and management systems.'
);
const breadcrumb = breadcrumbSchema('Travel & Hospitality', '/industries/travel-hospitality');

export default function TravelHospitalityIndustry() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Travel & Hospitality</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Travel & Hospitality <em className="font-instrument fw-normal">Websites</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Boost bookings and enhance guest experience with professional travel and hospitality websites.
                    From hotels to tour operators, we build platforms that inspire travel and simplify reservations.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Travel & Hospitality <em className="font-instrument">Solutions</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Hotel Websites', desc: 'Beautiful hotel websites with room booking, photo galleries, and amenity showcases.', icon: 'solar:home-smile-linear' },
                  { title: 'Travel Agency Sites', desc: 'Tour packages, booking systems, and destination guides for travel agencies.', icon: 'solar:suitcase-linear' },
                  { title: 'Tour Operator Platforms', desc: 'Complete booking systems for tour operators with itineraries and payment processing.', icon: 'solar:map-linear' },
                  { title: 'Booking Marketplaces', desc: 'Aggregator platforms connecting travelers with hotels, flights, and tour packages.', icon: 'solar:calendar-search-linear' },
                  { title: 'Event Venues', desc: 'Websites for wedding halls, conference centers, and event venues with availability calendars.', icon: 'solar:confetti-linear' },
                  { title: 'Restaurant Chains', desc: 'Multi-location restaurant websites with online ordering across branches.', icon: 'solar:chef-hat-linear' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.title}</h4>
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Essential <em className="font-instrument">Features</em>
              </h2>
              <div className="row g-4">
                {[
                  'Online Booking Engine',
                  'Availability Calendar',
                  'Payment Gateway Integration',
                  'Room/Package Management',
                  'Photo & Video Galleries',
                  'Customer Reviews & Ratings',
                  'Multi-Currency Support',
                  'Location Maps',
                  'Booking Confirmation Emails',
                  'Cancellation Management',
                  'Special Offers & Packages',
                  'Multi-Language Support',
                ].map((feature, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                    <div className="d-flex align-items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" className="fs-5 text-primary"></iconify-icon>
                      <span className="fs-4">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0 text-white">
                    Ready to Boost <em className="font-instrument">Your Bookings?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss how a professional travel or hospitality website can help
                    you attract more guests and streamline your booking process.
                  </p>
                  <Link href="/contact" className="btn btn-white mx-auto">
                    <span className="btn-text">Get Free Consultation</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                  </Link>
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
