import mongoose from "mongoose";

export const dbConnection= ()=>{

    mongoose.connect(process.env.MONGODB_URL,{dbName:'EVENTPLANINGAPPLICATION'})
    .then(()=>{
        console.log("Connected to Databse")
    }).catch((e)=>{
        console.log(`Error Ocurred: ${e}`)
    })
} 