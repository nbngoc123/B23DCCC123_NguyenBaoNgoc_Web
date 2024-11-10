const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
const port = 3006;
const router = require('./routers/todo');


app.use('/', router);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});