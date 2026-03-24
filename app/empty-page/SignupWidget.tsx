'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function SignupWidget() {
  useEffect(() => {
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

  return (
    <>
      <div id="cd-progress-widget" />
      <div id="cd-memberplans-widget" />
      <input type="hidden" name="PID" value="57365" />
      <div
        id="cd-signup-widget"
        data-clientkey="45c3b9db-494d-4efa-af4a-d2437411a32b"
        data-memberurl="https://www.smartcredit.com"
        data-productname="smartcredit"
        data-switcher
      />
      <Script
        src="https://cdn.consumerdirect.io/cd-widgets/latest/cd-signup.js"
        type="module"
        strategy="afterInteractive"
      />
    </>
  );
}
