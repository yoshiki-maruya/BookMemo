import express from 'express';
import router from './routes/bookRoute';
import cors from 'cors';

const app: express.Express = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`port ${port} でサーバー起動中`);
});
