import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 transition-default" />
              <FaTwitter className="w-5 h-5 transition-default" />
              <FaLinkedinIn className="w-5 h-5 transition-default" />
              <FaInstagram className="w-5 h-5 transition-default" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block  transition-default">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block transition-default">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block transition-default">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block transition-default">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block transition-default">
                FAQ
              </Link>
              <Link to="/" className="text-sm block transition-default">
                About Us
              </Link>
              <Link to="/" className="text-sm block transition-default">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;