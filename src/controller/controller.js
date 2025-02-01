const productModel = require("../Model/DataModel");

exports.CreateProduct = async (req, res) => {
   try {
      let reqBody=req.body;
      await productModel.create(reqBody);
    return res.status(200).json({status:'success',message:"Product created"});
   }catch (e){
       return res.status(400).json({err:e.toString()})
   }

}
// view page data
exports.read =async(req,res)=>{
    try{
         let rows = await productModel.find()
         return res.status(200).json({status:'success',row:rows})
    }catch (e){
        return res.status(400).json({err:e.toString(),e:"read not found"})
    }
}





// update data
exports.update=async (req,res)=>{
    try{
        let {id}=req.params
        let reqBody=req.body;
        await productModel.updateOne({_id:id},reqBody)
        return res.status(200).json({status:"success",message:"updated"})

    }catch (e){
        return res.status(400).json({err:e.toString(),e:"read not found"})
    }
}


// updata view controller
exports.viewUpdate=async (req,res)=>{
    try{
        let {id}=req.params;
       let rows= await productModel.find({_id:id})
        return res.status(200).json({status:"success",message:"Yes you can see data",row:rows})
    }catch (e){
        return res.status(400).json({err:e.toString(),e:"read not found"})
    }
}











// delete data
exports.deleteData=async (req,res)=>{
     try{
       let {id}=req.params;
       await productModel.deleteOne({_id:id})
         return res.status(200).json({status:"success",message:"delete success"})
     }catch (e){
         return res.status(400).json({err:e.toString(),e:"not found data"})
     }
}