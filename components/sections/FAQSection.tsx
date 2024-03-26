"use client"

import { useState } from "react";
import { FAQData } from "../../constants/faqdata";
export default function FAQSection() {
  const [isOpen, setIsOpen] = useState(new Array(FAQData.length).fill(false));

  const toggleFAQ = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div className="w-5/6 md:w-full max-w-screen-xs lg:max-w-screen-md xl:max-w-screen-lg mt-5 space-y-5 md:px-7">
      {FAQData.map((FAQ, index) => {
        return (
          <div key={index} className="w-full border-b-2 border-gray-500 pb-6">
        <button
          className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90 text-left"
          onClick={() => toggleFAQ(index)}
        >
          Q: {FAQ.question}
        </button>
        {isOpen[index] && (
          <div className="mt-3 text-white font-SpaceGrotesk font-light opacity-70">
            <p dangerouslySetInnerHTML={{ __html: FAQ.answer.replace(/<a/g, '<a style="color: #00ADEE;"'), }} />
          </div>
        )}
      </div>
        );
      })}
    </div>
  );
}
