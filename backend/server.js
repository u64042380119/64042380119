const express = require("express")
const app = express()
const port = 3018

const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => {
  const questions = [
    {
      id: 1,
      question: "What is the largest sea animal?",
      answer: "Blue whale",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answer: "Vatican City",
    },
  ]

  res.json(questions)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})