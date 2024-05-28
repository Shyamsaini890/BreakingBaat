import React from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { LuArrowRightCircle } from "react-icons/lu";

const Menu = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3 text-lg px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-3">
          <label htmlFor="Search">Search</label>
          <div className="border border-gray-500 flex p-3 justify-around items-center gap-2 w-full md:w-96 mx-auto rounded-lg">
            <div className="flex justify-center items-center gap-3 w-full">
              <RiSearch2Line />
              <input
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Search Headlines, News..."
              />
            </div>
            <LuArrowRightCircle className="text-xl" />
          </div>
        </div>
        {/* <div className="flex justify-end w-full p-5 text-2xl">
          <IoClose />
        </div> */}
        <div className="">
          <div className="flex w-full mb-10 mt-3">
            <Link to={"/general"} onClick={props.handleMenu}>Home</Link>
          </div>
          <label htmlFor="Category">Category</label>
          <div className="w-full md:w-96 border-t border-gray-600 mb-5 mt-3 "></div>
          <div className="flex flex-col gap-5">
            <Link to={"/business"} onClick={props.handleMenu}>
              Business
            </Link>
            <Link to={"/entertainment"} onClick={props.handleMenu}>
              Entertainment
            </Link>
            <Link to={"/general"} onClick={props.handleMenu}>
              General
            </Link>
            <Link to={"/health"} onClick={props.handleMenu}>
              Health
            </Link>
            <Link to={"/science"} onClick={props.handleMenu}>
              Science
            </Link>
            <Link to={"/sports"} onClick={props.handleMenu}>
              Sports
            </Link>
            <Link to={"/technology"} onClick={props.handleMenu}>
              Technology
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
