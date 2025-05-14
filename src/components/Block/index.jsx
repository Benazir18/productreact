import React from "react";
import { Link } from "react-router-dom";
const Block = ({ btn, text, title }) => {
  return (
    <div>
      <div className="container">
        <div className=" w-[380px] h-[230px]  rounded-3xl bg-indigo-600 mt-[30px]">
          <h1 className="text-4xl flex items-center justify-center  dark:text-teal-200">
            {text}
          </h1>
          <p className="  text-[16px] p-[15px] dark:text-blue-1000">{title}</p>
          <Link to={"/"}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-[130px]  "
            >
              {btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Block;
