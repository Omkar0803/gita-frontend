import React from "react";

const VideoBlockCard = () => {
  return (
    <div className="w-[260px] flex flex-col gap-1 cursor-pointer">
      <div className="imgContainer w-full bg-gray-200 rounded-xl h-[180px]"></div>
      <div>
        <h3>Title Lorem Ipsum lopsna </h3>
        <p className="text-[0.9rem]">author</p>
      </div>
    </div>
  );
};

export default VideoBlockCard;
