import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        
    }
);

mongoose.models = {};
export const Student = mongoose.model("Student", studentSchema);



 

// No SQL ---> mongoDB ---> mongoose ---> schema ---> model ---> collection ---> document

// SQL ---> mySQL ---> table ---> row ---> column

// mongoDB ----> mongoose 



// mySQL --- > table 
// name, email , phone ---> starting ---> after some time ---> description , address. 