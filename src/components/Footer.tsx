import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
          <p className="text-sm">
            We are a company committed to providing the best travel experiences, offering a wide range of services for our customers to explore the world with ease and comfort.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-sm">Email: mudassirdeveloper@gmail.com</p>
          <p className="text-sm">Phone: +92 3317368549</p>

          {/* Social Media Links */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="hover:text-white">Facebook</Link>
              <Link href="#" className="hover:text-white">Twitter</Link>
              <Link href="#" className="hover:text-white">Instagram</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
