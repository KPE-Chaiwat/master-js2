const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const port = 8000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '150mb',
    extended: true
    })); 
    // app.use(express.limit('10M'));
app.use(cors())

const topics = [
  { id: 1, timestamp: "1717397440665" },
  { id: 2, timestamp: "1717657969018" },
  { id: 3, timestamp: "1717396886472" },
]




// Endpoint to get all books
app.get('/topics', (req, res) => {
  res.json(topics)

})
app.post('/tong',(req,res)=>{


  console.log(req.body)
  res.json({ok:"ok"})
  
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})