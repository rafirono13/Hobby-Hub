import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content w-11/12 mx-auto rounded-t-2xl">
      <div>
        <span className="footer-title">HobbyHub</span>
        <p className="max-w-xs text-sm">
          Connecting hobbyists around the world. Create, join, and grow in
          communities that share your passion.
        </p>
      </div>
      <div>
        <span className="footer-title">Links</span>
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/groups">
          All Groups
        </a>
        <a className="link link-hover" href="/create-group">
          Create Group
        </a>
        <a className="link link-hover" href="/my-groups">
          My Groups
        </a>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">support@hobbyhub.com</a>
        <a className="link link-hover">+880 123 456 7890</a>
        <div className="grid grid-flow-col gap-4 mt-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-xl hover:text-blue-600 cursor-pointer" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-xl hover:text-sky-400 cursor-pointer" />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-xl hover:text-red-600 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
