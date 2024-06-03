const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 8000;



app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '150mb',
    extended: true
    })); 
    // app.use(express.limit('10M'));
app.use(cors())

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
]

// Endpoint to get all books
app.get('/api/books', (req, res) => {
  res.json(books)

})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})