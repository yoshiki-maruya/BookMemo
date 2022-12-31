import axios from 'axios';
import IBook from '../types/IBook';

async function createBook(item: IBook): Promise<void> {
  await axios.post(
    'http://localhost:8000/book',
    item,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data);
}

export default createBook;
