import Link from "next/link";

const PlaylistListCard = ({ data }) => {
  return (
    <Link href={`/video/${data ? data.link : "1"}`}>
      <div className="w-full flex gap-3 h-[120px]">
        <div className="imgContainer min-w-[180px]  max-w-[180px] overflow-hidden  bg-gray-200 rounded-xl h-[120px]">
          <img
            src={`https://img.youtube.com/vi/${
              data ? data.link : "1"
            }/sddefault.jpg`}
            className="w-[100%]"
          ></img>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[1.4rem] font-semibold">
            {data && data.title ? data.title.slice(0, 30) + "..." : "Title"}
          </h3>
          <p className="">
            {/* {data
              ? `${data.Facilitators.prefix} ${data.Facilitators.name} ${data.Facilitators.suffix}`
              : "Author"} */}
          </p>
          <p className="text-[0.95rem] text-gray-800">
            Missing a single dose of diabetes medicine is not usually a problem.
            However, if you frequently forget to take your medicine, it can lead
            to serious consequences. Some of the possible consequences.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistListCard;
