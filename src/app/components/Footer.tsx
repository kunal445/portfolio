import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Social Links */}
        <div className="mb-6 flex justify-center space-x-6">
          <Link
            href="https://www.linkedin.com/in/kunal-joshi1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300" />
          </Link>
          <Link
            href="https://github.com/kunal445"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-400 transition duration-300" />
          </Link>
          <Link
            href="https://twitter.com/kunalj12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-blue-400 transition duration-300" />
          </Link>
        </div>

        {/* Copyright and Links */}
        <div className="text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kunal Joshi. All Rights Reserved.
          </p>
          <p>
            Built with <span className="text-red-600">&hearts;</span> using
            Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Back to Top Link */}
        <div className="mt-6">
          <Link
            href="#hero"
            className="inline-block px-6 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
