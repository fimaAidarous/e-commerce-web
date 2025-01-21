import React from "react";
import image2 from "../../assets/purple pattern.png";
import image1 from "../../assets/shopee.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${image2})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "1rem 0",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "Shop", link: "/#TopProducts" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "FAQs", link: "/#faqs" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3 mb-4">
              <img src={image1} alt="Shopsy Logo" className="w-12" />
              Shopsy
            </h1>
            <p className="text-gray-200">
              Your trusted destination for stylish, trendy, and quality fashion products. We deliver across the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title} className="hover:text-primary transition">
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-primary transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary transition">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>123 Fashion Avenue, New York, USA</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Shopsy. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
