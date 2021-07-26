import React from 'react'

const Quiz = () => {
  const questions = [
    {
        questionText: "What food is Domino's famous for?",
        answerOption: [ 
            { answerText: 'pizza', isCorrect: true },
        ],
    },]
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const answer = e.target[0].value.toLowerCase()
      if (answer === questions[0].answerOption[0].answerText) {
        alert("Correct Answer!")
      } else {
        alert("Wrong answer.Try Again!")
      }}

  return (
    <div>
      <h1>{questions[0].questionText}</h1>
      <form onSubmit = {handleSubmit}>
  <label>
    Answer:
    <input type="text" />
  </label>
  <input type="submit" value="Submit"/>
</form>
    </div>
  )
}

export default Quiz
