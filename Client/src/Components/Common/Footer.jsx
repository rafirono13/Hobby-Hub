import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCircleNodes,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content w-11/12 mx-auto rounded-t-2xl">
      <aside>
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaCircleNodes className="text-primary" />
          <span>HobbyHub</span>
        </Link>
        <p className="max-w-xs text-sm">
          Connecting hobbyists around the world. Create, join, and grow in
          communities that share your passion.
        </p>
      </aside>
      {/* Navigation links remain the same */}
      <nav>
        <h6 className="footer-title">Explore</h6>
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/groups" className="link link-hover">
          All Groups
        </Link>
        <Link to="/about" className="link link-hover">
          About Us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">User</h6>
        <Link to="/create-group" className="link link-hover">
          Create Group
        </Link>
        <Link to="/my-groups" className="link link-hover">
          My Groups
        </Link>
        <Link to="/support" className="link link-hover">
          Support
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Connect</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/md.rafi669"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl hover:text-blue-600 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/FMRaafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-sky-400 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/talktorafi_13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
