import axios from "axios";
import IBook from "../types/IBook";

async function getBooks(): Promise<IBook[]> {
  return axios
    .get<IBook[]>(
      'http://localhost:8000/getbooks',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => response.data);
}

export default getBooks;
