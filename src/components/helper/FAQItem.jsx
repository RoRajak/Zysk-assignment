import  { useState } from 'react';
import PropTypes from "prop-types";

import minus from  '../../assets/minus.svg';
import plus from  '../../assets/plus.svg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium text-gray-900">{question}</span>
        <div className={`transition duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
        </div>
      </button>
      {isOpen && (
        <p className="mt-2 text-base font-normal text-gray-500">{answer}</p>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default FAQItem;