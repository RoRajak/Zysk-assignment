import PropTypes from "prop-types";
import { ArrowRight } from "lucide-react";

const FeatureItem = ({ icon, title, description, visiable }) => (
  <div className="mb-8 flex flex-col justify-center items-center md:mb-0">
    {icon}
    <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
    <p className="text-gray-600 text-base font-normal  text-center">
      {description}
    </p>
    {visiable && (
      <button className="inline-flex text-purple-600 font-semibold  text-base mt-4">
        Learn more <ArrowRight size={16} className="mt-1.5 ml-2" />
      </button>
    )}
  </div>
);

FeatureItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  visiable: PropTypes.string,
};

export default FeatureItem;
