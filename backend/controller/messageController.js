import { Message } from "../modals/messageSchema.js"

export const sendMessage = async (req, res) => {

    try {
        const {name, subject, email, message} = req.body;
        if (!name || !subject || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })

        }
        await Message.create({name, subject, email, message});
        res.status(200).json({
            success:true,
            message:"message sent successfully"
        })
        
    }
    catch(error){

        if(error.name === "ValidationError"){
            let errorMessage = "";
            if(error.errors.name){
                errorMessage += error.errors.name.message + " "
            }
            if(error.errors.email){
                errorMessage += error.errors.email.message + " "
            }
            if(error.errors.subject){
                errorMessage += error.errors.subject.message + " "
            }
            if(error.errors.message){
                errorMessage += error.errors.message.message + " "
            }
            return res.status(200).json({
                success : false,
                message:errorMessage 
            })
        }        
        console.log(error)
        return res.status(500).json({
            success:false,
            error :"Unknown error occured"          
        })
    }
   
}