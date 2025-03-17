import React from 'react'
import dropDown from "../assets/drop-down.svg";

const Dropdown = () => {
  return (
    <>
      <div className="dropdown dropdown-center md:dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <img className="w-5 mt-5 " src={dropDown} alt="drop-down" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-[#100101] rounded-box z-1 w-52 p-2 mt-5 shadow-sm"
        >
          <li>
            <a>Lagos</a>
          </li>
          <li>
            <a>Abuja</a>
          </li>
          <li>
            <a>Benin</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown