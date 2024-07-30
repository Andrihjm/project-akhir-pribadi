import { useState } from "react";
import "../styles/navigation.css";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { menuNavbar } from "../../data/menu-navbar";
import Logo from "../../assets/images/Logo.png";
import Separator from "../ui/separator";

const Navigation = () => {
  const [isOpenMenuNavbar, setIsOpenMenuNavbar] = useState(false);

  const handleOpenMenuNavbar = () => {
    setIsOpenMenuNavbar(!isOpenMenuNavbar);
  };

  return (
    <>
      <nav className="relative">
        <div>
          <div
            onClick={handleOpenMenuNavbar}
            className="mt-2 ml-2 text-3xl text-primary cursor-pointer md:hidden"
          >
            <LuMenu />
          </div>

          {/* ---------- Navigation Menu ---------- */}
          <div
            className={`absolute top-0 w-1/2 h-screen bg-darkPrimary gradient-primary transition-all duration-700 group ${
              isOpenMenuNavbar ? "left-0" : "-left-[100%]"
            } md:block md:w-14 md:left-0 md:hover:w-44`}
          >
            <div
              onClick={handleOpenMenuNavbar}
              className="absolute right-2 pt-3 text-xl text-primary cursor-pointer md:hidden"
            >
              <IoClose />
            </div>

            <div>
              <div className="flex items-center gap-2 py-4 pl-3">
                <div className="w-8 h-8">
                  <img
                    src={Logo}
                    alt="logo.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm md:text-[0px] md:group-hover:text-base transition-all duration-500">
                  Andri
                </span>
              </div>

              <Separator />

              <div className="w-full relative flex flex-col gap-2 pt-8">
                {menuNavbar.map((navItems) => (
                  <Link
                    key={navItems.id}
                    to={navItems.link}
                    className="flex items-center gap-2 py-2 pl-3 rounded-sm hover:text-primary hover:bg-darkSecondary transition-all duration-500"
                  >
                    <navItems.icon className="text-2xl" />
                    <span className="text-sm md:text-[0px] md:group-hover:text-base transition-all duration-500">
                      {navItems.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
