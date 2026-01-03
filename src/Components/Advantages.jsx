import React from "react";

const Advantages = () => {
  return (
    <section className="w-full bg-[#0B0F1A] py-24">
      <div className="max-w-6xl mx-auto px-4 text-gray-200">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Okay, I am interested.
            <br className="hidden md:block" />
            What makes your trade signals structured and reliable?
          </h2>

          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Nice question. Let me break it down for you.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">
            <h3 className="text-lg font-semibold text-white">
              8 Years of Market Mastery
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              We have spent 2,922 days (yes we counted) perfecting our craft in
              the forex trenches.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">
            <h3 className="text-lg font-semibold text-white">
              Proven Track Record
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              We have turned $1,000 into over $400k. Now, we are sharing our
              secret sauce.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] border border-gray-800 rounded-2xl p-8 hover:border-green-500 transition">
            <h3 className="text-lg font-semibold text-white">
              Exclusive Community
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              We are not after big numbers. We are capping membership at 70
              dedicated individuals who are serious about financial freedom.
            </p>
          </div>
        </div>

        {/* Bonus Box */}
        <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-10">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center">
            What You Get When You Qualify
          </h3>

          <ul className="mt-8 space-y-5 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>
                Chance to Access Our Forex Mastery Course for Free
                <span className="text-green-500">
                  {" "}
                  (Valued at $250): Level up your trading game.
                </span>
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>
                Chance to Win 6 Months Additional FREE Access
                <span className="text-green-500">
                  {" "}
                  Extended learning and earning opportunity.
                </span>
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span>
                Exclusive Support Community
                <span className="text-green-500">
                  {" "}
                  Learning from experts and fellow successful traders.
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#signup"
            className="inline-flex items-center justify-center px-12 py-4 text-base font-semibold text-black bg-green-500 rounded-md hover:bg-green-400 transition"
          >
            Find Out If You Qualified
          </a>

          <p className="mt-4 text-xs text-gray-500">
            Limited access. Membership capped at 70 traders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
