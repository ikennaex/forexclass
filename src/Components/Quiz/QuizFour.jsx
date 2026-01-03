import React from "react";
import { Link } from "react-router";

const QuizFour = () => {
  return (
    <section className="w-full min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Progress */}
        <p className="text-center text-xs text-gray-500 mb-4">
          Question 4 of 4
        </p>

        {/* Card */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Are you prepared to start with a minimum{" "}
            <br className="hidden md:block" />
            $150 investment in your trading account?
          </h2>

          {/* Explanation */}
          <p className="mt-6 text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            You cannot make money from our signals without depositing into your
            own trading account.
            <br />
            It is your money and you can withdraw it at any time.
            <br />
            You have full and exclusive control over your trading account.
          </p>

          {/* Options */}
          <div className="mt-10 space-y-4">
            <Link to={"/quiz/congratulations"} replace>
              <button className="w-full py-4 rounded-xl bg-green-500 text-black text-base font-bold hover:bg-green-400 transition">
                Yes
              </button>
            </Link>

            <Link to={"/quiz/notqualified"}>
              <button className="w-full py-4 rounded-xl bg-[#111827] border border-gray-700 text-white text-base font-bold hover:border-green-500 transition">
                No
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizFour;
