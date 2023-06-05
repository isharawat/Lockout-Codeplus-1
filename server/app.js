const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

app.use(express.json())
app.use(cors())
app.use('/lockoutBot',require('./routes/questions'))
const port = 3001;
const dotenv= require('dotenv');
dotenv.config({path: './config.env'});
//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const db=process.env.DATABASE || "mongodb://127.0.0.1:27017"

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })