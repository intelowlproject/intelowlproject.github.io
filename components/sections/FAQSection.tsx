import { FAQData } from "../../constants/faqdata";
export default function FAQSection() {
  return (
    <div className="w-5/6 md:w-full max-w-screen-xs lg:max-w-screen-md xl:max-w-screen-lg mt-5 space-y-5">
      {FAQData.map((FAQ, index) => {
        return (
          <button
            key={index}
            className="w-full border-b-2 border-gray-500 pb-6 text-left group focus:outline-none"
          >
            <div className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90">
              Q: {FAQ.question}
            </div>
            <div className="mt-3 hidden text-white group-focus:flex font-SpaceGrotesk font-light opacity-70">
              <p>{FAQ.answer}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
