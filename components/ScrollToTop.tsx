'use client';

export default function ScrollToTop() {
  return (
    <div className="get-template hstack gap-2">
      <button 
        className="btn bg-primary p-2 round-40 rounded hstack justify-content-center flex-shrink-0" 
        id="scrollToTopBtn"
      >
        <iconify-icon icon="solar:alt-arrow-up-linear" className="fs-7 text-white"></iconify-icon>
      </button>
    </div>
  );
}

