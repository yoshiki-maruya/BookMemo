import React from "react";
import BookList from "../domains/BookList";
import SideBar from "../domains/SideBar";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-wrap">
      <SideBar />
      <main className="h-full w-full lg:w-4/5">
        <BookList />
      </main>
    </div>
  );
};

export default Home;
