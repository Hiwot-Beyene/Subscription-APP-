import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {readdirSync} from 'fs'; 
import { Console } from 'console';

const morgan = require('morgan');
require('dotenv').config();


const app = express();


// db connection

mongoose.connect(process.env.DATABASE).
then(()=>console.log("DB CONNCTED SUCCESSFULLY!"))
.catch((err)=>console.log("DB CONNECTION ERROR!", err));

// middlewares


app.use(express.json({limit:"5mb"}));
app.use(cors({
    origin:[process.env.CLIENT_URL],

}));



// autoload routes


//listen

