import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>16, Adarsh Nagar Parola, Maharashtra, India</li>
            <li>teamtejaspatil@gmail.com</li>
            <li>+91 9890586596</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to="/">
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <a
                href="https://instagram.com/tejaspatil7903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <Link to="/">
                <span>
                  <FaYoutube />
                </span>
                <span>YouTube</span>
              </Link>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tejasvpatil7903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; 2024. All Rights Reserved By jobsindia
      </div>
    </>
  );
};

export default Footer;
