"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Highlight the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] border border-[#33353F]">
      <div className="container flex items-center justify-between mx-auto px-4 py-2 lg:py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          Cindy Duong
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeSection === link.path.replace("#", "")}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden border border-slate-200 text-slate-200 hover:text-white hover:border-white p-2 rounded"
        >
          {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}

    </nav>
  );
};

export default Navbar;
