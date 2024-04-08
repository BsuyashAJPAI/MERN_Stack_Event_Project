import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{

        type:String,
        required:[true, "Name Required!"],
        minLength:[3,"Name must contain at least 3 characters"]
    },
    email:{

        type:String,
        required:[true, "Name Required!"],
        validate:[validator.isEmail, 'Please Provide valid email']
    },
    subject:{

        type:String,
        required:[true, "Subject Required!"],
        minLength:[5,"Subject at least required 5 characters"]
    },
    message:{

        type:String,
        required:[true, "Message Required!"],
        minLength:[10,"Message at least required 10 characters"]
    }
})

export const Message = mongoose.model("Message:", messageSchema)