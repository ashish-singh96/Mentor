import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true,
     },
     branch:{
        type:String,
        required:true,
     },
     course:{
        type:String,
        required:true,
     }
});

const student = mongoose.model("student", studentSchema);
export default student;

