import message from "../assets/message.svg";
import deliver from "../assets/deliver.svg";
import report from "../assets/report.svg";
import dashboardSM from "../assets/sm-iphone-12.svg"; 
import content from "../assets/content.svg"; 

import FeatureItem from "./helper/FeatureItem";

const AnalyticsFeatures2 = () => {
  const features = [
    {
      icon: <img src={message} alt="" />,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: <img src={deliver} alt="" />,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: <img src={report} alt="" />,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    }
  ];

  return (
    <div className="font-sans max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-20">
        <p className="text-purple-600 font-semibold mb-4 bg-purple-100 border border-purple-300 rounded-full w-20 mx-auto">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Cutting-edge features for advanced analytics
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg font-normal md:mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="relative flex justify-center items-center">
        <img src={dashboardSM} alt="mobile-dashboard" className="md:hidden  " />
        <img src={content} alt="mobile-dashboard" className="hidden md:block " />
        

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-4 md:mt-0">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} visiable="visiable" />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsFeatures2;
