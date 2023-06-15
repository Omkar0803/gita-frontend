const videoList = [1, 2, 3, 4, 5, 6, 7];

const Video = ({ params }) => {
  return (
    <div className=" flex gap-3 my-5">
      <div className=" max-w-[750px]">
        <div className="videoBox h-[500px] w-[750px] bg-[#8c7979] rounded-2xl"></div>
        <div className="videoDetails my-3 flex flex-col gap-2">
          <h2 className="title text-[1.5rem] font-semibold">{params.slug}</h2>
          <div>
            <h4 className="font-medium">Description:</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum consectetur, est id consequat ultricies, nibh lacus
              vehicula nisl, eu auctor turpis ante eu ante. Fusce cursus eu
              sapien et luctus. Donec eu diam quis nunc interdum luctus. Ut
              velit metus, laoreet ut justo vitae, venenatis euismod mauris.
              Quisque semper nulla ut augue lobortis, nec rhoncus orci iaculis.
              In hac habitasse platea dictumst. Aliquam fermentum magna neque.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
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
