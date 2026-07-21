import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050816]/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}

        <a href="#home" className="select-none">

          <h2 className="text-3xl font-black tracking-tight">

            <span className="gradient-text">
              SL
            </span>

          </h2>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="
                text-gray-300
                hover:text-cyan-400
                transition
                duration-300
                font-medium
              "
            >
              {item.name}
            </a>

          ))}

        </nav>

        {/* Resume Button */}

        <a
          href={personalInfo.resume}
          className="hidden lg:flex btn-primary"
        >
          Resume
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            lg:hidden
            bg-[#0b1120]
            border-t
            border-white/10
          "
        >

          <div className="container py-8 flex flex-col gap-6">

            {links.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                {item.name}
              </a>

            ))}

            <a
              href={personalInfo.resume}
              className="btn-primary w-fit"
            >
              Resume
            </a>

          </div>

        </motion.div>

      )}

    </motion.header>
  );
}