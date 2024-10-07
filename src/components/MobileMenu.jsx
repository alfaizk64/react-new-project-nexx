import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { link } from "../data/Link";
const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="mobile-menu block md:hidden">
        {!navOpen ? (
          <button onClick={() => setNavOpen(true)}>
            <AlignJustify />
          </button>
        ) : (
          <div>
            <button onClick={() => setNavOpen(false)}>
              <X />
            </button>
            <div className="absolute left-0 w-full top-20 bg-white/60 backdrop-blur-lg border-b border-t transition-all duration-200 ">
              <ul className="flex flex-col items-center py-4">
                {link.map((link, index) => {
                  return (
                    <li key={index}>
                      <a href="#" className=" block text-gray-600 p-4">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
