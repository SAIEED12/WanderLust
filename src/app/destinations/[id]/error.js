'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FiArrowLeft, FiHome, FiRefreshCw } from 'react-icons/fi';

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center">
        {/* Logo / Brand */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-wide"
          >
            <span className="text-cyan-400">Wander</span>
            <span className="text-white">Lust</span>
          </Link>
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse"></span>
          Something went wrong
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight">
          Oops!
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-200">
          The journey hit a small turbulence
        </h2>

        {/* Description */}
        <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Looks like something unexpected happened while loading this page.
          Don’t worry — your travel plans are still safe with Wanderlust.
          Try refreshing the page or head back home.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            <FiRefreshCw className="group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <FiHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

        {/* Footer */}
        <p className="mt-16 text-sm text-slate-500">
          © {new Date().getFullYear()} Wanderlust. Explore the world without limits.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;