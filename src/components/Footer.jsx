import FooterColumn from "./helper/FooterColumn";
import Logo from "../assets/Logomark.svg"

const Footer = () => {
    const footerData = [
      {
        title: "Product",
        items: [
          { text: "Overview" },
          { text: "Features" },
          { text: "Solutions", isNew: true },
          { text: "Tutorials" },
          { text: "Pricing" },
          { text: "Releases" },
        ],
      },
      {
        title: "Company",
        items: [
          { text: "About us" },
          { text: "Careers" },
          { text: "Press" },
          { text: "News" },
          { text: "Media kit" },
          { text: "Contact" },
        ],
      },
      {
        title: "Resources",
        items: [
          { text: "Blog" },
          { text: "Newsletter" },
          { text: "Events" },
          { text: "Help centre" },
          { text: "Tutorials" },
          { text: "Support" },
        ],
      },
      {
        title: "Use cases",
        items: [
          { text: "Startups" },
          { text: "Enterprise" },
          { text: "Government" },
          { text: "SaaS centre" },
          { text: "Marketplaces" },
          { text: "Ecommerce" },
        ],
      },
      {
        title: "Social",
        items: [
          { text: "Twitter" },
          { text: "LinkedIn" },
          { text: "Facebook" },
          { text: "GitHub" },
          { text: "AngelList" },
          { text: "Dribbble" },
        ],
      },
      {
        title: "Legal",
        items: [
          { text: "Terms" },
          { text: "Privacy" },
          { text: "Cookies" },
          { text: "Licenses" },
          { text: "Settings" },
          { text: "Contact" },
        ],
      },
    ];
  
    return (
      <footer className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerData.map((column, index) => (
              <FooterColumn key={index} title={column.title} items={column.items} />
            ))}
          </div>
  
         
  
          {/* Footer bottom */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
              <div className="flex items-center">
                <img src={Logo} alt="Untitled UI logo" className="h-8 w-8 mr-3" />
                <span className="text-gray-900 font-semibold">Untitled UI</span>
              </div>
              <p className="text-gray-500 text-sm">© 2077 Untitled UI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;