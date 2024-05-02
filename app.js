const express= require('express');
const mongoose= require('mongoose');
const quizRoutes=require('./routes/quizRoutes');

const app=express();
const PORT=3000;
mongoose.connect('mongodb://localhost:27017/QuizApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("Connected to DB")).catch(err=>console.error(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/',quizRoutes);
app.get('/',(req,res)=>{
    res.redirect('/quiz');
})
app.listen(PORT,()=>{
     console.log(`Running on port: ${PORT}`);
});