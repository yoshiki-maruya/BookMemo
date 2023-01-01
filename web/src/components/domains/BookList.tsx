import React from "react";
import { Link } from "react-router-dom";
import getBooks from "../../services/getBooks";
import IBook from "../../types/IBook";

const BookList: React.FC = () => {
  const [books, setBooks] = React.useState<IBook[]>();

  React.useEffect(() => {
    (async () => {
      const fetchedBookList = await getBooks();
      if (fetchedBookList) setBooks(fetchedBookList);
    })();
  }, [])

  return (
    <main className="h-full w-full lg:w-4/5">
      <div className="mt-5 flex flex-col">
        <div className="w-full">
          <Link
            to="/create"
            className="rounded-lg border border-slate-200 bg-green-500 py-2 px-4 font-bold text-white hover:bg-green-700"
          >
            Add New
          </Link>
          <div className="relative mt-3 rounded-lg shadow">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                <tr>
                  <th className="py-3 px-1 text-center">No</th>
                  <th className="py-3 px-6">Title</th>
                  <th className="py-3 px-6">Content</th>
                  <th className="py-3 px-1 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {books?.map((books, index) => (
                  <tr className="border-b bg-white" key={books.id}>
                    <td className="py-3 px-1 text-center">{index + 1}</td>
                    <td className="py-3 px-6 font-medium text-gray-900">
                      {books.title}
                    </td>
                    <td className="py-3 px-6">{books.content}</td>
                    <td className="py-3 px-1 text-center">
                      <Link
                        to={`/edit/${books.id}`}
                        className="mr-1 rounded bg-blue-400 px-3 py-1 font-medium text-white hover:bg-blue-500"
                      >
                        Edit
                      </Link>
                      <button
                        // onClick={() => deleteProduct(books.id)}
                        className="rounded bg-red-400 px-3 py-1 font-medium text-white hover:bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookList;
