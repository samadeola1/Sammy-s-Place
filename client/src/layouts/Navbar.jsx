import React from "react";
import navLogo from "../assets/nav-logo.svg";
import locationLogo from "../assets/location-logo.svg";
import Dropdown from "../utils/Dropdown";
import { Link } from "react-router-dom";
import cartLogo from "../assets/cart.svg";
import loginLogo from "../assets/profile-logo.svg";
import Modal from "../Auth/Authmodal"
import { useState,useContext } from "react";
import CartContext from "../Context/CartContext";


const Navbar = () => {
  const {cart} = useContext(CartContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(!false); 
  return (
    <>
      <header className=" bg-[#100101]">
        <nav className="contaier mx-auto  px-[20px] md:[80px] py-[10px] lg:px-[130px] lg:py-[16px] flex items-center justify-between">
          <div className="flex gap-5">
            <Link to={"/"}>
              <img className="h-[53.17px]" src={navLogo} alt="nav-logo" />
            </Link>

            <div className="flex gap-[10px]">
              <img
                className="h-[20px] w-[18px] mt-4"
                src={locationLogo}
                alt="location-logo"
              />
              <h4 className="h-[26px] mt-3 text-[20px] font-redHat hidden lg:block">
                Location
              </h4>
              <Dropdown />
            </div>
          </div>

          <div className="hidden lg:block">
            <form>
              <input
                type="text"
                placeholder="search"
                className="w-[300px] h-[56px] bg-[#F0F0F0] rounded-[32px] text-[#100101] ps-[30px] font-[400px] border outline-none text-[20px]"
              />
            </form>
          </div>

          <div className="flex gap-4 items-center">
            <ul className="flex gap-4">
              <li className="flex  gap-2 md:w-[142px] md:h-[56px] rounded-[32px] py-[15px] px-[20px] bg-[#B67B0F]">
                {" "}
                <img src={cartLogo} alt="cart-logo" />
                <Link to="cart" className="flex gap-1 items-center">
                  {" "}
                  <span className="hidden md:block">cart </span>
                  {cart.length}
                </Link>
              </li>
              {isLogin ? (
                <div className="dropdown dropdown-center">
                  <div tabIndex={0} role="button" className="m-1 py-3">
                    Hi Eggy's ⬇️
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Account</a>
                    </li>
                    <Link to="order">
                      <li>
                        <a>Order</a>
                      </li>
                    </Link>
                    <li>
                      <a>Menu</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <button
                  className="flex items-center bg-[#F0F0F0] text-[#100101] font-[500] text-[20px] rounded-[32px] px-4 py-2"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsSignUp(false); // Reset to Sign In when opening
                  }}
                >
                  <img
                    src={loginLogo}
                    alt="login-icon"
                    className="w-6 h-6 md:mr-2"
                  />
                  <span className="hidden md:inline cursor-pointer">Login</span>
                </button>
              )}
            </ul>
          </div>
        </nav>
      </header>
      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}
    </>
  );
};

export default Navbar;
