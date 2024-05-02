const Question = require("../models/questions");
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.render("quiz", { questions });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
exports.SubmitQuiz = async (req, res) => {
  const userAnswer = req.body.answers;
  try {
    const questions = await Question.find();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswer[i] === questions[i].correctAnswerIndex) {
        score++;
      }
    }
    score=10-score;
    res.render("result", { score });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
