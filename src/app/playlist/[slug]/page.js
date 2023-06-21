"use client";
import { useState, useEffect } from "react";
import supabase from "@/config/supabase";

const videoList = [1, 2, 3, 4, 5, 6, 7];
// `https://img.youtube.com/vi/${linkId}/sddefault.jpg`;

const Video = ({ params }) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      const { data, error } = await supabase
        .from("Videos") // Name of Table
        .select(`*,Facilitators(*)`)
        .eq("link", params.slug);

      if (error) {
        console.log("error");
        console.log(error);
      }
      if (data) {
        console.log(data[0]);
        await setVideo(data[0]);
      }
    };
    fetchVideo();
  }, [params.slug]);
  return (
    <div className=" flex gap-3 my-5">
      <div className=" max-w-[750px]">
        <div className="videoBox h-[500px] w-[750px] bg-[#8c7979] rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="videoDetails my-3 flex flex-col gap-2">
          <h2 className="title text-[1.5rem] font-semibold">
            {video ? video.title : "Title"}
          </h2>
          <div>
            <h4 className="font-medium">Description:</h4>
            <p className="mr-4 leading-relaxed">
              {video ? video.description : "Description"}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        {/* <div className="flex gap-1.5">
          <button className="border-2 border-black h-12 rounded-md py-2 w-[100%] text-[1rem] font-medium">
            Sort by Speaker
          </button>
          <button className="border-2 border-black h-12 rounded-md py-2 w-[100%] text-[1rem] font-medium">
            Sort By date
          </button>
        </div> */}
        <div className="videoListOuterContainer h-[500px] px-2 py-3 border-2 border-black rounded-lg overflow-y-scroll scrollbar-thumb-slate-800 scrollbar-thin">
          <div className="videoList flex flex-col gap-1.5">
            {videoList.map((id) => {
              return (
                <div
                  key={id}
                  className="VideoCard w-full flex gap-3 h-[120px] cursor-pointer hover:bg-[#f1f1f1]"
                >
                  <div className="imgContainer min-w-[180px]  bg-gray-200 rounded-xl h-[120px]"></div>
                  <div className="flex flex-col gap-1 mt-2">
                    <h3 className="text-[1.1rem] font-semibold">
                      Title Lorem Ipsum lopsna
                    </h3>
                    <p className="text-[0.8rem]">author</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button className="border-2 border-black h-16 rounded-md py-2 w-[100%] text-[1.2rem] font-medium">
            Suggest Edits
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
