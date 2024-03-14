const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
  }),
);

app.use(express.json());

app.get('/', (req, res) => {
  const randomNum = Math.floor((Math.random() * 100) + 1);
  res.json({ cnt: randomNum });
});

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log('Server is running on port:', port);
});
