import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fileUpload from "express-fileupload";
import route from "./route/Route.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({useTempFiles:true}));
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.PORT || 3000;
const url = process.env.MONGOURL;

mongoose.connect(url).then(()=>{
console.log("DB Connected")
}).catch(error => console.log(error));

app.use('/', route);

app.listen(port,()=>{
    console.log(`Server running at PORT ${port}`);
})