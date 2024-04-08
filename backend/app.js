import express from 'express'
import { dbConnection } from './databse/dbConnection.js';
import dotenv from 'dotenv'
import messageRouter from './Router/messageRouter.js'
import cors from 'cors'

const app = express();

dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin:'http://localhost:5173',
    methods:["GET","POST"],
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true})) // basically it checks the datatype entered by the user

app.use('/api/v1/message', messageRouter)

dbConnection();
export default app;