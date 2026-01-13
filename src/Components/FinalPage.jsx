import React from "react";

const FinalPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#0B0F1A] flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-3xl p-10 md:p-14">
          
          {/* Success Icon */}
          <div className="w-14 h-14 mx-auto rounded-full bg-green-500 flex items-center justify-center text-black text-2xl font-bold">
            ✓
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-2xl md:text-3xl font-extrabold text-white">
            Submission Successful
          </h1>

          {/* Message */}
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Thank you for completing the form.
          </p>
{/* 
          <p className="mt-3 text-gray-300 text-sm md:text-base">
            If you qualified, you will receive access to our exclusive Telegram
            group shortly. If you joined the waiting list, we will notify you
            as soon as new spots become available.
          </p> */}

          {/* Divider */}
          <div className="mt-8 h-px w-24 bg-gray-700 mx-auto"></div>

          {/* Next Steps */}
          <p className="mt-6 text-sm md:text-base text-gray-400">
            Please check your email and follow the instructions provided.
            Be sure to check your spam or promotions folder as well.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition"
            >
              Return to Homepage
            </a>
          </div>

          {/* Support Note */}
          {/* <p className="mt-4 text-xs text-gray-500">
            Need help? Our support team will reach out if required.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default FinalPage;
