import React from 'react'
import eggylogo from "../assets/nav-logo.svg"

const Footer = () => {
  return (
    <>
      <main className="bg-[#100101] lg:px-[130px]">
        <footer className="wrapper">
          {/* section-1 for footer */}
          <section className="flex justify-between h-[159px] items-center">
            {/* div for logo */}
            <div className="bg-[#B67B0F] py-[10px] px-[14px] rounded-[6px]">
              <img src={eggylogo} alt="" />
            </div>
            {/* div for About, Products, Support & Terms & Condition */}
            <div>
              <ul className="text-white block md:flex gap-[29px]">
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Terms & Condition</a>
                </li>
              </ul>
            </div>
            {/* div for social icons  */}
            <div className="flex mx-4 md:gap-[20px]">
              <a href="https://x.com/">
                <i class="bx bxl-twitter text-white"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i class="bx bxl-facebook text-white"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i class="bx bxl-instagram text-white"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i class="bx bxl-youtube text-white"></i>
              </a>
            </div>
          </section>
          {/* div between section */}
          <div className="border-b-[2px] border-white"></div>
          {/* section-2  for footer  */}
          <section className="flex justify-between text-[#FBFBFB] py-3">
            <h6 className="text-[14px] leading-[100%] font-[400]">
              TM & Copyright 2025 Eggy's Corporation. All Rights Reserved.
            </h6>
            <h6 className="text-[14px] leading-[100%] font-[400]">
              Privacy Policy
            </h6>
          </section>
        </footer>
      </main>
    </>
  );
}

export default Footer