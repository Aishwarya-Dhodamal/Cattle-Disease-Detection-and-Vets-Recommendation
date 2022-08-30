import express from 'express';
import expressAsyncHandler from "express-async-handler";
import Vet from '../models/bill.js';
import data from '../data.js'
const billRouter=express.Router();

//— A GET request to the base URL should list a table with all previous months electricity bill record
billRouter.get('/',expressAsyncHandler(async(req,res)=>{
const vets = await Vet.find({District:req.query.location})
if(vets) res.send(vets)
else  res.status(402).send({message:'Opps No vets found!!'})
}))

// — A GET request to /bill/:id should list details of a particular record. This will be on click of the button from above table
billRouter.get('/data',expressAsyncHandler(async(req,res)=>{
    const allVets = await Vet.insertMany(data)
    res.send({allVets})
    }))


billRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
const currentBill = await Vet.findById(req.params.id)
res.send(currentBill)
}))

//— A DELETE request to /delete/:id should delete that particular record from the database.




//— A POST request to / should submit the above form and add it to the database.
billRouter.post('/',expressAsyncHandler(async(req,res)=>{
    console.log(req.body)
    const newBill = new Vet({
        billDate:req.body.billDate,
        paidDate:req.body.paidDate,
        unitConsumed:req.body.unitConsumed,
        totalAmount:req.body.totalAmount
    })
    const addBill= await newBill.save()
    res.send(addBill)
}))


//— A PUT request to /:id/edit should submit the above form and change the appropriate details in the database.
billRouter.put('/:id',expressAsyncHandler(async (req,res)=>{
    const bill=await Vet.findById(req.params.id)
    if(bill){
       
            bill.billDate=req.body.billDate,
            bill.paidDate=req.body.paidDate,
            bill.unitConsumed=req.body.unitConsumed,
            bill.totalAmount=req.body.totalAmount
            const newBill = await bill.save()
            res.send(newBill)
    }
    else  res.status(404).send({message:'bill not found !'})
    
}))

//— A DELETE request to /delete/:id should delete that particular record from the database.
billRouter.delete('/:id',expressAsyncHandler(async(req,res)=>{
    await Vet.deleteOne({_id:req.params.id})
    res.send(req.params.id)
}))

export default billRouter