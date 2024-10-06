import PropTypes from 'prop-types';

const Companies = ({ src, title }) => {
  return (
    <div className='inline-flex space-x-2 items-center'>
      <img src={src} alt="" className='size-7' />
      <p className='text-lg font-semibold'>{title}</p>
    </div>
  );
};

Companies.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Companies;