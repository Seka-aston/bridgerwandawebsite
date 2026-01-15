
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PROGRAMS } from '../constants';
import { GOOGLE_FORM_URL } from '../src/config/links';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Partnerships', path: '/partnerships' },
        { name: 'Resources', path: '/resources' },
      ]
    },
    { 
      name: 'Programs', 
      dropdown: [
        { name: 'Programs Overview', path: '/programs' },
        ...PROGRAMS.map(p => ({ name: p.title, path: `/programs/${p.id}` }))
      ]
    },
    { name: 'How to Apply', path: '/how-to-apply' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img className="h-12 w-auto" src="/bridge-logo.svg" alt="Bridge Logo" />
            </Link>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={`flex items-center text-text-main hover:text-primary transition-colors duration-200 font-medium ${activeDropdown === link.name ? 'text-primary' : ''}`}
                    >
                      {link.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2 text-sm text-text-main hover:bg-surface hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path!}
                    className={({ isActive }) =>
                      `text-text-main hover:text-primary transition-colors duration-200 font-medium ${isActive ? 'text-primary' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-sm"
            >
              Apply Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                {link.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-bold text-gray-400 uppercase tracking-wider">
                      {link.name}
                    </div>
                    {link.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block px-6 py-2 rounded-md text-base font-medium ${isActive ? 'bg-surface text-primary' : 'text-text-main hover:bg-gray-50'}`
                        }
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    to={link.path!}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-surface text-primary' : 'text-text-main hover:bg-gray-50'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-sm"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
