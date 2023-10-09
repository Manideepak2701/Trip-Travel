// const express = require("express");
// const router = express.Router();
// const Feedback = require("../models/feedback")

// router.post("/submit", async(req, res) => {
  
//     const {name , phonenumber , email , description} = req.body

//     const newUser = new User({name , phonenumber , email , description})

//     try {
//         newUser.save()
//         res.send('User given feedback successfully')
//     } catch (error) {
//          return res.status(400).json({ message: error });
//     }

// });



// router.get("/getallfeedbacks", async(req, res) => {

//     try {
//         const feedbacks = await Feedback.find({})
//         res.send(feedbacks)
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
  
// });

// router.post("/deletefeedback", async(req, res) => {
  
//     const userid = req.body.userid

//     try {
//         await Feedback.findOneAndDelete({_id : userid})
//         res.send('User Deleted Successfully')
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }

// });



// module.exports = router