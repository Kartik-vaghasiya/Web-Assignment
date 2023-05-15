const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/ToDoRoutes');
const cors = require('cors');

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors())

mongoose
    .connect("mongodb+srv://kartikvag10:Kartikvag@cluster0.xjwtxbs.mongodb.net/")
    .then(() => {console.log("Connected !!")})
    .catch((err) => {console.log("connection Error !!",err)})
app.use(routes)

app.listen(PORT,() => {
    console.log(`Server Listening on PORT ${PORT}`);
})