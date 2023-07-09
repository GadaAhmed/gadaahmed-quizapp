//Start Section
let start = document.querySelector("#start");

//Quiz Section
let quiz = document.querySelector("#quiz");


//question Section
let questionNo = document.querySelector("#questionNo");

// text question
let questionText = document.querySelector("#questionText");

//first sction
let firstScreen = document.querySelector(".first");

//score
let scoreQu = document.querySelector('#score_question');



//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");


// next button
let next_question = document.querySelector("#next_question");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");

// error message
let erroeP = document.querySelector('.error-name');

//input name
let nameQuiz = document.querySelector('#name');

//leaderboard
let leaderbordBut = document.querySelector('#leaderboard');

//leaderboardList
let contLe = document.querySelector('#LeaderBordScores');

// score
let score =0;

// index question array
let index = 0;




// button leaderBoard
leaderbordBut.addEventListener('click',()=>{
    firstScreen.style.display ="none";
    contLe.style.display ="block";


//     const LScores = JSON.parse(localStorage.getItem("Score")) ;
       
//     const score = {
//       name: nameQuiz.value,
//       score: scoreQu,  
//     };


//     LScores.push(score);
//     LScores.sort((a, b) => b.score - a.score);
//     LScores.splice(5);
  
//     localStorage.setItem("Score", JSON.stringify(LScores));



//     const ScoresList = document.getElementById("ScoresList");
  


//     ScoresList.innerHTML = LScores
//   .map(score => {
//     return `<li class="ScoresList">${score.nameQuiz} : ${score.scoreQu}</li>`;
//   })
//   .join("");

   
});





// Start Button 
start.addEventListener("click", (e) => {

    e.preventDefault();
    
    if(nameQuiz.value == ""){
        erroeP .textContent ="Please Enter Name .....";
    }

    else{
        firstScreen.style.display = "none";
        quiz .style.display ='block';
        loadData();
       
    }




});


// question and choice data from array in script question
function loadData(){
    questionNo.textContent = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
    scoreQu.textContent = score;
    
}




//next button click
next_question.addEventListener('click',()=>{
    index ++;

    if(MCQS.length>index){
        questionNo.textContent = index+1;

        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        });


     

       
        loadData();
      
      
        
       

    }

    if(MCQS.length -1 === index){
        quiz.style.display ='none';
        firstScreen.style.display ='block';
        erroeP.textContent="";
        nameQuiz.value="";
    }

});



choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");

        if (choiceNo === MCQS[index].answer) {
           score++;


         /*LocalStorae*/

     
       
         const scoreDta = {
           name: nameQuiz.value,
           score: score,  
         };


       
       
         localStorage.setItem("score", JSON.stringify(scoreDta));



         // LeaderBoard
      
       const ss = JSON.parse(localStorage.getItem("score"));

          ss.push(ss);
         ss.sort((a, b) => b.scoreDta - a.scoreDta);
         ss.splice(5);

         const highScoresList = document.getElementById("ScoresList");
      
         
         // Show Leaderboard
         highScoresList.innerHTML = ss
           .map(score => {
             return `<li class="high-score">${scoreDta.name} : ${scoreDta.score}</li>`;
           })
           .join("");


       


           
        } else {
            score += 0;
        }

         
       
      
    })
});













