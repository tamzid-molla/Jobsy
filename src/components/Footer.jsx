import React from "react";
import { Link } from "react-router";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <span className=" rounded-full"><img src={logo} alt="" className="rounded-full w-12 h-12 p-1 bg-primary"/></span>
                </div>
              </Link>
              <h2 className="text-2xl font-semibold">
                J0B <span className="text-primary">S</span>
                <span className="text-primary">Y</span>
              </h2>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting talent with opportunity. Your dream job is just a click away.
            </p>
          </div>

          
          <div>
            <h3 className="text-lg cached font-semibold mb-4 border-b-2 border-primary w-fit pb-1">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                                  FAQ
                </Link>
                </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary w-fit pb-1">
              Resources
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/blogs" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                  Career Guides
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/commingsoon" className="hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-primary w-fit pb-1">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                Email: <a href="mailto:support@jobsy.com" className="hover:text-primary">support@jobsy.com</a>
              </p>
              <p className="text-gray-300 text-sm">
                Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
              </p>
              <div className="flex gap-4">
                <Link
                  to="https://facebook.com"
                  target="blank"
                  className="p-2 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaFacebookF size={16} />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="p-2 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaTwitter size={16} />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="p-2 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="p-2 bg-primary rounded-full hover:bg-primary-dark transition-colors"
                >
                  <FaInstagram size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

     
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} J0BSY. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/commingsoon" className="text-gray-400 hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;