import React from "react";
import Block from "../Block";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className=" my-[80px] ">
          <h1 className="text-5xl dark:text-amber-100 mt-[30px] ">About</h1>
          <div className=" flex flex-wrap gap-[80px] ">
            <Block
              text={"Osh"}
              title={
                "Osh region occupies the southern part of the Kyrgyz Republic. The total area of the region is 29.2 thousand km2. The regional center&"
              }
              btn="welcom2"
            />
            <Block
              text={"Bishkek"}
              title={
                "Bishkek is the capital of the Kyrgyz Republic. Its political, economic and cultural center. "
              }
              btn="Hello"
            />
            <Block
              text={"Jalal-Abad"}
              title={
                "Jalal-Abad, city, western Kyrgyzstan. Though made a city in 1877, "
              }
              btn="follow"
            />
            <Block
              text={"Chüy"}
              title={
                "The Chüy Region is divided administratively into one city of regional significance (Tokmok), and eight districts:"
              }
              btn="salam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
