import React, { useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Input, Textarea } from '../../components/ui/FormElements';
import { sendContactEmail } from '../../services/emailService';

const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be under 100 characters'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSending, setIsSending] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleButtonClick = async () => {
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      await sendContactEmail(formData);
      toast.success('Your message has been sent successfully!');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          description="Ready to start? Send us a message and we'll get you set up."
        />
        <div className="space-y-6 bg-background-light p-8 md:p-12 rounded-xl shadow-sm border border-slate-100">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="fullName"
              placeholder="Enter Your Name"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <Input
              label="Email Address"
              name="email"
              placeholder="Enter Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <Textarea
            label="Message"
            name="message"
            placeholder="How can we help you achieve your goals?"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <button
            type="button"
            onClick={handleButtonClick}
            disabled={isSending}
            className="w-full py-4 text-lg font-bold uppercase tracking-wider rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#f2df0d', color: '#1e293b' }}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </section>
  );
};
