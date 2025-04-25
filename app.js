const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('user-svc healthy');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.listen(port, () => {
  console.log(`user-svc listening on port ${port}`);
});
