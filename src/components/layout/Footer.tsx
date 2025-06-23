
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-semibold">Flexperts</span>
            </div>
            <p className="text-neutral-300 mb-4 max-w-md">
              Turn your vision into reality with AI-powered tools, expert development, and collaborative partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link to="/you-build" className="hover:text-primary-500 transition-colors">
                  You Build
                </Link>
              </li>
              <li>
                <Link to="/we-build" className="hover:text-primary-500 transition-colors">
                  We Build
                </Link>
              </li>
              <li>
                <Link to="/build-together" className="hover:text-primary-500 transition-colors">
                  Build Together
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <Link to="/about" className="hover:text-primary-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; 2024 Flexperts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
