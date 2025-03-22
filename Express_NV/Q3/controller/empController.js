const empModel=require('../model/model.js');
const getEmp=async(req,resp)=>{
    try{
        const result=await empModel.find();
        resp.json(result);
    }catch(error){
        console.log(error);
    }
}
const addEmp=async(req,resp)=>{
    try{
        const data=new empModel({
            name:req.body.name,
            salary:req.body.salary
        })
        const result=await data.save();
        resp.json(result);
    }catch(error){
        console.log(error);
    }
}
const deleteEmp=async(req,resp)=>{
    try{
        const result=await empModel.deleteOne({
            name:req.body.name,
            salary:req.body.salary
        })
        console.log(result);
        resp.json(result);
    }catch(error){
        console.log(error);
    }
    
}

const putEmp=async(req,resp)=>{
    try{
        const result=await empModel.updateOne({name:"Neha"},{$set:{salary:40000}});
        console.log(result);
        resp.json(result);
    }catch(error){
        console.log(error);
    }

}


module.exports={getEmp,addEmp,putEmp,deleteEmp};
