"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-50">
        ✨ This is a free redesign mockup created by Byldr —{" "}
        <a href="https://ryancwynar.github.io" className="underline">
          Learn More
        </a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40 px-4 md:px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PB</span>
            </div>
            <span className="font-bold text-lg text-gray-900 hidden sm:block">
              Pam Blount Plumbing
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gray-600 hover:text-sky-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-sky-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-sky-600 transition-colors">
              Contact
            </a>
          </div>

          <a
            href="tel:+19547860477"
            className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
          >
            (954) 786-0477
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-3">
              <a href="#services" className="text-gray-600 hover:text-sky-600 px-2 py-1">Services</a>
              <a href="#about" className="text-gray-600 hover:text-sky-600 px-2 py-1">About</a>
              <a href="#contact" className="text-gray-600 hover:text-sky-600 px-2 py-1">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span>🏠</span> Family Owned Since 1982
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pompano Beach&apos;s Most Trusted{" "}
              <span className="text-sky-500">Plumber</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              From emergency repairs to water heater installation, our licensed plumbers deliver
              fast, friendly service with honest pricing. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+19547860477"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center shadow-lg shadow-sky-500/25"
              >
                📞 Call (954) 786-0477
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center border border-gray-200"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-sky-500">40+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-sky-500">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-sky-500">100%</div>
              <div className="text-sm text-gray-600">Licensed & Insured</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-sky-500">⭐</div>
              <div className="text-sm text-gray-600">5-Star Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From quick repairs to complete installations, we handle all your residential and
              commercial plumbing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚿",
                title: "Drain Cleaning",
                desc: "Clogged drains? We carry drain augers, plumbing snakes, and hydro jetting equipment for any blockage.",
              },
              {
                icon: "🚨",
                title: "Emergency Plumbing",
                desc: "Plumbing emergencies don't wait. Neither do we. Fast response when you need it most.",
              },
              {
                icon: "🚽",
                title: "Toilet Repairs",
                desc: "Backed up or overflowing? Our trucks carry toilet parts like flush valves and flappers for same-day fixes.",
              },
              {
                icon: "💧",
                title: "Leak Detection",
                desc: "Hidden leaks can cause major damage. We'll find and fix the problem fast.",
              },
              {
                icon: "🔥",
                title: "Water Heaters",
                desc: "Repair or replace your water heater. We service all brands and types.",
              },
              {
                icon: "🔧",
                title: "Pipe Repairs",
                desc: "Leaky pipes? From minor repairs to full repiping, we've got you covered.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Pam Blount
              </h2>
              <p className="text-gray-600 mb-4">
                Pam Blount carries on a proud family tradition of quality plumbing service in
                Pompano Beach. She&apos;s intimately involved with all day-to-day operations and is
                personally available to answer any questions you may have.
              </p>
              <p className="text-gray-600 mb-4">
                In a world that seems to favor large superstores, we emphasize personal service
                rarely attainable in that atmosphere. Do-it-yourself plumbing help and hard-to-find
                parts are our specialty.
              </p>
              <p className="text-gray-600 mb-6">
                Want to talk to someone who knows you and cares about your needs? That&apos;s the
                Pam Blount difference.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👷‍♀️</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Pam Blount</div>
                  <div className="text-sky-600">Owner, 40+ Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  "Family owned & operated since 1982",
                  "Licensed, bonded, and insured",
                  "Upfront, honest pricing",
                  "Parts in stock for faster repairs",
                  "Both plumbing service AND supply store",
                  "Personal service you can count on",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sky-500 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-sky-600 text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Plumber Fast?</h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Don&apos;t let plumbing problems disrupt your day. Our experienced team is ready to help
            with any plumbing emergency.
          </p>
          <a
            href="tel:+19547860477"
            className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition-colors shadow-lg"
          >
            📞 Call (954) 786-0477
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Visit our plumbing supply store or give us a call for service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">
                221 S.W. 5th Street
                <br />
                Pompano Beach, FL
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+19547860477" className="text-sky-600 hover:text-sky-700 font-semibold">
                (954) 786-0477
              </a>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 7:30am - 5pm
                <br />
                Emergency: 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PB</span>
              </div>
              <span className="font-semibold text-white">Pam Blount Plumbing</span>
            </div>
            <p className="text-sm">
              © 2026 Pam Blount Plumbing. Serving Pompano Beach since 1982.
            </p>
          </div>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var params = new URLSearchParams(window.location.search);
              var ref = params.get('ref');
              if (ref) {
                var img = new Image();
                img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
              }
            })();
          `,
        }}
      />
    </div>
  );
}
