import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen flex-wrap">
      <aside className="h-full w-full bg-orange-600 lg:w-1/5">
        <h1 className="mt-4 text-center text-3xl">BookMemo</h1>
        <ul className="mt-10 grid gap-y-8 text-center">
          <li>Create</li>
          <li>Read</li>
          <li>Update</li>
          <li>Delete</li>
        </ul>
      </aside>
      <main className="h-full w-full bg-yellow-200 lg:w-4/5">
        <h1>Main View</h1>
      </main>
    </div>
  );
};

export default Home;
