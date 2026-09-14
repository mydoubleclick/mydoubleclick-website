import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTechnologyCategory,
  technologyCategories,
  type TechPoint,
} from "@/data/technology";

// Only the categories defined in data/technology.ts exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return technologyCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getTechnologyCategory(slug);
  if (!cat) return {};
  return {
    title: cat.title,
    description: `${cat.summary} Installed and supported for New Jersey businesses and homes by Double Click Computing.`,
    alternates: { canonical: `https://www.mydoubleclick.com/technology/${cat.slug}` },
  };
}

const steps = [
  { step: "1", title: "Recommend", description: "We learn what you need and recommend technology that fits — honestly, with no upselling." },
  { step: "2", title: "Install & Connect", description: "We set it up, connect it securely to your network, and make sure it works with what you already have." },
  { step: "3", title: "Support", description: "We show you how to use it and stay on call for updates, questions, and problems." },
];

function PointList({ items, checkColor }: { items: TechPoint[]; checkColor: string }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <svg className={`w-5 h-5 ${checkColor} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <div className="text-slate-900 font-semibold text-sm">{item.label}</div>
            <div className="text-slate-500 text-sm mt-0.5">{item.detail}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default async function TechnologyCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getTechnologyCategory(slug);
  if (!cat) notFound();

  const index = technologyCategories.findIndex((c) => c.slug === cat.slug);
  const related = [1, 2, 3].map(
    (offset) => technologyCategories[(index + offset) % technologyCategories.length]
  );

  return (
    <>
      {/* Header */}
      <section className="bg-blue-50 border-b border-blue-100 relative overflow-hidden min-h-[220px]">
        <div className="absolute right-0 top-0 w-5/12 h-full hidden lg:block overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cat.heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
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
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/technology" className="hover:text-blue-600 transition-colors">
              Technology
            </Link>
            <span>/</span>
            <span className="text-slate-500">{cat.shortTitle}</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 max-w-2xl">{cat.title}</h1>
          <p className="text-slate-600 text-lg max-w-2xl">{cat.intro}</p>
        </div>
      </section>

      {/* Business & Home */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-blue-600 px-8 py-6">
                <div className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-1">
                  Business
                </div>
                <h2 className="text-2xl font-extrabold text-white">For Your Business</h2>
              </div>
              <div className="px-8 py-8">
                <PointList items={cat.business} checkColor="text-blue-600" />
              </div>
            </div>
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="bg-sky-500 px-8 py-6">
                <div className="text-sky-100 text-xs font-semibold uppercase tracking-widest mb-1">
                  Residential
                </div>
                <h2 className="text-2xl font-extrabold text-white">For Your Home</h2>
              </div>
              <div className="px-8 py-8">
                <PointList items={cat.home} checkColor="text-sky-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
              Brands & Products
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              Products We Install & Support
            </h2>
            <p className="text-slate-500 text-base max-w-2xl mx-auto">
              We work with the mainstream brands you already know — and
              we&apos;ll help you pick the one that fits your space, budget,
              and the devices you already own.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cat.products.map((p) => (
              <div key={p.brand} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="font-bold text-slate-900 text-sm mb-1">{p.brand}</div>
                <div className="text-slate-500 text-xs leading-relaxed">{p.products}</div>
              </div>
            ))}
          </div>

          {cat.notes && cat.notes.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 mt-8 max-w-3xl mx-auto">
              <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Good to Know</h3>
              <ul className="space-y-2">
                {cat.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-center text-slate-400 text-xs mt-8">
            Product and brand names are trademarks of their respective owners
            and are listed to show the technology we work with.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 bg-slate-900 text-white text-sm font-extrabold rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-xl font-extrabold text-slate-900">More Technology</h2>
            <Link href="/technology" className="text-blue-600 text-sm font-semibold hover:text-blue-700">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/technology/${r.slug}`}
                className="group flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="p-2.5 rounded-lg bg-blue-600 text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={r.icon} />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {r.title}
                  </div>
                  <div className="text-slate-500 text-xs leading-relaxed">{r.summary}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-slate-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">Ready to get started?</h2>
            <p className="text-slate-400 text-sm">
              Tell us what you have in mind and we&apos;ll get back to you the same day.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded transition-colors text-sm"
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
