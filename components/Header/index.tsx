"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../assets/images/signage-logo-crop.svg";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setNavigationOpen(false);
  }, [pathUrl]);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!navigationOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavigationOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [navigationOpen]);

  const isActive = (path?: string) => pathUrl === path;

  return (
    <header
      id="site-header"
      className={`fixed left-0 top-0 z-99999 w-full border-b border-stroke transition-all duration-200 dark:border-strokedark ${
        stickyMenu
          ? "bg-white py-4 shadow-sm dark:bg-black"
          : "bg-white py-6 dark:bg-black"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="SignEdge" width={165} className="dark:hidden" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-10 font-semibold">
            {menuData.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.path || "#"}
                  className={`transition-colors duration-200 ${
                    isActive(menuItem.path)
                      ? "text-teal-500"
                      : "hover:text-teal-500"
                  }`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={navigationOpen}
          aria-controls="mobile-nav"
          onClick={() => setNavigationOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center xl:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-black transition-all duration-300 ease-in-out dark:bg-white ${
                navigationOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-black transition-all duration-200 ease-in-out dark:bg-white ${
                navigationOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full rounded-full bg-black transition-all duration-300 ease-in-out dark:bg-white ${
                navigationOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`fixed inset-0 z-40 xl:hidden ${
          navigationOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!navigationOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setNavigationOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            navigationOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <nav
          id="mobile-nav"
          className={`absolute right-0 top-0 flex h-full w-4/5 max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out dark:bg-blacksection ${
            navigationOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center border-b border-stroke px-6 py-5 dark:border-strokedark">
            <Image src={logo} alt="SignEdge" width={140} className="dark:hidden" />
          </div>

          <ul className="flex flex-col px-2 py-4 font-semibold">
            {menuData.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.path || "#"}
                  onClick={() => setNavigationOpen(false)}
                  className={`block rounded-md px-4 py-3 transition-colors duration-200 ${
                    isActive(menuItem.path)
                      ? "bg-teal-50 text-teal-500 dark:bg-white/5"
                      : "text-black hover:bg-gray-50 hover:text-teal-500 dark:text-white dark:hover:bg-white/5"
                  }`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
