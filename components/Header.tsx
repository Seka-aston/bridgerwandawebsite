
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Auth listener
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-12 w-auto" src="/logo.png" alt="Bridge Logo" />
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-text-main hover:text-primary transition-colors duration-200 font-medium ${isActive ? 'text-primary' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="text-text-main hover:text-primary transition-colors duration-200 font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-text-main hover:text-primary transition-colors duration-200 font-medium"
              >
                Login
              </Link>
            )}
            <Link
              to="/apply"
              className="inline-block bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-sm"
            >
              Apply Now
            </Link>
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
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-surface text-primary' : 'text-text-main hover:bg-gray-100'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="p-3 space-y-3">
              {user ? (
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="w-full text-center block text-text-main font-medium py-2 hover:bg-gray-100 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block text-text-main font-medium py-2 hover:bg-gray-100 rounded-lg"
                >
                  Login
                </Link>
              )}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-300 shadow-sm"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
