"use client";
import React from "react";
import DemoMock from "../components/DemoMock";
import FeatureCard from "../components/FeatureCard";
import HowItWorksStep from "../components/HowItWorksStep";
import CodeBlock from "../components/CodeBlock";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import DemoModal from "../components/DemoModal";
import { useState } from "react";


export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const demoVideoUrl = "/demo.mp4"; // Place your demo video in public/demo.mp4

  return (
    <div className="bg-[#0b0e13] min-h-screen flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="relative w-full py-20 md:py-28 bg-gradient-to-br from-[#181f2a]/80 via-[#232b3a]/60 to-[#181f2a]/80">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-indigo-600/20 blur-3xl rounded-full" />
        </div>
        {/* Headline and subheading */}
        <div className="w-full flex flex-col items-center mb-12 px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-center mb-2">
            Know when learners struggle — <span className="text-indigo-400">and act before they fail.</span>
          </h1>
          <div className="text-lg md:text-2xl text-indigo-200 font-semibold text-center">
            Learning intelligence, embedded.
          </div>
          {/* 1. Clarifying line under subheadline */}
          <div className="text-base text-gray-400 font-medium text-center mt-2">
            Sciro is an SDK for edtech and training platforms.
          </div>
        </div>
        {/* Main hero content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-stretch gap-12">
          {/* Left: Description and buttons */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div>
              <p className="text-base md:text-lg text-indigo-200 font-semibold mb-2">
                Sciro is an SDK that plugs into any learning app.
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-4">
                Sciro embeds inside learning apps to detect confusion, fatigue, and drop-off risk in real time, then triggers the right intervention instantly.
              </p>
              {/* 4. Micro status badge */}
              <div className="mb-3">
                <span className="inline-block bg-indigo-900/60 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full">
                  Private beta — early design partners welcome
                </span>
              </div>
              {/* Responsive buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
                <button
                  type="button"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition w-full sm:w-auto text-center"
                  onClick={() => setModalOpen(true)}
                >
                  Watch the 90-second demo
                </button>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 text-indigo-200 font-semibold px-6 py-3 rounded-lg border border-white/10 transition w-full sm:w-auto text-center"
                >
                  View the SDK
                </a>
              </div>
            </div>
          </div>
          {/* Right: Demo/Event stream */}
          <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
            <DemoMock />
          </div>
        </div>
        <DemoModal open={modalOpen} onClose={() => setModalOpen(false)} videoUrl={demoVideoUrl} />
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <FeatureCard
            title="Real-time learner state"
            desc="Infer confusion, frustration, fatigue, boredom from interaction behavior."
            icon={
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="#6366f1" fillOpacity="0.15"/>
                <path d="M10 20c-2-2-2-6 0-8s6-2 8 0 2 6 0 8-6 2-8 0z" stroke="#818cf8" strokeWidth="2"/>
              </svg>
            }
          />
          <FeatureCard
            title="On-device + offline"
            desc="Fast, private inference that works in low-connectivity environments."
            icon={
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <rect x="7" y="7" width="18" height="18" rx="4" stroke="#38bdf8" strokeWidth="2" fill="#0ea5e9" fillOpacity="0.08"/>
                <circle cx="16" cy="22" r="1.5" fill="#38bdf8"/>
              </svg>
            }
          />
          {/* 3. Trust/constraint line under On-device + offline */}
          <div className="flex flex-col">
            <FeatureCard
              title="On-device + offline"
              desc="Fast, private inference that works in low-connectivity environments."
              icon={
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <rect x="7" y="7" width="18" height="18" rx="4" stroke="#38bdf8" strokeWidth="2" fill="#0ea5e9" fillOpacity="0.08"/>
                  <circle cx="16" cy="22" r="1.5" fill="#38bdf8"/>
                </svg>
              }
            />
            <span className="text-xs text-gray-500 mt-2 ml-1">No cameras. No microphones. Behavior signals only.</span>
          </div>
          <FeatureCard
            title="Intervention hooks"
            desc="Return suggested actions like show_example, hint_mode, slow_down, take_break."
            icon={
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                <path d="M16 6v10a4 4 0 1 0 4 4" stroke="#34d399" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="14" stroke="#34d399" strokeWidth="1" opacity="0.15"/>
              </svg>
            }
          />
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">How it works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <HowItWorksStep n={1} title="Event Signals" desc="Capture behavior events (pause, rewind, retries, time-to-answer)" />
          <HowItWorksStep n={2} title="Learner State" desc="Infer learner state (confused, engaged, fatigued)" />
          <HowItWorksStep n={3} title="Intervention Hooks" desc="Trigger intervention (example, hint, step-by-step)" />
          <HowItWorksStep n={4} title="Outcome Metrics" desc="Measure outcomes (completion, retention, time-to-mastery)" />
        </div>
      </section>

      {/* SDK Example */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">SDK Example</h2>
        <div className="w-full">
          <div className="rounded-xl bg-white/5 border border-white/10">
            <div className="w-full max-w-full overflow-x-auto">
              <div className="min-w-[300px] max-w-full">
                <CodeBlock />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now / Who it's for */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Why now</h3>
          {/* 2. Sharpened "Why now" copy */}
          <p className="text-gray-400 text-base">
            Recent advances in on-device inference and behavioral modeling make real-time learning intelligence possible for the first time.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">Who it's for</h3>
          <ul className="text-gray-400 text-base space-y-1">
            <li>
              <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-2 align-middle" />
              Edtech
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-2 align-middle" />
              Schools
            </li>
            <li>
              <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full mr-2 align-middle" />
              Corporate training
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
