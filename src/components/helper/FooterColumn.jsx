import PropTypes from 'prop-types';

const FooterColumn = ({ title, items }) => (
  <div className="mb-8 sm:mb-0">
    <h3 className="font-semibold text-gray-900 text-sm mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href="#" className="font-semibold text-base hover:text-gray-900">
            {item.text}
            {item.isNew && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                New
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      isNew: PropTypes.bool,
    })
  ).isRequired,
};

export default FooterColumn;