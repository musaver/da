import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Healthcare Website Design & Development Pakistan | Dev Aspire",
  description:
    "Professional website design and development for hospitals, clinics, doctors, and healthcare providers in Pakistan. Patient portals, appointment systems, and medical websites.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/healthcare`,
    siteName: "Dev Aspire",
    title: "Healthcare Website Design & Development Pakistan",
    description:
      "Custom healthcare websites with patient portals, appointment booking, and telemedicine features for Pakistani medical institutions.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Healthcare Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Healthcare Website Design & Development Pakistan",
    description:
      "Custom healthcare websites with patient portals and appointment systems.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/healthcare`,
  },
};

const schema = serviceSchema(
  'Healthcare Website Development',
  'Professional website design and development for hospitals, clinics, and healthcare providers in Pakistan with patient management systems.'
);
const breadcrumb = breadcrumbSchema('Healthcare', '/industries/healthcare');

export default function HealthcareIndustry() {
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
                  <li className="breadcrumb-item active" aria-current="page">Healthcare</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Healthcare Website <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Build trust and improve patient care with professional healthcare websites. From hospital portals to
                    doctor websites, we create HIPAA-compliant solutions for Pakistani healthcare providers.
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
                Healthcare Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Hospital Websites', desc: 'Comprehensive hospital portals with department info, doctor profiles, and patient services.', icon: 'solar:buildings-3-linear' },
                  { title: 'Clinic Websites', desc: 'Professional websites for private clinics with appointment booking and patient information.', icon: 'solar:medical-kit-linear' },
                  { title: 'Doctor Profiles', desc: 'Personal websites for doctors to showcase expertise, qualifications, and accept appointments.', icon: 'solar:user-id-linear' },
                  { title: 'Patient Portals', desc: 'Secure portals for patients to access records, book appointments, and communicate with doctors.', icon: 'solar:login-2-linear' },
                  { title: 'Telemedicine', desc: 'Video consultation platforms for remote healthcare delivery across Pakistan.', icon: 'solar:video-frame-linear' },
                  { title: 'Pharmacy Systems', desc: 'Online pharmacy websites with prescription management and medicine ordering.', icon: 'solar:pill-linear' },
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
                  'Online Appointment Booking',
                  'Patient Registration System',
                  'Doctor Schedules & Availability',
                  'Medical Records Management',
                  'Prescription Management',
                  'Lab Reports Access',
                  'Payment Integration',
                  'SMS & Email Notifications',
                  'Emergency Contact Info',
                  'Health Blog & Resources',
                  'Insurance Information',
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
                    Ready to Improve Your <em className="font-instrument">Patient Experience?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss how we can help your healthcare practice with a professional
                    website that improves patient care and streamlines operations.
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
