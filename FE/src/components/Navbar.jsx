import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { LiaUserSolid } from "react-icons/lia";
import { RiHeartLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import avatarImg from "../assets/avatar.png";
import { TbBook } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const navigation = [
  {
    name: "Dashboard",
    href: "/user-dashboard",
  },
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "Cart Page",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const { currentUser, logout } = useAuth();

  console.log(currentUser, "hey")

  const handleLogOut = () => {
    logout();
    console.log('Hey')
    toast.success("User logged out successfully!")
    navigate("/login");
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  },[])
  return (
    <header className="fixed left-0 right-0 z-40  px-4 py-6 border-b bg-[#FAFDFF]">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          {/* Book icon and title */}
          <a href="/" className="flex items-center">
            <TbBook className="text-3xl text-primary mr-2" />
            <h1 className="hidden md:block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 transition-shadow duration-300 font-[monospace]">
              Horizon
            </h1>
          </a>

          {/* Search input */}
          <div className="relative sm:w-72 w-40">
            <TbSearch className="absolute md:left-3 left-1 inset-y-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none border border-transparent focus:border-primary transition duration-300"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="pt-1"
                >
                  <img
                    src={avatarImg}
                    alt="userAvatar"
                    className="size-8 rounded-full ring-2 ring-primary transition-transform duration-300 hover:scale-105"
                  />
                </button>
                {/* Show dropdowns */}
                {isDropdownOpen && (
                  <div className="absolute right-0 md:right-14 mt-2 w-40 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2 border-2">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full px-4 py-2 text-sm hover:bg-gray-100 transition duration-200 text-left"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <LiaUserSolid className="size-7 text-gray-500 hover:text-primary transition duration-300" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <RiHeartLine className="size-6 text-gray-500 hover:text-primary transition duration-300" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-4 px-2 flex items-center rounded-sm transition duration-300"
          >
            <IoCartOutline className="size-6 text-white" />
            {cartItems.length > 0 ? (
              <span className="font-semibold text-white sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="font-semibold text-white sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
