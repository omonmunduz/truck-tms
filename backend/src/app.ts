import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Datatruck TMS backend is running');
});

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000');
});
