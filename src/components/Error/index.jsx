import React from "react";
import error from "../../assets/images/404.webp"
const Error = () => {
  return (
    <div className="my-[60px]">
      <div className="container">
        <div className=" flex items-center justify-center">
            <img src={error} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Error