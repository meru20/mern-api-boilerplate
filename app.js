import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRoute } from './routes/user.js';

dotenv.config();


//DB connect
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
}).then((res) => {
    console.log('successfuly connected!')
}).catch (err => {
    console.log('error -->',err);
});


//initialize
const app = express();


//middleware
app.use(express.json())




//routes


app.get('/',(req,res)=> {
    console.log('i am in terminal!!')
    res.send ("hey we're in the browser now!")
})
// app.get ('/alkali', (req,res) => {
//     res.send('we are team alkali');
// })
app.use('/user', userRoute);
// app.use("")

//Listen
app.listen(process.env.PORT || 8001);
// const port= 3003 || 8001; ====> alternate way
//app.listen(port)