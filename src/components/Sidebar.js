import {
  BugIcon,
  EditIcon,
  LeftArrow,
  LogoIcon,
  PlaylistIcon,
  VideoIcon,
  LogoutIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import JagannathIcon from "@/assets/jagannath.png";

const Sidebar = () => {
  return (
    <div className="fixed  w-[300px] bg-[#1C1917] py-5 text-white h-[100vh]">
      <Link href="/">
        <div className=" text-amber-600 font-semibold flex text-[1.4rem] justify-start items-center gap-3 ml-7">
          <LogoIcon />
          GitaQuest
        </div>
      </Link>
      <div className="h-10 px-7 text-right flex items-center justify-end">
        <LeftArrow className="cursor-pointer" />
      </div>
      <div>
        <h2 className="flex items-center gap-3 py-1 px-7 cursor-pointer text-[1.2rem]">
          Lectures
        </h2>
        <ul>
          <Link href="/videos">
            <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
              <VideoIcon />
              Videos
            </li>
          </Link>
          <Link href="/playlists">
            <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
              <PlaylistIcon /> Playlist
            </li>
          </Link>
        </ul>
      </div>
      <div className="mt-5">
        <h2 className="flex items-center gap-3 py-1 px-7 cursor-pointer text-[1.2rem]">
          Feedback
        </h2>
        <ul>
          <Link href="/edit">
            <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
              <EditIcon />
              Edit request
            </li>
          </Link>
          <Link href="/report-bug">
            <li className="flex items-center gap-3 py-2 px-8 cursor-pointer">
              <BugIcon />
              Report bugs
            </li>
          </Link>
        </ul>
      </div>
      <div className="h-[220px] mt-[2rem]">
        <Image src={JagannathIcon} alt="Picture of the author" />
      </div>
      <div className="w-full px-7 my-5">
        <button className="flex justify-center w-[95%] items-center gap-3 py-2.5  bg-amber-600 rounded-lg hover:bg-amber-700">
          <LogoutIcon />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
