const express=require('express');
const router=express.Router();
const quizController=require("../controllers/quizController");

router.get('/quiz',quizController.getQuestions);
router.post('/quiz',quizController.SubmitQuiz);
module.exports=router;  