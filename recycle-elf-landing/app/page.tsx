
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, QrCode, Gift, Recycle, Users, Shield, LineChart, Mail, ArrowRight, Building2, School, Home } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="/logo.jpeg" alt="Recycle Elf" width={28} height={28} className="rounded" />
            <span className="font-semibold text-xl">Recycle Elf</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-green-700">Features</a>
            <a href="#how" className="hover:text-green-700">How it Works</a>
            <a href="#partners" className="hover:text-green-700">Partners</a>
            <a href="#faq" className="hover:text-green-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="px-4 py-2 rounded-xl border hover:bg-gray-50">Contact</a>
            <a href="#cta" className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700">Get Early Access</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{opacity:0, y:10}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.5}}
              className="text-4xl md:text-5xl font-extrabold leading-tight">
              Turn Recycling into a Game — and Real Impact
            </motion.h1>
            <p className="mt-4 text-gray-600 text-lg">
              Recycle Elf connects <strong>smart bins</strong>, <strong>QR scanning</strong>, and <strong>points & avatar upgrades</strong> to
              motivate everyday recycling on campuses, business parks, and residential estates.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-green-600 text-white font-medium hover:bg-green-700">
                Try the Demo <ArrowRight className="w-4 h-4"/>
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border font-medium hover:bg-gray-50">
                Explore Features
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              {[
                "Live map of nearby bins",
                "QR-scan deposit with anti-fraud checks",
                "Points, levels, and avatar customization",
                "Challenges and leaderboards",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600"/>{t}</li>
              ))}
            </ul>
          </div>

          {/* Phone mockup */}
          <div className="relative md:justify-self-end">
            <div className="w-[320px] h-[660px] mx-auto rounded-[2.2rem] border shadow-2xl p-3 bg-gradient-to-br from-gray-50 to-white">
              <div className="w-full h-full rounded-[1.8rem] bg-white overflow-hidden border">
                <div className="h-12 bg-green-600"></div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">Recycle Elf</div>
                    <div className="text-xs text-gray-500">Demo</div>
                  </div>
                  <div className="h-40 rounded-xl bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Map Preview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl border p-3 text-center">
                      <MapPin className="w-5 h-5 mx-auto"/>
                      <p className="text-xs mt-1">Find Bins</p>
                    </div>
                    <div className="rounded-xl border p-3 text-center">
                      <QrCode className="w-5 h-5 mx-auto"/>
                      <p className="text-xs mt-1">Scan</p>
                    </div>
                    <div className="rounded-xl border p-3 text-center">
                      <Gift className="w-5 h-5 mx-auto"/>
                      <p className="text-xs mt-1">Rewards</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-3 text-sm text-gray-600">
                    Tip: Earn points for every valid deposit. Level up your avatar and join campus challenges!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-t">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6 text-center">
          {[
            {kpi:"+30%", label:"increase in recycling participation"},
            {kpi:"< 10s", label:"typical QR-scan drop-off time"},
            {kpi:"95%", label:"scan validity (anti-fraud) in pilots"},
          ].map((m,i)=> (
            <div key={i} className="rounded-2xl border p-6">
              <div className="text-3xl font-extrabold text-green-700">{m.kpi}</div>
              <div className="mt-1 text-sm text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Recycle Elf</h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
            A full stack of engagement: from finding bins to verified deposits to gamified rewards—designed for real-world operations.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin className="w-5 h-5"/>,
                title: "Live Bin Map",
                desc: "Guide users to the nearest smart bins with status and walking time.",
              },
              {
                icon: <QrCode className="w-5 h-5"/>,
                title: "Secure QR Scanning",
                desc: "Validate each drop-off with anti-fraud checks and rate limiting.",
              },
              {
                icon: <Gift className="w-5 h-5"/>,
                title: "Points & Avatars",
                desc: "Reward good behavior with levels, skins, and campus challenges.",
              },
              {
                icon: <Users className="w-5 h-5"/>,
                title: "Community Leaderboards",
                desc: "Drive friendly competition across classes, clubs, and dorms.",
              },
              {
                icon: <Shield className="w-5 h-5"/>,
                title: "Privacy & Safety",
                desc: "Respect user privacy with minimal data and clear consent.",
              },
              {
                icon: <LineChart className="w-5 h-5"/>,
                title: "Operator Dashboard",
                desc: "Monitor deposits, hotspots, contamination alerts, and bin fill levels.",
              },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border p-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-700">{f.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {icon: QrCode, title: "Scan Bin QR", desc: "Open the app, scan the bin QR, and confirm your item type."},
              {icon: Gift, title: "Earn Points", desc: "Receive instant points for valid deposits and complete challenges."},
              {icon: Recycle, title: "Upgrade Avatar", desc: "Level up your Recycle Elf and redeem rewards on campus."},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white border p-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-700">
                  <s.icon className="w-5 h-5"/>
                </div>
                <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Built for Real Venues</h2>
          <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">Deploy in weeks with low operational overhead and measurable outcomes.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {icon: School, title: "Campuses", desc: "Dorms, cafeterias, libraries—drive student-led sustainability."},
              {icon: Building2, title: "Business Parks", desc: "Boost ESG metrics and employee participation."},
              {icon: Home, title: "Residential Estates", desc: "Gamify household recycling with estate-wide challenges."},
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border p-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-700">
                  <p.icon className="w-5 h-5"/>
                </div>
                <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-b from-green-50 to-white border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Launch Your Pilot</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Ready to engage your community and improve recycling outcomes? Join our early access program.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-600 text-white font-medium hover:bg-green-700">
              Book a Demo <ArrowRight className="w-4 h-4"/>
            </a>
            <a href="#faq" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border font-medium hover:bg-gray-50">
              Read FAQs
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">FAQ</h2>
          <div className="mt-10 grid gap-4">
            {[
              {
                q: "How do users earn points?",
                a: "Users scan the bin QR and submit eligible items. Anti-fraud checks verify validity; points are awarded instantly.",
              },
              {
                q: "What integrations are supported?",
                a: "We expose APIs for smart bins and operator dashboards. Webhooks and CSV exports are available for pilots.",
              },
              {
                q: "How is privacy handled?",
                a: "We minimize personal data and obtain consent. Anonymous or pseudonymous modes can be enabled for pilots.",
              },
              {
                q: "How quickly can we launch?",
                a: "Typical pilots launch within 2–4 weeks depending on venue approvals and hardware availability.",
              },
            ].map((item, i) => (
              <details key={i} className="rounded-2xl border p-5">
                <summary className="font-medium cursor-pointer">{item.q}</summary>
                <p className="text-sm text-gray-600 mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Contact Us</h2>
          <p className="text-center text-gray-600 mt-2">Have questions or want to start a pilot? Send us a message.</p>
          <form action="https://formspree.io/f/your_endpoint" method="POST" className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-xl border px-4 py-3"/>
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border px-4 py-3"/>
            </div>
            <input name="org" placeholder="Organization" className="w-full rounded-xl border px-4 py-3"/>
            <textarea name="message" required placeholder="Tell us about your venue and goals" className="w-full rounded-xl border px-4 py-3 h-28"/>
            <button className="inline-flex items-center gap-2 justify-center rounded-2xl bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700">
              <Mail className="w-4 h-4"/> Send Message
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-3">By submitting, you agree to our demo terms. We never sell your data.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Recycle className="w-4 h-4"/>
            <span>© {new Date().getFullYear()} Recycle Elf</span>
          </div>
          <div className="text-sm text-gray-600 flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#contact" className="hover:text-gray-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
