"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { SearchModal } from "./SearchModal";
import type { Product } from "@/types/api-response";

interface NavbarProps {
  products?: Product[];
}

export function Navbar({ products = [] }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["catalog", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [{ label: "Katalog", href: "#catalog" }];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative h-9 w-9">
              <Image
                src="logoziyad.png"
                alt="Ziyad Books"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-[#2E7D32]">
              Ziyad<span className="text-[#F57C00]">Books</span>
            </span>
          </Link>

          {/* Center Navigation Links - Desktop */}
          <div className="hidden gap-2 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-[#2E7D32] bg-[#2E7D32]/10"
                      : "text-gray-700 hover:text-[#2E7D32] hover:bg-[#2E7D32]/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex p-3 text-gray-700 hover:text-[#2E7D32] hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="relative p-3 text-gray-700 hover:text-[#2E7D32] hover:bg-gray-100 rounded-lg transition-all duration-300">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-700 hover:text-[#2E7D32] hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-gray-50 md:hidden py-4 px-2 animate-in fade-in duration-300">
            <div className="space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 text-left ${
                      isActive
                        ? "text-[#2E7D32] bg-white"
                        : "text-gray-700 hover:text-[#2E7D32] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Search Modal */}
        <SearchModal
          products={products}
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </nav>
  );
}
