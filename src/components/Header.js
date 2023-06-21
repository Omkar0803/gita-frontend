import { Profile } from "@/assets/icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#1C1917] h-16 w-[81.5%] fixed text-white flex justify-between items-center px-10">
      <div className="text-[1.2rem] font-semibold">DASHBOARD</div>
      <div>
        <div className="flex justify-center items-center gap-2">
          <Link href="/upload">
            <button className="border-2 border-white rounded-md py-1.5 w-24 mr-3 text-[1rem] font-medium">
              Upload
            </button>
          </Link>
          <Profile />
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
