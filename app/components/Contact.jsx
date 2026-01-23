'use client';

// components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You could integrate with Formspree, EmailJS, or Resend here
    let response = await fetch("https://profileserver-bxz33grd4a-uc.a.run.app/sendMessagev2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (response.status == 200) {
        setSubmitted(true);
    } 
  };

  return (
    <section id="contact" className="pb-20 px-6 bg-zinc-50 dark:bg-zinc-900 relative">
            {/* Ndebele pattern background */}
      {/* <div className="absolute top-0 left-0 w-full h-[10%] sm:max-h-0 opacity-100 bg-[url('https://firebasestorage.googleapis.com/v0/b/my-profile-95716.firebasestorage.app/o/bg-ndebele-1.png?alt=media&token=3b69864e-90d2-4c60-9ea1-ddc1b47d2675')] bg-repeat  border-t-4 border-t-blue-500 border-b-4 border-b-blue-500" /> */}
      <div className="max-w-2xl mx-auto text-center pt-[10%]">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-zinc-600 dark:text-zinc-300 mb-10">
          Have a project or opportunity in mind? I'd love to hear from you.
        </p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-4 text-left"
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-600 dark:text-green-400 text-lg"
          >
            Thank you! Your message has been sent.
          </motion.div>
        )}
      </div>
    </section>
  );
} 