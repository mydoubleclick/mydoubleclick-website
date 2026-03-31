import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Support | Double Click Computing",
  description:
    "Get instant remote IT support from Double Click Computing. Download Splashtop SOS and connect to Jason in minutes.",
};

const steps = [
  {
    step: "1",
    title: "Download Splashtop SOS",
    description:
      "Click the Download button below. It automatically detects your operating system and downloads the right version for your Windows PC or Mac.",
  },
  {
    step: "2",
    title: "Open the App & Share Your Code",
    description:
      "Open the downloaded app. You'll see a 9-digit session code. Call or text that code to Jason and tell him what the issue is.",
  },
  {
    step: "3",
    title: "We Connect & Fix",
    description:
      "Jason connects to your computer securely. You can watch everything in real time and end the session any time.",
  },
];

export default function RemoteSupport() {
  return (
    <>
      <section className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Fast Help
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            Remote Support
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            No truck roll needed. We can connect to your computer in minutes and
            fix most issues remotely — safely and securely.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-12 text-center">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white text-xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Download box */}
          <div className="bg-slate-900 rounded-2xl p-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600 bg-opacity-20 text-sky-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              Splashtop SOS — Secure Remote Access
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Download Remote Support App
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Works on Windows 10/11 and macOS. No account needed. The app
              closes when you do — nothing is left running on your computer.
            </p>

            {/* Primary auto-detect download */}
            <a
              href="https://my.splashtop.com/sos/packages/download/RP3ZZLH53LPJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-lg transition-colors text-lg mb-6"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Now
            </a>

            <p className="text-slate-500 text-xs mb-8">
              Automatically detects your operating system (Windows or Mac)
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-sm mx-auto mb-6">
              <div className="flex-1 h-px bg-slate-700" />
              <span className="text-slate-600 text-xs uppercase tracking-widest">or choose manually</span>
              <div className="flex-1 h-px bg-slate-700" />
            </div>

            {/* Per-OS buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://my.splashtop.com/sos/download?platform=windows"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0h11.5v11.5H0zm12.5 0H24v11.5H12.5zM0 12.5h11.5V24H0zm12.5 0H24V24H12.5z" />
                </svg>
                Download for Windows
              </a>
              <a
                href="https://my.splashtop.com/sos/download?platform=mac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded transition-colors text-sm"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
                </svg>
                Download for Mac
              </a>
            </div>

            <p className="text-slate-500 text-xs mt-6">
              After downloading, call or text Jason:{" "}
              <a
                href="tel:+18889254259"
                className="text-sky-400 hover:text-sky-300"
              >
                (888) 9-CLICK-9
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8">
            Common Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is it safe to let someone access my computer remotely?",
                a: "Yes. Splashtop SOS requires you to share the session code — we can only connect when you give us that code. You can see everything we do in real time, and you can end the session instantly by closing the app.",
              },
              {
                q: "Does the app stay on my computer after the session?",
                a: "No. Splashtop SOS is a portable app — it doesn't install anything and leaves no background processes running after you close it.",
              },
              {
                q: "What issues can be fixed remotely?",
                a: "Most software issues: slow performance, virus removal, software setup, email configuration, printer issues, Windows/Mac problems, and more. Hardware failures require an on-site visit.",
              },
              {
                q: "How much does remote support cost?",
                a: "Remote support is billed at our standard hourly rate with a 30-minute minimum. Contact us for current rates — we'll always confirm pricing before we start.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-slate-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
