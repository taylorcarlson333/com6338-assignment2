var questionsArr = [
      {
        question: 'Is University of Florida a good school?',
        answer: true
      },
      {
        question: 'Is Gainesville the capital of Florida?',
        answer: false
      },{
        question: 'Is the Gator the mascot for University of Florida?',
        answer: true
      },
      {
        question: 'Is the University of Florida closer to the Atlantic Ocean than the Gulf of Mexico?',
        answer: false
      },
      {
        question: 'Are the colors of University of Florida blue and orange?',
        answer: true
      },
      {
        question: 'Is the University of Florida located in Gainesville?',
        answer: true
      }
]

function runQuiz() {
    let correctAnswers = 0;
    for (let i = 0; i < questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question);

        if (answer === questionsArr[i].answer) {
            correctAnswers++;
        } 
    }

    let totalScore = parseInt((correctAnswers / questionsArr.length) * 100);
    alert("Your score: " + totalScore + "%");
}