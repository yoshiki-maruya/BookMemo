import React from "react";
import BookList from "../domains/BookList";
import SideBar from "../domains/SideBar";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-wrap">
      <SideBar />
      <BookList />
    </div>
  );
};

export default Home;
