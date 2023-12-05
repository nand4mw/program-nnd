import React from "react";
//images
import Logo from "../assets/profile.png";
const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* {logo} */}
          <a href="#">
            <img className="w-14 sm:hidden rounded-full" src={Logo} alt="" />

            <h1 className="h1 font-secondary font-bold lg:text-[60px] text-[20px] max-sm:hidden ">
              nnDev.
            </h1>
          </a>
          {/* {button} */}
          <button className="btn btn-sm ">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
