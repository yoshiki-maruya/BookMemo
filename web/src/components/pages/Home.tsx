import React from "react";
import BookList from "../domains/BookList";
import SideBar from "../domains/SideBar";

const Home: React.FC = () => {
  return (
    <>
      <SideBar />
      <BookList />
    </>
  );
};

export default Home;
