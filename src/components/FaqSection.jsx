import FAQItem from "./helper/FAQItem";
import AvatarGroup from "../assets/Avatar-group.svg";

const FaqSection = () => {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time. Please contact our support team for assistance.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can add custom information to your invoices. Please contact our support team for help with this.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill on a monthly basis. You'll be charged at the beginning of each billing cycle.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in your profile settings. If you need assistance, please contact our support team.",
    },
  ];

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-3 text-center">
          Frequently asked questions
        </h2>
        <p className="text-lg text-gray-500 mb-6 text-center">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center m-4 md:mx-36">
        <img src={AvatarGroup} alt="" />
        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
          Still have questions?
        </h3>
        <p className="text-base text-gray-500 mb-4 text-center font-normal">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </p>
        <button className="bg-[#7F56D9] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
          Get in touch
        </button>
      </div>
    </>
  );
};

export default FaqSection;
