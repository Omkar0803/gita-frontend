"use client";
import { DeleteIcon } from "@/assets/icons";
import React, { useState } from "react";

const option = [
  {
    id: 1,
    title: "ABC",
  },
  {
    id: 2,
    title: "BCD",
  },
  {
    id: 3,
    title: "CDE",
  },
  {
    id: 4,
    title: "DEF",
  },
  {
    id: 5,
    title: "EFG",
  },
];

const page = () => {
  const [course, setCourse] = useState("");
  const [courseList, setCourseList] = useState([]);

  const handleSelect = (name) => {
    setCourse(name);
    setCourseList([...courseList, name]);
  };

  const handleDelete = (name) => {
    let newCourselist = courseList.filter((item) => {
      if (item != name) {
        return item;
      }
    });
    setCourseList(newCourselist);
  };

  return (
    <div>
      <h2 className="text-[1.5rem] font-semibold">Upload Video</h2>
      <div className="flex flex-col items-center gap-5 my-10">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Speaker Name</label>
          <select
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
            value={course}
            onChange={(e) => handleSelect(e.target.value)}
            required
          >
            <option value="none" selected>
              Select an Option
            </option>
            {option.map(({ id, title }) => {
              return (
                <option
                  value={title}
                  key={id}
                  onClick={() => handleDelete(title)}
                >
                  {title}
                </option>
              );
            })}
          </select>
          <div className="flex h-20 border-2 rounded-md mt-2 p-2 gap-2">
            {courseList
              ? courseList.map((item) => {
                  return (
                    <div className="flex items-center gap-1 border  border-[#959595] h-7 rounded-lg px-2">
                      {item}
                      <div
                        className="cursor-pointer"
                        onClick={() => handleDelete(item)}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Speaker Name</label>
          <input
            type="text"
            required
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title of Lecture</label>
          <input
            type="text"
            required
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
          ></input>
        </div>
        <div className="flex flex-col w-[600px]">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Date and Time</label>
            <input
              type="datetime-local"
              required
              className="border border-gray-700 rounded px-2 py-2 w-[200px]"
            ></input>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Lecture Type</label>
          <input
            type="text"
            required
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            required
            className="border border-gray-700 rounded px-2 py-2 w-[600px]"
          ></input>
        </div>
        <button className="w-[150px] mt-7 items-center gap-2 py-2.5 text-white bg-amber-600 rounded-lg hover:bg-amber-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
