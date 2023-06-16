"use client";
import { useState, useEffect } from "react";
import { BlockIcon, ListIcon } from "@/assets/icons";
import { VideoBlockCard, VideoListCard } from "@/components";
import supabase from "@/config/supabase";

const Videos = () => {
  const [viewBlock, setViewBlock] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from("Videos") // Name of Table
        .select(`*,Facilitators(*)`);

      if (error) {
        console.log("error");
        console.log(error);
      }
      if (data) {
        // console.log(data);
        await setVideos(data);
      }
    };
    fetchVideos();
  }, []);
  return (
    <div>
      <h2 className="mb-2 text-[1.5rem] font-semibold">Videos</h2>
      <div className="flex items-center justify-between gap-3 w-[100%]">
        <div className="flex items-center gap-3 ">
          <input
            type="text"
            className="border border-gray-700 rounded px-2 py-2 w-[400px]"
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
        <div className="flex items-center justify-center gap-0">
          <div
            className="p-2 border-2 border-black rounded-bl-md rounded-tl-md cursor-pointer"
            onClick={() => setViewBlock(true)}
          >
            <BlockIcon />
          </div>
          <div
            onClick={() => setViewBlock(false)}
            className="p-2 border-2 border-black rounded-br-md rounded-tr-md
            cursor-pointer"
          >
            <ListIcon />
          </div>
        </div>
      </div>
      {viewBlock ? (
        <div className="lectureContainer-Block my-7">
          <div className="videoContainer mt-4">
            <div className="w-full flex justify-between">
              <h2 className="mb-1 text-[1.2rem] font-semibold">Date</h2>
              <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                See all
              </div>
            </div>
            <div className="videoOuterContainer max-w-[1130px] overflow-x-scroll border py-3 px-3 scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoContainer flex gap-2">
                {videos ? (
                  videos.map((data) => {
                    return <VideoBlockCard data={data} key={data.link} />;
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
          <div className="videoContainer mt-4">
            <div className="w-full flex justify-between">
              <h2 className="   mb-1 text-[1.2rem] font-semibold">Date</h2>
              <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                See all
              </div>
            </div>
            <div className="videoOuterContainer max-w-[1130px] overflow-x-scroll border py-3 px-3 scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoContainer flex gap-5">
                <VideoBlockCard />
                <VideoBlockCard />
                <VideoBlockCard />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="lectureContainer-list flex flex-col gap-7 mb-16 mt-5">
          <div className="videoContainer">
            <div className="w-full flex justify-between items-center">
              <h2 className="mb-1 text-[1.2rem] font-semibold">Date</h2>
              <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                See all
              </div>
            </div>
            <div className="videoOuterContainer flex gap-5 h-[400px] items-start overflow-y-scroll border-2 border-black rounded-lg  scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoInnerContainer flex flex-col gap-3 mt-2 mx-2 ">
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
              </div>
            </div>
          </div>
          <div className="videoContainer">
            <div className="w-full flex justify-between items-center">
              <h2 className="mb-1 text-[1.2rem] font-semibold">Date</h2>
              <div className="font-semibold underline hover:text-blue-800 cursor-pointer text-[0.9rem]">
                See all
              </div>
            </div>
            <div className="videoOuterContainer flex gap-5 h-[400px] items-start overflow-y-scroll border-2 border-black rounded-lg  scrollbar-thumb-slate-800 scrollbar-thin">
              <div className="videoInnerContainer flex flex-col gap-3 mt-2 mx-2 ">
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
                <VideoListCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
