import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Restaurant & Food Business Website Design Pakistan | Dev Aspire",
  description:
    "Professional website design for restaurants, cafes, food delivery, and catering businesses in Pakistan. Online ordering, menu management, and reservation systems.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/food-restaurant`,
    siteName: "Dev Aspire",
    title: "Restaurant & Food Business Website Design Pakistan",
    description:
      "Custom restaurant websites with online ordering, table reservations, and menu management for Pakistani food businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Restaurant Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Restaurant & Food Business Website Design Pakistan",
    description:
      "Custom restaurant websites with online ordering and reservation systems.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/food-restaurant`,
  },
};

const schema = serviceSchema(
  'Restaurant Website Development',
  'Professional website design for restaurants, cafes, and food businesses in Pakistan with online ordering and reservation systems.'
);
const breadcrumb = breadcrumbSchema('Food & Restaurant', '/industries/food-restaurant');

export default function FoodRestaurantIndustry() {
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
                  <li className="breadcrumb-item active" aria-current="page">Food & Restaurant</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Restaurant & Food <em className="font-instrument fw-normal">Websites</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Attract more customers and increase orders with professional restaurant websites. Online ordering,
                    table reservations, and beautiful menus that make mouths water and phones ring.
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
                Restaurant Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Restaurant Websites', desc: 'Full-featured websites with online menus, reservations, and photo galleries.', icon: 'solar:chef-hat-linear' },
                  { title: 'Food Delivery Platforms', desc: 'Custom food delivery apps and websites competing with Foodpanda and Cheetay.', icon: 'solar:delivery-linear' },
                  { title: 'Cafe & Bakery Sites', desc: 'Beautiful websites showcasing your specialty items with online ordering.', icon: 'solar:cup-hot-linear' },
                  { title: 'Catering Services', desc: 'Professional sites for catering businesses with event packages and booking systems.', icon: 'solar:cake-linear' },
                  { title: 'Cloud Kitchen Platforms', desc: 'Multi-brand cloud kitchen management with unified ordering system.', icon: 'solar:bonfire-linear' },
                  { title: 'Food Aggregators', desc: 'Marketplace platforms connecting multiple restaurants with customers.', icon: 'solar:widget-5-linear' },
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
                  'Online Menu with Photos',
                  'Online Ordering System',
                  'Table Reservation',
                  'Payment Integration',
                  'Order Tracking',
                  'Customer Reviews',
                  'Location & Hours',
                  'Special Offers & Coupons',
                  'Delivery Zone Management',
                  'Photo & Video Gallery',
                  'WhatsApp Integration',
                  'Multi-Location Support',
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
                    Ready to Increase <em className="font-instrument">Your Orders?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss how a professional restaurant website with online ordering
                    can help you reach more customers and grow your food business in Pakistan.
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
