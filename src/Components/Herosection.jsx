import React from "react";
import FadeIn from './fadein';

const Herosection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      <FadeIn duration = {100} >
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
          Start Earning From Forex Trading
          <br className="hidden md:block" />
          <span className="text-green-600"> Even as a Beginner</span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-gray-600 text-base md:text-lg max-w-2xl">
          Trade Forex with confidence using easy-to-follow signals, expert
          guidance, and a trusted system designed for both new and experienced
          traders.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#signup"
            className="px-8 py-3 text-white bg-green-600 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Find Out If You Qualified
          </a>
        </div>

        {/* Trust note */}
        <FadeIn duration = {400} >
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Trading Signal Prompts
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            No Forex Knowledge Required
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Beginner-Friendly Platform
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Expert Guidance & Education
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            We Have Got You Covered
          </li>
        </ul>
        </FadeIn>
      </div>
      </FadeIn>
    </section>
  );
};

export default Herosection;
