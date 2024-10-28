'use client'
import AppBar from '@mui/material/AppBar';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Mock delay for demonstration
  };

  return (
    <>
      <AppBar position="fixed" className="z-10">
        <Toolbar className="bg-gray-800">
          <div className="container mx-auto flex justify-between items-center">
            <Typography variant="h6" className="text-white font-bold">
              <Link href="/">MudassirBlog</Link>
            </Typography>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
            <div className={`hidden lg:flex space-x-6`}>
              <Link href="/" className="text-white hover:text-gray-400" onClick={handleLinkClick}>Home</Link>
              <Link href="/navigate/about" className="text-white hover:text-gray-400" 
              onClick={handleLinkClick}>About</Link>
              <Link href="/navigate/blog" className="text-white hover:text-gray-400" onClick={handleLinkClick}>Blog</Link>
              <Link href="/navigate/login" className="text-white hover:text-gray-400" onClick={handleLinkClick}>Login</Link>
              <Link href="/navigate/signup" className="text-white hover:text-gray-400" onClick={handleLinkClick}>Signup</Link>
            </div>
          </div>
        </Toolbar>
        {loading && (
          <div className="w-full h-1 bg-gray-700 animate-horizontal-line"></div>
        )}
      </AppBar>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex 
        flex-col justify-center items-center lg:hidden z-20">
          <Link href="/" className="text-white text-2xl mb-4 hover:text-gray-400" 
          onClick={() => { toggleMenu(); handleLinkClick(); }}>Home</Link>
          <Link href="/navigate/about" className="text-white text-2xl mb-4 hover:text-gray-400" 
          onClick={() => { toggleMenu(); handleLinkClick(); }}>About</Link>
          <Link href="/navigate/blog" className="text-white text-2xl mb-4 hover:text-gray-400" 
          onClick={() => { toggleMenu(); handleLinkClick(); }}>Blog</Link>
          <Link href="/navigate/login" className="text-white text-2xl mb-4 hover:text-gray-400" 
          onClick={() => { toggleMenu(); handleLinkClick(); }}>Login</Link>
          <Link href="/navigate/signup" className="text-white text-2xl mb-4 hover:text-gray-400" 
          onClick={() => { toggleMenu(); handleLinkClick(); }}>Signup</Link>
        </div>
      )}

      <style jsx>{`
        @keyframes horizontal-line {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-horizontal-line {
          animation: horizontal-line 1s infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
