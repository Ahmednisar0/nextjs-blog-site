'use client'
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa'; // For the mobile menu icon
import Mission from './Ourmission';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleScrollToMission = () => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 md:py-6 text-white font-bold shadow-md">

        {/* Logo on the left */}
        <div className="flex items-center">
          <Image src="/images/nest heaven.png" alt="Save Birds Logo" className='w-28'  width={150} height={150} />
          <span className="md:ml-4 md:text-2xl text-xl mr-10 text-left jus text-yellow-200">Nest Heaven</span>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Navigation links for desktop */}
        <ul className="hidden md:flex mr-10 text-xl px-10 space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          </li>
          <li>
          <button onClick={handleScrollToMission} className="scroll-btn">
        <Link href="localhost:3000">Our Mission</Link>
      </button>  </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </li>
        </ul>

        {/* Sidebar / Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={toggleMenu}
        >
          <div className="flex justify-end p-5">
            <button onClick={toggleMenu} className="text-white">
              <FaTimes size={30} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 text-white text-xl">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/blog" className="hover:text-gray-300">Blog</Link>
            <Link href="#mission" className="hover:text-gray-300">Our Mission</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
