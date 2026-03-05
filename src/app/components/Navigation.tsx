import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { WalletButton } from './WalletButton';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/utilities', label: 'Utilities' },
    { path: '/token', label: '$YUMI' },
    { path: '/launchpad', label: 'Launchpad' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img 
                src="https://i.imgur.com/UAJZj6L.png" 
                alt="YUMI AI Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              YUMI AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative transition-colors ${
                  isActive(item.path)
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-purple-300'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Wallet Button */}
          <div className="hidden md:block">
            <WalletButton />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-purple-500/20 bg-black/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'text-gray-300 hover:bg-purple-500/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <WalletButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}