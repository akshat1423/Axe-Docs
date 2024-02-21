import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className=" absolute w-full py-10 text-center text-xl text-zinc-300 top-10">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 text-[13vw] -translate-x-[50%] -translate-y-[50%] leading-none tracking-tight">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
