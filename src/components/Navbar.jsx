import { useState } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from "./Icons";
import '../styles/navbar.css';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo Section */}
        <div className="navbar__logo">
          <div className="navbar__logo-box">
            <img src="/logo.png" alt="ProVital Logo" className="navbar__logo-icon" />
          </div>
          <h2 className="navbar__title">ProVital</h2>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__desktop">
          <ul className="navbar__menu">
            <li className="navbar__menu-item">List Your Practice</li>
            <li className="navbar__divider"></li>
            <li className="navbar__menu-item">For Employers</li>
            <li className="navbar__divider"></li>
            <li className="navbar__menu-item">Courses</li>
            <li className="navbar__divider"></li>
            <li className="navbar__menu-item">Books</li>
            <li className="navbar__divider"></li>
            <li className="navbar__menu-item">Speakers</li>
            <li className="navbar__divider"></li>
            <li className="navbar__menu-item">Doctors</li>
            <li className="navbar__divider"></li>
            <li className="navbar__dropdown">
              <span className="navbar__dropdown-text">
                Login / Sign Up <ChevronDown className="navbar__dropdown-icon" />
              </span>

              {/* Dropdown Menu */}
              <div className="navbar__dropdown-content">
                <div className="navbar__dropdown-inner">
                  <div className="navbar__dropdown-row">
                    <span className="navbar__dropdown-label">Doctor</span>
                    <div className="navbar__dropdown-buttons">
                      <span className="navbar__dropdown-link">Login</span>
                      <span className="navbar__dropdown-link">Sign Up</span>
                    </div>
                  </div>
                  <div className="navbar__dropdown-divider"></div>
                  <div className="navbar__dropdown-row">
                    <span className="navbar__dropdown-label">Patient</span>
                    <div className="navbar__dropdown-buttons">
                      <span className="navbar__dropdown-link">Login</span>
                      <span className="navbar__dropdown-link">Sign Up</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <span
          className="navbar__mobile-button"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </span>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={`navbar__mobile ${showMobileMenu ? 'active' : ''}`}>
          <div className="navbar__mobile-header">
            <div className="navbar__mobile-logo">
              <div className="navbar__mobile-logo-box">
                <img 
                  src="/logo.png" 
                  alt="ProVital Logo" 
                  className="navbar__mobile-logo-icon" 
                />
              </div>
              <h2 className="navbar__mobile-title">ProVital</h2>
            </div>
            <span
              className="navbar__mobile-close"
              onClick={() => setShowMobileMenu(false)}
            >
              <X className="w-6 h-6" />
            </span>
          </div>

        <div className="navbar__mobile-content">
          {/* Login/Signup Section */}
          <div className="navbar__mobile-auth">
            <div className="navbar__mobile-auth-inner">
              <div className="navbar__mobile-auth-row">
                <span className="navbar__mobile-auth-label">Doctor</span>
                <div className="navbar__mobile-auth-buttons">
                  <span className="navbar__mobile-auth-link">Login</span>
                  <span className="navbar__mobile-auth-link">Sign Up</span>
                </div>
              </div>
              <div className="navbar__mobile-auth-divider"></div>
              <div className="navbar__mobile-auth-row">
                <span className="navbar__mobile-auth-label">Patient</span>
                <div className="navbar__mobile-auth-buttons">
                  <span className="navbar__mobile-auth-link">Login</span>
                  <span className="navbar__mobile-auth-link">Sign Up</span>
                </div>
              </div>
            </div>
          </div>

            {/* Navigation Links */}
            <div className="navbar__mobile-nav">
              {[
                'Doctors',
                'List Your Practice',
                'For Employers',
                'Courses',
                'Books',
                'Speakers'
              ].map((item) => (
                <div key={item} className="navbar__mobile-nav-item">
                  <span>{item}</span>
                  <ArrowRight className="navbar__mobile-nav-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
