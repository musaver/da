'use client';

import { useEffect, useRef } from 'react';

export default function SignupWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject widget HTML outside React's virtual DOM control
    container.innerHTML = `
      <div id="cd-progress-widget"></div>
      <div id="cd-memberplans-widget"></div>
      <input type="hidden" name="PID" value="57365" />
      <div
        id="cd-signup-widget"
        data-clientkey="45c3b9db-494d-4efa-af4a-d2437411a32b"
        data-memberurl="https://www.smartcredit.com"
        data-productname="smartcredit"
        data-switcher
      ></div>
    `;

    // Load the widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.consumerdirect.io/cd-widgets/latest/cd-signup.js';
    script.type = 'module';
    script.async = true;
    container.appendChild(script);

    // Listen for signup completion
    const handler = (cdEvent: Event) => {
      const { step } = (cdEvent as CustomEvent<{ step: string }>).detail;
      if (step === 'ConfirmationStep') {
        console.log('Signup Completed');
      }
    };
    document.addEventListener('cd-signup-next-step', handler);

    return () => {
      document.removeEventListener('cd-signup-next-step', handler);
    };
  }, []);

  return <div ref={containerRef} />;
}
