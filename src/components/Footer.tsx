import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="w-full py-4 bg-gray-800 text-white flex flex-col items-center">
      <div className="mb-4 text-center">
        <p>© 2024 My Portfolio</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://github.com/elijahmanda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} className="hover:text-gray-400" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} className="hover:text-gray-400" />
        </a>
        <a href="https://twitter.com/elijahmandajc" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} className="hover:text-gray-400" />
        </a>
        <a href="https://instagram.com/elijahmanda.jc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={24} className="hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

