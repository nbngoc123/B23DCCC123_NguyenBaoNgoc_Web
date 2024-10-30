const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
const router = require('./routers/todo');




app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});