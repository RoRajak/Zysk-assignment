import { ArrowUpRight } from 'lucide-react';
import PropTypes from 'prop-types';

const BlogPost = ({ image, category, title, description, author, date }) => (
  <div className="flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <div className="text-sm font-medium text-purple-600 mb-2">{category}</div>
    <div className='flex items-center justify-between'>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <ArrowUpRight size={24} className="mb-1"/>
    </div>
    
    <p className="text-sm text-gray-500 mb-4">{description}</p>
    <div className="flex items-center mt-auto space-x-2">
      <img src={author.avatar} alt={author.name} className="size-10 rounded-full mr-2" />
      <div className="flex flex-col gap-y-0.5">
      <span className="text-sm font-bold">{author.name}</span>
      <span className="text-sm text-gray-600 font-normal ">{date}</span>

      </div>
      
    </div>
  </div>
);

BlogPost.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogPost