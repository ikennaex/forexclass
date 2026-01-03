import React from "react";
import { Link } from "react-router";

const QuizOne = () => {
  return (
    <section className="w-full min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Progress */}
        <p className="text-center text-xs text-gray-500 mb-4">
          Question 1 of 4
        </p>

        {/* Card */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
          
          {/* Question */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Do you own a smartphone with
            <br className="hidden md:block" />
            reliable internet access?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-sm md:text-base text-gray-400">
            This helps us determine if you are eligible to proceed.
          </p>

          {/* Options */}
          <div className="mt-10 space-y-4">
            <Link to={"/quiz/2"}>
            <button
              className="w-full py-4 rounded-xl bg-green-500 text-black text-base font-bold hover:bg-green-400 transition"
            >
              Yes
            </button>
            </Link>

            <Link to={"/quiz/notqualified"} replace>
            <button
              className="w-full py-4 rounded-xl bg-[#111827] border border-gray-700 text-white text-base font-bold hover:border-green-500 transition"
            >
              No
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizOne;
