var ques = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "The 'function' and  'var' are known as",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    },

    {
        id: 3,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    }
    ,
    {
        id: 4,
        question: "who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    },
    {
        id: 5,
        question: "Inside which HTML element do we put the JavaScript?",
        options: {
            a: "js",
            b: "javascript",
            c: "script",
            d: "scripting",

        },
        answer: "script"
    }
    ,
    {
        id: 6,
        question: "Which of the following property is used to control the repetition of an image in the background?",
        options: {
            a: "background-color",
            b: "background-image",
            c: "background-repeat",
            d: "background-position",

        },
        answer: "background-repeat"
    }
    
]

var fulName = document.getElementById("fulName")
var FulEmail = document.getElementById("FulEmail")
var Questions = document.getElementById("Questions")
var option = document.getElementById("option")

var nowCount =document.getElementById("nowCount")
var totalCount =document.getElementById("totalCount")
totalCount.innerHTML = ques.length

funame = localStorage.getItem("fname")
luname = localStorage.getItem("lname")
fulName.innerHTML = `${funame} ${luname}`
FulEmail.innerHTML = localStorage.getItem("email")
var indexNo = 0


var counter = document.getElementById("counter")


function Startcounter(){

    counter.innerHTML++
    if(nowCount.innerHTML == totalCount.innerHTML){
        clearInterval(bas)
        counter.innerHTML = "00"
        console.log("Bas")
    }

    else if(counter.innerHTML > 5){
            indexNo++
            nowCount.innerHTML++
            startquiz()
            counter.innerHTML = ""
                   
        
    }
}



function startquiz(){




   
    Questions.innerHTML = ques[indexNo].question + "?"

    
    option.innerHTML = ""
    for (var key in ques[indexNo].options) {
    var alloption = ques[indexNo].options[key]
    option.innerHTML += `<li>${alloption}</li>`

    }

    
      
    
}




function Nxt(){
    if(indexNo < ques.length-1){
        counter.innerHTML = ""
        indexNo++
        nowCount.innerHTML++
        startquiz()
    }

}

var bas = setInterval(Startcounter, 1000)
