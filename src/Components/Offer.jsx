import React from "react";

const Offer = () => {
  return (
    <section className="w-full bg-white py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-8 md:p-14 text-center text-gray-300">
          {/* Headline */}
          <h2 className="text-3xl leading-tight md:text-4xl font-extrabold text-white">
            Your Win,
            <br className="md:hidden" />
            Our Win.
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg md:text-lg leading-relaxed max-w-3xl mx-auto">
            Get a{" "}
            <span className="text-green-500 font-bold">30-day free trial</span>{" "}
            to experience the power of our signals.
          </p>

          <p className="mt-3 text-base md:text-base text-gray-300 max-w-2xl mx-auto">
            Plus, a chance to win{" "}
            <span className="text-green-500 font-bold">
              6 months free access
            </span>
            .
          </p>

          {/* Explanation */}
          <p className="mt-6 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Why such magnanimity? It is simple. Our approach is straightforward.
          </p>

          {/* Divider */}
          <div className="mt-8 h-1 w-16 bg-green-500 mx-auto rounded-full"></div>

          {/* Philosophy */}
          <p className="mt-8 text-lg md:text-lg font-semibold text-gray-200 max-w-3xl mx-auto">
            Your success is our best advertisement.
          </p>

          <p className="mt-3 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            As you win, our reputation soars, and everyone benefits.
          </p>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="#signup"
              className="inline-flex items-center justify-center px-12 py-4 text-base font-semibold text-black bg-green-500 rounded-md hover:bg-green-400 transition"
            >
              Find Out If You Qualified
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
