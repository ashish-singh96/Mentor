import student from "../model/StudentModel.js";

class StudentController {
    
    static insert_student = async (req,res) =>{
        try {
            const {name, branch, course} = req.body;
            
            if(name && branch && course){
             const data = new student({
                name:name,
                branch:branch,
                course:course
             })
             await data.save();
             res.status(200).json({message:"Data Create Successfully"});
            }else{
                res.status(404).json({message:"Field Empty"});
            }

        } catch (error) {
            res.status(500).json({message:"Intersal Server Error!"});
        }
    }

    static view_student = async (req,res)=>{
        try {
            const data = await student.find();
            if(data){
              res.status(200).json({message:"Data get Successfully", data})
            }else{
                res.status(404).json({message:"Data not Exits"});
            }

        } catch (error) {
            res.status(500).json({message:"Internal Server Error"});
        }
    }
}
export default StudentController;