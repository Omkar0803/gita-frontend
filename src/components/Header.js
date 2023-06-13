import React from "react";
import { PlusIcon, ProfileIcon } from "../assets/icons";

const Header = () => {
  return (
    <div className="bg-[#1C1917] h-16 w-[81.5%] fixed text-white flex justify-between items-center px-10">
      <div className="text-[1.2rem] font-semibold">DASHBOARD</div>
      <div>
        {/* <button className="flex justify-center w-[150px] items-center gap-2 py-2.5  bg-amber-600 rounded-lg hover:bg-amber-700">
          <PlusIcon className="w-4 h-4" /> Logout
        </button> */}
        <div className="flex justify-center items-center gap-2">
          <ProfileIcon className="w-10 h-10" />
          <div className="flex flex-col">
            <h2 className="my-0 leading-5">Name</h2>
            <p className="text-[0.8rem] text-gray-400">Loerm Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
