import React from "react";

const VideoListCard = () => {
  return (
    <div className="w-full flex gap-3 h-[120px]">
      <div className="imgContainer min-w-[180px]  bg-gray-200 rounded-xl h-[120px]"></div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[1.4rem] font-semibold">
          Title Lorem Ipsum lopsna
        </h3>
        <p className="">author</p>
        <p className="text-[0.95rem] text-gray-800">
          Missing a single dose of diabetes medicine is not usually a problem.
          However, if you frequently forget to take your medicine, it can lead
          to serious consequences. Some of the possible consequences.
        </p>
      </div>
    </div>
  );
};

export default VideoListCard;
