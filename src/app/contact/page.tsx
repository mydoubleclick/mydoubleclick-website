import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Double Click Computing",
  description:
    "Get in touch with Double Click Computing for IT support in New Jersey. Call, email, or fill out the form.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-blue-50 border-b border-blue-100 relative overflow-hidden min-h-[220px]">
        <div className="absolute right-0 top-0 w-5/12 h-full hidden lg:block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-50/30 to-transparent" />
        </div>
        <div
          className="absolute right-0 top-0 w-5/12 h-full hidden lg:block opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Have a problem? Need a quote? Just have a question? Reach out —
            we&apos;ll get back to you the same day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <a
                    href="tel:+18889254259"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Phone
                      </div>
                      <div className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">
                        (888) 9-CLICK-9
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:jason@mydoubleclick.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Email
                      </div>
                      <div className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors">
                        jason@mydoubleclick.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-0.5">
                        Service Area
                      </div>
                      <div className="text-slate-900 font-semibold">
                        New Jersey
                      </div>
                      <div className="text-slate-500 text-sm">
                        On-site & remote available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">
                  Response Time
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  We typically respond within a few hours during business hours.
                  For urgent issues, call or text directly.
                </p>
                <a
                  href="https://DoubleClick.as.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors"
                >
                  Book an Appointment Online
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6">
                Send a Message
              </h2>
              <form
                action="https://formspree.io/f/mojpdoyb"
                method="POST"
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Phone{" "}
                    <span className="text-slate-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(888) 9-CLICK-9"
                  />
                </div>
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    I need help with...
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a category</option>
                    <option value="business">Managed IT Services</option>
                    <option value="residential">Home / Residential</option>
                    <option value="network">Network / Firewall</option>
                    <option value="security">Security / Virus</option>
                    <option value="new-device">New Device Setup</option>
                    <option value="remote">Remote Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    What&apos;s going on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Describe your issue or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
                <p className="text-slate-400 text-xs text-center">
                  We typically respond within a few hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
