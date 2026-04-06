const WHATSAPP_HREF = 'https://wa.me/923006825223';
const PHONE_HREF = 'tel:+923006825223';

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href={WHATSAPP_HREF}
        className="floating-contact__btn floating-contact__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="floating-contact__icon-wrap">
          <iconify-icon icon="mdi:whatsapp" width={28} height={28} />
        </span>
      </a>
      <a href={PHONE_HREF} className="floating-contact__btn floating-contact__btn--call" aria-label="Call Dev Aspire">
        <span className="floating-contact__icon-wrap">
          <iconify-icon icon="solar:phone-calling-linear" width={28} height={28} />
        </span>
      </a>
    </div>
  );
}
