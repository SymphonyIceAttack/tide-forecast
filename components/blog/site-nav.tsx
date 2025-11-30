"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BlogThemeToggle } from "./blog-theme-toggle";

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-purple-500 dark:border-purple-400 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-black tracking-tight text-gray-900 dark:text-white uppercase hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <span className="hidden xs:inline">Tide </span>Forecast
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <Link
              href="/"
              className="px-3 md:px-4 py-2 rounded-lg text-sm md:text-base text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="px-3 md:px-4 py-2 rounded-lg text-sm md:text-base text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
            >
              Posts
            </Link>
            <BlogThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden items-center gap-2">
            <BlogThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-purple-300 dark:border-purple-700 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
            >
              Home
            </Link>
            <Link
              href="/posts"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-900 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all font-bold"
            >
              Posts
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
