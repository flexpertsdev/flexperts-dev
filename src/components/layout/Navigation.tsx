
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/you-build", label: "You Build" },
    { href: "/we-build", label: "We Build" },
    { href: "/build-together", label: "Build Together" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">Flexperts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.href 
                    ? "text-primary-600" 
                    : "text-neutral-700"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-primary-500 hover:bg-primary-600 text-white"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary-600 py-2",
                    location.pathname === item.href 
                      ? "text-primary-600" 
                      : "text-neutral-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-primary-500 hover:bg-primary-600 text-white mt-4 w-full"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
