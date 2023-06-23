"use client";
import { googleFormsToJson } from "react-google-forms-hooks";

// https://docs.google.com/forms/d/e/1FAIpQLSe8DPQOxstgjWStGcyhXhLyT8J_O3MF9HEgZky0LX7GLKK_gA/viewform?usp=sf_link

const page = () => {
  const handleData = async () => {
    const result = await googleFormsToJson(
      "https://docs.google.com/forms/d/e/1FAIpQLSe5U3qvg8WHs4nkU-e6h2RlAD7fKoCkou6HO2w2-tXYIA_F8g/viewform"
    );
  };
  return <button onClick={handleData()}>Submit</button>;
};

export default page;
