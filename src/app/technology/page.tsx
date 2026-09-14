import type { Metadata } from "next";
import Link from "next/link";
import { technologyCategories } from "@/data/technology";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Smart home automation, cybersecurity, AI, Wi-Fi, security cameras, conference rooms, and more — installed, integrated, and supported for NJ businesses and homes.",
  alternates: { canonical: "https://www.mydoubleclick.com/technology" },
};

export default function Technology() {
  return (
    <>
      {/* Page header */}
      <section className="bg-blue-50 border-b border-blue-100 relative overflow-hidden min-h-[220px]">
        <div className="absolute right-0 top-0 w-5/12 h-full hidden lg:block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=1400&q=80"
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
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Technology
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 max-w-2xl">
            Today&apos;s Technology, Set Up Right
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Smart homes, AI, security cameras, conference rooms, and more. We
            help businesses and families choose the right technology, install
            it, connect it securely, and support it long after the box is
            opened.
          </p>
        </div>
      </section>

      {/* Business + Home */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "For Your Business",
                desc: "Technology that keeps your team productive and your data protected — from the front door to the conference room.",
                bg: "bg-blue-600",
              },
              {
                title: "For Your Home",
                desc: "Smart devices, Wi-Fi, and entertainment that work together — explained in plain English, without the frustration.",
                bg: "bg-sky-500",
              },
              {
                title: "Integrated & Secure",
                desc: "Everything connected on a secure network, so new devices never become the weak spot. One team to call for all of it.",
                bg: "bg-slate-900",
              },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} rounded-2xl p-8 text-white`}>
                <h2 className="text-xl font-extrabold mb-3">{item.title}</h2>
                <p className="text-white/85 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              What We Install & Support
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              From the latest consumer gadgets to business-grade systems —
              choose a category to see how we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/technology/${cat.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-7 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="inline-flex self-start p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <h3 className="text-slate-900 text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {cat.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cat.products.slice(0, 4).map((p) => (
                    <span
                      key={p.brand}
                      className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded"
                    >
                      {p.brand}
                    </span>
                  ))}
                </div>
                <span className="mt-auto text-blue-600 text-sm font-semibold flex items-center gap-1.5">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-10">
            Product and brand names are trademarks of their respective owners
            and are listed to show the technology we work with.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Saw something new and wondering if it&apos;s right for you?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Ask us before you buy. We&apos;ll tell you honestly whether it fits
            your business or home — and set it up properly if it does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded transition-colors"
            >
              Talk to Our Team
            </Link>
            <a
              href="tel:+18889254259"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded transition-colors"
            >
              (888) 9-CLICK-9
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
