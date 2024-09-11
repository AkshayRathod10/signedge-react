import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#FAFAFA]">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo Section */}
                <div className="w-36">
                    <a href="/">
                        <img src={`${import.meta.env.BASE_URL}assets/img/logo.png`} alt="Logo" className='' />
                    </a>
                </div>

                {/* Navigation Section (hidden on mobile) */}
                <nav className="hidden md:flex space-x-5 ml-auto text-[18px]">
                    <a href="/" className="font-bold text-[#ed1890] text-[22px]">{<FaHome/>}</a>
                    <a href="/products" className="font-bold text-[#99ca3c]">Products</a>
                    <a href="/services" className="font-bold text-[#71d0da]">Services</a>
                    <a href="/about-us" className="font-bold text-[#fecd08]">About Us</a>
                    <a href="/contact-us" className="font-bold text-[#f2663a]">Reach Us</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (slide from top) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-900 text-white absolute top-0 left-0 w-full py-4 z-50">
                    <div className="flex justify-end items-center px-6">
                        {/* Close Button on the Right */}
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col items-center space-y-4 mt-4">
                        <a href="/" className="text-[]" onClick={toggleMobileMenu}>Home</a>
                        <a href="/products" className="text-[]" onClick={toggleMobileMenu}>Products</a>
                        <a href="/services" className="text-[]" onClick={toggleMobileMenu}>Services</a>
                        <a href="/about-us" className="text-[]" onClick={toggleMobileMenu}>About Us</a>
                        <a href="/contact-us" className="text-[]" onClick={toggleMobileMenu}>Reach Us</a>

                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
