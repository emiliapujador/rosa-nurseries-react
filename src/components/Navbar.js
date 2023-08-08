import "./Navbar.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenu] = useState(false);

  const toggle = () => {
    setMenu(!menuOpen);
  };

  return (
    <nav className="p-[30px] md:p-[30px] lg:px-[100px] lg:py-[50px]">
      <div className="flex justify-center">
        <Link to="/">
          <img
            id="logo-rosa"
            className="h-[70px] w-auto lg:hidden  block md:h-[150px] md:mb-[30px]"
            src="/Images/Logo/Group 1.png"
            alt="Rosa Nurseries"
          />
        </Link>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-row justify-between items-center">
          <img
            className="h-[40px] w-[40px]"
            onClick={toggle}
            src="/Images/icon-menu.png"
            alt="menu png"
          ></img>

          <div className="flex flex-row">
            <Link to="/sign-in">
              <img
                className="h-[15px] mr-[10px]"
                src="/Images/sing-in-icon.png"
                alt="Sign in icon"
              />
            </Link>
            <Link to="/basket">
              <img
                className="h-[20px]"
                src="/Images/shop.png"
                alt="Shop icon"
              />
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="">
            <p className="flex justify-center flex-6 items-center text-[#243b30] font-medium	font-serif text-[16px] m-0 active:text-[#589578]">
              <Link className="" to="/about-us">
                About us
              </Link>
            </p>

            <p className="flex justify-center flex-6 items-center text-[#243b30] active:text-[#589578] font-medium	font-serif text-[16px] m-0">
              <Link to="/indoor-plants">Indoor plants</Link>
            </p>

            <p className="flex justify-center flex-6 items-center text-[#243b30] font-medium	font-serif text-[16px] m-0 active:text-[#589578]">
              <Link to="/outdoor-plants">Outdoor plants</Link>
            </p>

            <p className="flex justify-center flex-6 items-center text-[#243b30] active:text-[#589578] font-medium	font-serif text-[16px] m-0">
              <Link className="" to="/#opening-hours">
                Opening hours
              </Link>
            </p>
            <p className="flex justify-center flex-6 items-center text-[#243b30] active:text-[#589578] font-medium	font-serif text-[16px] m-0">
              <a
                className="flex justify-center flex-6 items-center text-[#243b30] active:text-[#589578] font-medium	font-serif text-[16px] m-0"
                href="/#contact-us"
              >
                Contact
              </a>
            </p>
          </div>
        )}
      </div>
      {/* desktop */}

      <div className="lg:flex lg:flex-row md:justify-between md:items-center">
        <Link to="/">
          <img
            id="logo-rosa"
            className="hidden lg:block lg:h-auto lg:max-w-[300px] md:pb-[30px]  md:hidden"
            src="/Images/Logo/Group 1.png"
            alt="Rosa Nurseries"
          />
        </Link>
        <div className="hidden md:flex lg:flex h-auto md:flex-row lg:flex-row md:justify-center lg:justify-end lg:gap-[30px] md:self-center md:gap-[20px] md:items-center lg:items-center">
          <p className="md:text-[20px] lg:text-[23px] md:text-[#243b30] md:font-serif md:active:text-[#589578] ">
            <Link className="" to="/about-us">
              About us
            </Link>
          </p>
          <NavDropdown
            className="lg:text-[23px] md:text-[20px] md:text-[#243b30] md:font-serif md:active:text-[#589578]"
            title="Shop online"
            id="nav-dropdown"
          >
            <NavDropdown.Item eventKey="4.1">
              <Link to="/indoor-plants">Indoor plants</Link>
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="4.2">
              <Link to="/outdoor-plants">Outdoor plants</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <p className="md:text-[20px] lg:text-[23px] md:text-[#243b30] md:font-serif md:active:text-[#589578]">
            <a className="" href="/#opening-hours">
              {" "}
              Opening hours
            </a>
          </p>
          <p className="md:text-[20px] lg:text-[23px] md:text-[#243b30] md:font-serif md:active:text-[#589578]">
            <a className="" href="/#contact-us">
              {" "}
              Contact us
            </a>
          </p>

          <Link to="/sign-in">
            <img
              className="md:h-[20px] md:w-auto"
              src="/Images/sing-in-icon.png"
              alt="Sign in icon"
            />
          </Link>
          <Link to="/basket">
            <img
              className="md:h-[25px]  md:w-auto"
              src="/Images/shop.png"
              alt="Shop icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
