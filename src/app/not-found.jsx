import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-13rem)]">
      {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[150px] font-black font-heading text-center bg-linear-to-r from-[#0818A8] to-[#1E88E5] bg-clip-text text-transparent leading-none">
        404
      </h1> */}
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black font-heading text-center  bg-linear-to-r from-[#0818A8] to-[#1E88E5] bg-clip-text text-transparent ">
        COMING SOON...
      </h3>
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-600 hover:underline pt-6"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
