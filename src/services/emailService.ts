import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    message: formData.message,
  };

  try {
    // Send notification email to admin
    await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (err) {
    console.error('Failed to send ADMIN email. Check ADMIN_TEMPLATE_ID.', err);
    throw err;
  }

  try {
    // Send thank you email to user
    await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY);
  } catch (err) {
    console.error('Failed to send USER email. Check USER_TEMPLATE_ID and "To Email" field inside EmailJS.', err);
    throw err;
  }
};
