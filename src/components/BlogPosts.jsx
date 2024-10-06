import BlogPost from "./helper/BlogPost";
import phenoix from "../assets/phenoix.svg";
import lana from "../assets/Lana.svg";
import profile from "../assets/profile.svg";
import software from "../assets/software.png";
import design from "../assets/design.png";
import product from "../assets/product.png";

const BlogPosts = () => {
  const posts = [
    {
      image: design,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: { name: "Olivia Rhye", avatar: profile },
      date: "20 Jan 2024",
    },
    {
      image: product,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: { name: "Phoenix Baker", avatar: phenoix },
      date: "19 Jan 2024",
    },
    {
      image: software,
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: { name: "Lana Steiner", avatar: lana },
      date: "18 Jan 2024",
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="text-sm font-medium text-purple-600 mb-2">
              Our blog
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Latest blog posts
            </h2>
            <p className="text-lg text-gray-500 mt- font-normal">
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <button className="hidden sm:block px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-500">
            View all posts
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>

        <button className="sm:hidden w-full mt-8 px-4 py-3 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-500">
          View all posts
        </button>
      </div>
      <div className="mt-16 bg-[#F9FAFB] text-center py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Start your free trial
        </h3>
        <p className="text-lg text-gray-500 mb-6 px-10">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col md:flex-row-reverse gap-4 mx-4 md:justify-center md:items-center">
          <button className="px-2 md:px-6 py-2.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-500">
            Get started
          </button>
          <button className="px-2 py-2.5 md:px-6  bg-white border border-gray-600 rounded-md text-sm font-medium hover:bg-purple-50 shadow">
            Learn more
          </button>
        </div> 
      </div>
    </>
  );
};

export default BlogPosts;
