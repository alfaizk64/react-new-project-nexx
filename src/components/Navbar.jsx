import React, { useState } from "react";
import { link } from "../Link";
import { useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });
  const defaultClasses = "transition-all absolute inset-0 -z-1 ";
  const navBarClasses = scrolled
    ? `${defaultClasses} border-b border-black/10 bg-white/75
       backdrop-blur-lg`
    : `${defaultClasses} bg-transparent`;
  return (
    <>
      <div className="sticky inset-x-0 top-0 w-full z-30 ">
        <div className={navBarClasses}></div>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
          <div className="flex  items-center justify-between">
            <div>
              <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
            </div>
            <nav className="md:block hidden">
              <ul className="flex flex-row gap-4 p-4">
                {link.map((link, index) => {
                  return (
                    <li key={index}>
                      <a className="text-gray-600">{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="md:flex gap-2 hidden">
              <a className="bg-black px-2 py-[2px] rounded-md text-white cursor-pointer">
                Login
              </a>
              <a className="bg-black px-2 py-[2px] rounded-md text-white cursor-pointer">
                Sing Up
              </a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
