// ✅ This file IS committed to git — it is a safe template with no real secrets.
// To set up locally:
//   1. Copy this file:  cp config.example.js config.js
//   2. Fill in your real credentials in config.js (it is gitignored)

window.ENV = {
  SUPABASE_URL:       'YOUR_SUPABASE_URL',        // e.g. https://xxxx.supabase.co
  SUPABASE_ANON_KEY:  'YOUR_SUPABASE_ANON_KEY',   // Project Settings → API → anon public key

  EMAILJS_PUBLIC_KEY:  'YOUR_EMAILJS_PUBLIC_KEY',  // EmailJS Account → Public Key
  EMAILJS_SERVICE_ID:  'YOUR_EMAILJS_SERVICE_ID',  // EmailJS Email Services → Service ID
  EMAILJS_TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID', // EmailJS Email Templates → Template ID

  NOTIFY_EMAIL: 'YOUR_NOTIFICATION_EMAIL'          // email that receives complaint alerts
};
