import React from "react";
import FadeIn from './fadein';

const Testimonial = () => {
  return (
    <section className="w-full bg-[#0B0F1A] py-24">
        <FadeIn duration = {100} >
      <div className="max-w-6xl mx-auto px-4 text-gray-300">
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-10 md:p-14">
          <p className="text-sm uppercase tracking-wider text-green-500 font-semibold text-center">
            Real Results
          </p>

          <blockquote className="mt-6 text-lg md:text-xl leading-relaxed text-center text-gray-100">
            “I was skeptical at first, having been involved in forex before. But
            I decided to give it a trial having seen the reviews. After 30 days
            of following the Forex Signal Master Club, my initial deposit
            doubled. Ever since it has been profitable beyond my imagination.”
          </blockquote>

          <p className="mt-6 text-green-500 text-base md:text-lg font-semibold text-white">
            Daily Testimonies From Our Members
          </p>
        </div>

        {/* Reality Check */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            We are not going to sugar-coat it.
          </h3>

          <p className="mt-4 text-sm md:text-base text-gray-400">
            This is not for everyone. We are seeking motivated individuals ready
            to take charge of their financial future.
          </p>
        </div>

        {/* Scarcity */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#111827] border border-red-500/30 rounded-2xl p-8 text-center">
          <p className="text-base md:text-lg font-semibold text-white">
            The clock is ticking.
          </p>

          <p className="mt-2 text-sm md:text-base text-xl text-red-400 font-medium">
            Only <span className="font-bold">7 spots</span> remain. Once they
            are gone, they are gone for good.
          </p>
        </div>

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
      </FadeIn>
    </section>
  );
};

export default Testimonial;
