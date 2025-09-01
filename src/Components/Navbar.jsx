import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../assets/Logo-Transparent.png";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-gray-100 border-b border-gray-300 fixed">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Site Logo" className="h-10 mr-2" />

      </div>
      {/* Navigation */}
      <div className="flex items-center space-x-6">
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 text-sm font-normal transition-all duration-300 ease-in-out">
          <div className="flex gap-2"><Icon icon="hugeicons:call-02" className="h-5 w-5 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out" /> Contact Us</div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
