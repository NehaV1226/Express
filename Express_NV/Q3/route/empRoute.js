const express=require('express')
const emp=require('../controller/empController.js');
const router=express.Router();
router.get("/",emp.getEmp);
router.post("/add",emp.addEmp);
router.delete("/delete",emp.deleteEmp);
router.put("/update",emp.putEmp);

module.exports=router;