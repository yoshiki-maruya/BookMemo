import React from "react";
import SideBar from "../domains/SideBar";

const Memory: React.FC = () => {
  return (
    <>
      <SideBar />
      <main className="h-full w-full lg:w-4/5">
        <h1 className="pt-16 text-center text-3xl">Memory</h1>
      </main>
    </>
  );
};

export default Memory;
