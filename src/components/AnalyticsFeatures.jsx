import message from "../assets/message.svg";
import deliver from "../assets/deliver.svg";
import report from "../assets/report.svg";
import connect from "../assets/connect.svg";
import tool from "../assets/tool.svg";
import people from "../assets/people.svg";
import FeatureItem from "./helper/FeatureItem";

const AnalyticsFeatures = () => {
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
    },
    {
      icon: <img src={connect} alt="" />,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: <img src={tool} alt="" />,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: <img src={people} alt="" />,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <div className="font-sans max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-20">
        <p className="text-purple-600 font-semibold mb-4">Features</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Analytics that feels like it&apos;s from the future
        </h2>
        <p className="text-gray-600 max-w-2xl text-lg font-normal md:mx-auto">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default AnalyticsFeatures;
