
let readLineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readLineSync.question("What is your name?");
console.log(kuler(`\nhello ${userName} welcome to Quizify`,"#dc2626"));
// creating a database
const database = {
  data: [
    {
      question: `let a={},b={}
                  console.log(a==b)
                  console.log(a===b)`,
      options: {
        a: "false false",
        b: "true true",
        c: "false true",
        d: "true false",
      },
      answer: "a",
    },
    {
      question: `Object.assign(target,source) creates which type of copy?`,
      options: {
        a: "deep copy",
        b: "shallow copy",
        c: "nested copy",
        d: "creates a new reference",
      },
      answer: "b",
    },
    {
      question: `Is method chaining possible with forEach?`,
      options: {
        a: "yes",
        b: "no",
      },
      answer: "b",
    },
  ],
};

// Creating Leader Board
const leaderBoard = {
  data:[ 
    {
      name : "Ashish",
      score: 1
    },
    {
      name : "riya",
      score : 3
    },
    {
      name : "jay",
      score : 2
    }
   ]
}
// Main Logic 
function playGame(userAnswer,answer){
    if(userAnswer === answer){
      console.log(kuler("Correct Answer","#86efac"));
      score++;
    }else{
      console.log(kuler("Wrong answer","#e11d48"));
      console.log(`Correct answer - ${answer}`);
    }
}

// Shows questions & options
function showQuestionAndOptions(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(`\nQ${i + 1}-${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key} : ${database.data[i].options[key]}`);
    }
    let userAnswer = readLineSync.question("\nEnter your answer: ").toLowerCase();
  playGame(userAnswer, database.data[i].answer);
     
  }

}

//Displays the leader board

function showHighScorer(leaderBoard){
  leaderBoard.data.push({name:userName, score : score });
   let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log(kuler("\n Check your position on the leader board\n","#f59e0b"));
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.name} - Score: ${leader.score}`,"#0ea5e9"));
  }
}

showQuestionAndOptions(database);
console.log(`\n you total score - ${score}`);
showHighScorer(leaderBoard);

