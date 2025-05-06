import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white z-50 relative"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-4 bg-white rounded-md shadow-lg w-48 py-4 z-40">
          <ul className="flex flex-col gap-2 text-gray-800 px-4">
            <li>
              <a href="#home" className="block py-2 hover:text-orange-500">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 hover:text-orange-500">
                Tentang
              </a>
            </li>
            <li>
              <a href="#services" className="block py-2 hover:text-orange-500">
                Layanan
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 hover:text-orange-500">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
