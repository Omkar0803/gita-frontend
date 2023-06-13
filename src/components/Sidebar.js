import React from "react";
import { LogoIcon, LogoOrangeIcon } from "../assets";
import {
  BugIcon,
  EditIcon,
  EventIcon,
  ExitIcon,
  HomeIcon,
  LeftArrow,
  PlaylistIcon,
  ProfileIcon,
  SadhanaIcon,
  VideoIcon,
} from "../assets/icons";

const Sidebar = () => {
  return (
    <div className="fixed  w-[300px] bg-[#1C1917] py-5 text-white h-[100vh]">
      <div className=" text-amber-600 font-semibold flex text-[1.4rem] justify-start items-center gap-3 ml-7">
        <LogoOrangeIcon className="h-7 w-7" />
        GitaQuest
      </div>
      <div className="h-10 px-7 text-right flex items-center justify-end">
        <LeftArrow className="h-5 w-5 cursor-pointer" />
      </div>
      <div>
        <h2 className="flex items-center gap-3 py-1 px-7 cursor-pointer text-[1.2rem]">
          Lectures
        </h2>
        <ul>
          <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
            <VideoIcon className="h-7 w-6" />
            Videos
          </li>
          <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
            <PlaylistIcon className="h-7 w-6" /> Playlist
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="flex items-center gap-3 py-1 px-7 cursor-pointer text-[1.2rem]">
          Feedback
        </h2>
        <ul>
          <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
            <EditIcon className="h-5 w-5 mr-1 " />
            Edit request
          </li>
          <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
            <BugIcon className="h-7 w-6" /> Report bugs
          </li>
        </ul>
      </div>
      <div className="h-[220px] mt-[2rem]">
        <img
          src={require("../assets/jagannath.png")}
          className="h-[100%]"
        ></img>
      </div>
      <div className="w-full px-7 my-5">
        <button className="flex justify-center w-[95%] items-center gap-3 py-2.5  bg-amber-600 rounded-lg hover:bg-amber-700">
          <ExitIcon className="h-7 w-7" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
