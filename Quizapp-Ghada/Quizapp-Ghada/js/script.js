let start = document.querySelector("#start");
let continueBtn = document.querySelector("#continue");

let quiz = document.querySelector("#quiz");

let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");


let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");


let choice_que = document.querySelectorAll(".choice_que");

let index = 0;


//total points
let correct = 0;

//store Answer Value
let UserAns = undefined;

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    start.style.display = "none";
    quiz .style.display ='block';
    loadData();
    // guide.style.display = "block";
});


function loadData(){
    questionNo.textContent = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;
    
}

choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceNo === MCQS[index].answer) {
            correct++;
        } else {
            correct += 0;
        }
        //stop Counter
        clearInterval(interval);

        //disable All Options When User Select An Option
        for (i = 0; i <= 3; i++) {
            choice_que[i].classList.add("disabled");
        }
    })
});


next_question.addEventListener('click',()=>{
    index ++;
    if(MCQS.length>index){
        questionNo.textContent = index+1;
        loadData();

    }else{
        console.log('error')
    }

    if(MCQS.length -1 === index){
        quiz.style.display ='none';
        start.style.display ='block';
    }

})
