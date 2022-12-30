import React from "react";
import createBook from "../../services/createBook";
import IBook from "../../types/IBook";

const Create: React.FC = () => {
  const [book, setBook] = React.useState<IBook>();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      if (book) {
        await createBook(book);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new error;
    }
  }

  return (
    <>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={book?.title}
          onChange={(e) => setBook({ title: e.target.value, content: book?.content })}
        />
        <input
          type="text"
          name="content"
          placeholder="内容、気づき、感想"
          value={book?.content}
          onChange={(e) => setBook({ title: book?.title, content: e.target.value })}
        />
        <button>登録</button>
      </form>
    </>
  )
}

export default Create;
