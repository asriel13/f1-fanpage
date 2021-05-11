import express from 'express';
import Cors from 'cors';
import indexRouter from './routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
const cors = Cors();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors);

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`F1 fan page server listening at http://localhost:${port}`);
});
