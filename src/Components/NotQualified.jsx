import React from "react";

const NotQualified = () => {
  return (
    <section className="w-full min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-10 md:p-14">
          
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-500">
            You Don't Meet The Qualification At This Time
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
            We appreciate your interest in the Forex Signal Master Club.
          </p>

          <p className="mt-4 text-gray-400 text-base md:text-lg">
            While you don't meet all the qualifications at this time, your forex journey is far from over.
          </p>

          {/* Subheadline */}
          <h2 className="mt-8 text-lg md:text-xl font-semibold text-white">
            Join Our Exclusive Waiting List:
          </h2>

          {/* Benefits list */}
          <ul className="mt-4 text-left md:text-left text-gray-300 text-sm md:text-base space-y-3 pl-6">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✔</span>
              Be first in line when new spots open
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✔</span>
              Receive exclusive forex tips and insights
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✔</span>
              Get notified about special events and webinars
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✔</span>
              Have the chance to improve your skills and qualify sooner
            </li>
          </ul>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />

            <button
              type="submit"
              className="w-full py-4 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 transition mt-2"
            >
              Join The Waiting List
            </button>
          </form>

          {/* Trust note */}
          <p className="mt-4 text-xs text-gray-500">
            Your information is safe. No spam, 100% private.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotQualified;
