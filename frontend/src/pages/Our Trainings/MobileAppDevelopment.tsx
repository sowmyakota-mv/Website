import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function MobileAppDevelopment() {
  return (
    <section id="our-services/mobile-app" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-cyan-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Mobile App Development</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Learn to build high-performance iOS and Android apps using native and cross-platform frameworks like React Native and Flutter.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            This course equips you with the skills to develop, deploy, and optimize mobile applications for iOS and Android platforms. 
            You’ll explore mobile architecture, offline-first design, native modules, app performance optimization, CI/CD pipelines, and app store deployment.
          </p>
          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            Students will complete real-world projects, implementing full-featured apps while gaining hands-on experience with development frameworks, testing strategies, and publishing pipelines.
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Mobile architecture design for scalable apps</li>
              <li>• Cross-platform development with React Native & Flutter</li>
              <li>• Offline-first app design and caching strategies</li>
              <li>• Native modules & platform integrations</li>
              <li>• App performance optimization & profiling</li>
              <li>• CI/CD pipelines and mobile deployment</li>
              <li>• App store publishing and release management</li>
              <li>• Unit testing, integration testing, and E2E testing</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — Mobile Architecture & Setup</h3>
              <p className="text-slate-700 mb-2">
                Learn the fundamentals of mobile app architecture and environment setup.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Mobile project structure & architecture patterns</li>
                <li>Setting up React Native & Flutter environments</li>
                <li>Emulators, simulators, and debugging tools</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — UI & Navigation</h3>
              <p className="text-slate-700 mb-2">
                Build user interfaces and navigation flows for mobile apps.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>React Native components & Flutter widgets</li>
                <li>Navigation libraries & state management</li>
                <li>Responsive layouts and adaptive design</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Native Modules & APIs</h3>
              <p className="text-slate-700 mb-2">
                Integrate device capabilities and external APIs into your apps.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Camera, GPS, notifications</li>
                <li>Bluetooth & sensors integration</li>
                <li>REST & GraphQL APIs consumption</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — Testing & Deployment</h3>
              <p className="text-slate-700 mb-2">
                Ensure your apps are stable, performant, and ready for the app store.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Unit, integration & end-to-end testing</li>
                <li>CI/CD pipelines for mobile apps</li>
                <li>App store publishing and release management</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Tools */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["React Native","Flutter","Xcode","Android Studio","Expo","Firebase","Redux","VS Code"].map((t, i) => (
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">{t}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Build a multi-screen mobile app using React Native.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Offline-first app with local storage and caching.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project:</strong> Integration with device APIs: camera, location, push notifications.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> Feature-rich mobile app deployed to App Store and Google Play.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career Paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Mobile Developer","Flutter Developer","React Native Developer","iOS Developer","Android Developer","Mobile UI/UX Designer"].map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm text-center font-semibold">{role}</div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Do I need prior mobile development experience?</summary>
              <p className="mt-2 text-slate-700">Basic programming knowledge recommended; the course covers mobile frameworks and best practices.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Which frameworks are used?</summary>
              <p className="mt-2 text-slate-700">React Native and Flutter for cross-platform app development.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification?</summary>
              <p className="mt-2 text-slate-700">Certificate on completion with real-world project portfolio.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-cyan-600 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Become a Mobile App Developer</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Master mobile app development from scratch and deploy production-ready apps to app stores.</p>
        <Link to="/register" className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-cyan-50 transition">Enroll Now</Link>
      </div>
    </section>
  );
}
