import React from "react";
import { useNavigate, Link } from "react-router-dom";
import createBook from "../../services/createBook";
import IBook from "../../types/IBook";
import SideBar from "../domains/SideBar";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [book, setBook] = React.useState<IBook>();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      if (book) {
        await createBook(book);
      }
      navigate('/');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      navigate('/error');
    }
  }

  return (
    <>
      <SideBar />
      <main className="h-full w-full lg:w-4/5">
        <div className="mt-5 ml-5">
          <Link
            to="/"
            className="rounded-lg border border-slate-200 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Back Home
          </Link>
        </div>
        <h1 className="pt-16 text-center text-3xl">Create</h1>
        <form className="mb-4 rounded bg-white px-52 pt-6 pb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">Title</label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              name="title"
              placeholder="title"
              value={book?.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">Content</label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              name="content"
              placeholder="???????????????????????????"
              value={book?.content}
              onChange={(e) => setBook({ ...book, content: e.target.value })}
            />
          </div>
          <div className="text-center">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            >
              ??????
            </button>
          </div>
        </form>
      </main>
    </>
  )
}

export default Create;
