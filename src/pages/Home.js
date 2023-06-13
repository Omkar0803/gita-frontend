import React from "react";
import { VideoCard } from "../components";

const Home = () => {
  return (
    <div className=" flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <input
          type="text"
          className="border border-gray-700 rounded px-2 py-2 w-[400px]"
          value={"asf"}
        ></input>
        <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
          From
        </button>
        <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
          End
        </button>
        <button className="border-2 border-black rounded-md py-2 w-[100px] font-medium">
          Speaker
        </button>
        <button className=" w-[150px] items-center gap-2 py-2.5 text-white bg-amber-600 rounded-lg hover:bg-amber-700">
          Search
        </button>
      </div>
      <div>
        <div>
          <h2 className="mb-2 text-[1.2rem] font-semibold">Videos</h2>
          <div className="videoContainer flex gap-5">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
        <div className="Playlist mt-4">
          <h2 className="mb-2 text-[1.2rem] font-semibold">Playlist</h2>
          <div className="videoContainer flex gap-5">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
