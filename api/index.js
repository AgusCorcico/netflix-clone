const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


/*----Routes----*/
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("DB Connection ok"))
    .catch(error => console.log(error))

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);



app.listen(3000, ()=>{
    console.log("Backend is ready")
})