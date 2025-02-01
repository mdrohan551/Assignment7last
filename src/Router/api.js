const express = require('express');
const DataController = require('../controller/controller');
const router = express.Router();



// creat router
router.post('/create',DataController.CreateProduct)
router.get('/read',DataController.read)
router.post("/update/:id",DataController.update)
router.get('/delete/:id',DataController.deleteData)


// update viwer

router.get("/viewUpdate/:id",DataController.viewUpdate)


module.exports=router