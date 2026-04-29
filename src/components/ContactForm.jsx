import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="pt-[20] py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-on-tertiary-container font-label font-bold tracking-[0.2em] uppercase text-sm">
                Get In Touch
              </h3>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary">
                Let's Discuss Your Vision
              </h2>
            </div>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h6 className="font-headline font-bold text-primary mb-1">Our Office</h6>
                  <p className="text-on-surface-variant">
                    507/A, RTO Road, Phase 2, Sathuvacheri, Vellore, Tamil Nadu 632009
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h6 className="font-headline font-bold text-primary mb-1">Phone Number</h6>
                  <p className="text-on-surface-variant">+91 9003440908 , +91 96554 16090</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded-sm flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h6 className="font-headline font-bold text-primary mb-1">Email Address</h6>
                  <p className="text-on-surface-variant">tsrgroupsvlr@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 bg-surface-container rounded-sm overflow-hidden shadow-sm">
              <iframe
                className="w-full aspect-4/3"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6066885603555!2d79.1564083!3d12.9329817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad3862f37c5921%3A0x448076f9918292e0!2sTSR%20Groups!5e0!3m2!1sen!2sin!4v1776506371974!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TSR Groups Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-low p-8 md:p-12 rounded-sm shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-on-tertiary-container text-4xl md:text-5xl font-extrabold text-primary">
                Contact Us
              </h2>

              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-sm">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="space-y-6">
                {/* Name & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none border-b-2 border-outline/20 focus:border-on-tertiary-container focus:ring-0 px-4 py-3 text-primary transition-all"
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                      Phone
                    </label>
                    <input
                      className="w-full bg-surface-container-highest border-none border-b-2 border-outline/20 focus:border-on-tertiary-container focus:ring-0 px-4 py-3 text-primary transition-all"
                      placeholder="+91 00000 00000"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-highest border-none border-b-2 border-outline/20 focus:border-on-tertiary-container focus:ring-0 px-4 py-3 text-primary transition-all"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Your Message
                  </label>
                  <textarea
                    className="w-full bg-surface-container-highest border-none border-b-2 border-outline/20 focus:border-on-tertiary-container focus:ring-0 px-4 py-3 text-primary transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                className="w-full bg-primary text-white py-4 font-headline font-bold text-lg rounded-sm hover:bg-on-tertiary-container transition-all disabled:opacity-50"
                type="submit"
                disabled={isSubmitted}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;