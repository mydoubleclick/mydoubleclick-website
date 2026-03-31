import Link from "next/link";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface IncludesItem {
  label: string;
  detail?: string;
}

interface ServiceDetailPageProps {
  breadcrumb: string;
  breadcrumbHref: string;
  tag: string;
  title: string;
  description: string;
  includes: IncludesItem[];
  steps?: Step[];
  notes?: string[];
  accentColor?: "blue" | "sky";
}

export default function ServiceDetailPage({
  breadcrumb,
  breadcrumbHref,
  tag,
  title,
  description,
  includes,
  steps,
  notes,
  accentColor = "blue",
}: ServiceDetailPageProps) {
  const accent = accentColor === "sky" ? "text-sky-400" : "text-sky-400";
  const ctaBg = accentColor === "sky" ? "bg-sky-500" : "bg-blue-600";
  const ctaHover = accentColor === "sky" ? "hover:bg-sky-600" : "hover:bg-blue-700";
  const dotColor = accentColor === "sky" ? "bg-sky-500" : "bg-blue-600";
  const checkColor = accentColor === "sky" ? "text-sky-500" : "text-blue-600";

  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <span>/</span>
            <Link href={breadcrumbHref} className="hover:text-blue-600 transition-colors">
              {breadcrumb}
            </Link>
          </div>
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            {tag}
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{title}</h1>
          <p className="text-slate-600 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {includes.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <div className="text-slate-900 font-semibold text-sm">
                        {item.label}
                      </div>
                      {item.detail && (
                        <div className="text-slate-500 text-sm mt-0.5">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              {/* CTA card */}
              <div className={`${ctaBg} rounded-2xl p-8 text-white`}>
                <h3 className="text-xl font-extrabold mb-3">
                  Get a Free Assessment
                </h3>
                <p className="text-white text-opacity-80 text-sm mb-6">
                  Tell us about your setup and what you need. We&apos;ll give
                  you an honest assessment and a clear quote — no pressure.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-slate-900 font-bold px-6 py-3 rounded hover:bg-slate-100 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>

              {/* Notes */}
              {notes && notes.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                    Good to Know
                  </h3>
                  <ul className="space-y-2">
                    {notes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className={`w-1.5 h-1.5 ${dotColor} rounded-full flex-shrink-0 mt-1.5`} />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      {steps && steps.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 bg-slate-900 text-white text-sm font-extrabold rounded-full flex items-center justify-center mx-auto mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA strip */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">
              Ready to get started?
            </h2>
            <p className="text-slate-400 text-sm">
              Reach out and we&apos;ll get back to you the same day.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className={`${ctaBg} ${ctaHover} text-white font-bold px-6 py-3 rounded transition-colors text-sm`}
            >
              Contact Us
            </Link>
            <a
              href="tel:+18889254259"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
            >
              (888) 9-CLICK-9
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
