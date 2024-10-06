import logomark from "../assets/Logomark.svg";
import playIcon from "../assets/play-circle.svg";
import dashboard from "../assets/big-screen.png";
import smDashboard from "../assets/small-screen.png";
import profile from "../assets/profile.svg";
import { Menu, ChevronDown ,ArrowRight } from "lucide-react";

const AnalyticsDashboard = () => {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-4">
            <img src={logomark} alt="" />
            <h1 className="text-lg font-bold md:text-xl">Untitled UI</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700">
              Home
            </a>
            <a href="#" className="text-gray-700">
              Products <ChevronDown size={16} className="inline" />
            </a>
            <a href="#" className="text-gray-700">
              Resources <ChevronDown size={16} className="inline" />
            </a>
            <a href="#" className="text-gray-700">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <Menu className="md:hidden mr-4" />
          <img src={profile} alt="" className="hidden md:block" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-6">
        <div className="text-center mb-8">
          <div className="border border-purple-400 text-purple-600 text-sm py-2 px-3 rounded-full inline-flex mb-4 items-center space-x-2">
            <div className="border py-1 px-2 rounded-full  border-purple-600">New feature</div>
            <div className="inline-flex items-center space-x-1"> <p>Check out the team dashboard</p> <ArrowRight size={17} className="mt-1 "/></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 px-6">
            Beautiful analytics to grow smarter
          </h2>
          <p className="text-gray-600 mb-6 px-8 md:px-[450px]">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-lg inline-flex gap-x-2">
              <img src={playIcon} alt="" /> <p>Demo</p>
            </button>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">
              Sign up
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <img
          src={smDashboard}
          alt=""
          className="mx-auto block md:hidden md:w-auto"
        />
        <img
          src={dashboard}
          alt=""
          className="mx-auto hidden md:block md:w-auto"
        />
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
