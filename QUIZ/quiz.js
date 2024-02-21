//Question bank
var questionBank= [
    {
        question : 'Who created Python?',
        option : ['A. Guido van Rossum', 'B. Elon Musk', 'C. Bill Gates', 'D. Mark Zuckerburg'],
        answer : 'A. Guido van Rossum'
    },
    {
        question : 'What year was Python created?',
        option : ['A. 1989', 'B. 1991', 'C. 2000', 'D. 2016'],
        answer : 'B. 1991'
    },
    {
        question : 'Python is tributed to which comedy group?',
        option : ['A. Lonely Island', 'B. Smosh', 'C. Monty Python','D. SNL'],
        answer : 'C. Monty Python'
    },
    {
        question : 'Is the Earth round?',
        option : ['A. True','B. False', 'C. sometimes', ' D. What is Earth?'],
        answer : 'A. True'
    },
    {
        question : 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in',
        option : ['A.1967','B.1968','C.1958','D.1922'],
        answer : 'A. 1967'
    },
    {
        question : 'Which was the worlds first successful electronic computer?',
        option : ['A.PARAM','B.CRAY-1','C.Pascaline','D.ENIAC electronic Numerical Integrator and computer'],
        answer : 'D.ENIAC electronic Numerical Integrator and computer'
    },
    {
        question :'Which of the following is also called translator?',
        option :['A.Data representation','B. MS-DOS','C.Operating System','D.Language Processor'],
        answer :'D.Language Processor'
    },
    {
        question :'Who among the following is considered as the father of artificial intelligence?',
        option :['A.Charles Babbage','B.Lee De Forest','C.John McCarthy','D.JP Eckert'],
        answer :'C.John McCarthy'
    },
    {
        question :'Who invented mechanical calculator called Pascaline?',
        option :['A.Alphabet per strike','B.Blaise pascal','C.Strike per Inch','D.Dots per Inch'],
        answer :'B.Blaise pascal'
    },
    {
        question :'In which decade was the Internet first implemented?',
        option :['A.1960','B.1940','C.1970','D.1999'],
        answer :'A.1960'
    },
    {
        question :'Where are the contents of your computers hard drive indexed?',
        option :['A.Yahoo','B.Google','C.MSN','D.None of the above'],
        answer :'D.None of the above'
    },
    {
        question :'ISP stands for:',
        option : ['A.Internet Survey Period','B.Integrated Service Provider','C.Internet Service Provider','D.Internet Security Protocol'],
        answer :'C.Internet Service Provider'
    },
    {
        question :'The http you type at the beginning of any sites address stands for',
        option :['A.HTML Transfer Technology Process','B.HyperText Transfer Protocol','C.Hyperspace Techniques & Tech Progress','D.Hyperspace Terms and Tech Protocol'],
        answer :'B.HyperText Transfer Protocol'
    },
    {
        question :'Which company created the most used networking software in the 1980s:',
        option :['A.sun','B.Microsoft','C.IBM','D.Novell'],
        answer :'A.sun'
    },
    {
        question :'Which was the first virus detected on ARPANET,the forerunner of the internet in the early 1970',
        option :['A.Exe Flie','B.Creeper Virus','C.Peeper Virus','D.Trozen horse'],
        answer :'B.Creeper Virus'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
