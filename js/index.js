
class phrase {
    constructor(phrase, correctPhrase, wrongPhrase){
        this.phrase = phrase
        this.correctPhrase = correctPhrase
        this.wrongPhrase = wrongPhrase
    }
}

let firstPhrase = new phrase("ele cortou-se com a faca.","Pronome reflexivo","Partícula de realce")
let secondPhrase = new phrase("Rangel lambeu-se após se lambuzar com doce.","Pronome reflexivo","Partícula de realce")
let thirdPhrase = new phrase("Passavam-se dias e nada acontecia.","Partícula de realce","Partícula integrante do verbo pronominal")
let fourthPhrase = new phrase("Viveu-se a alegria daquela vida sonhada.","Partícula de realce","Partícula integrante do verbo pronominal")
let fifthPhrase = new phrase("As pessoas queixaram-se dos problemas do prédio.","Partícula integrante do verbo pronominal ","Partícula de realce")
let sixthPhrase = new phrase("Entristeceu-se ao ver o estado do menino.","Partícula integrante do verbo pronominal ","Conjunção subordinada integrante")
let seventhPhrase = new phrase("Perguntei se ela estava bem.","Conjunção subordinada integrante ","conjunção subordinativa condicional")
let eighthPhrase = new phrase("Se todos tivessem estudado , as notas seriam altas.","conjunção subordinada adverbial condicional","Conjunção subordinada integrante")
let ninethPhrase = new phrase("Os policiais feriram-se no confronto","Pronome reflexivo.","conjunção subordinativa condicional")
let tenthPhrase = new phrase("Todos poderão entrar se possuírem convites.","conjunção subordinativa condicional","Partícula de realce")

let phrases=[firstPhrase,secondPhrase,thirdPhrase,fourthPhrase,fifthPhrase,sixthPhrase,seventhPhrase,eighthPhrase,ninethPhrase,tenthPhrase]

function checkAnswer(phrase, alternative){
    
    let boolean 
    if(phrase.correctPhrase === alternative){
        boolean= true
        if(status === 0) points+=10
        status = 1
    }
    else{
        boolean= false
        status = 1
    }
    
    showResult(boolean)

}

function showResult(boolean){
    if(boolean){
        result.style.color = "greenyellow"
        
        result.innerHTML= "Você acertou!"
        
    }else{
        
        result.style.color = "red"
        
        result.innerHTML= `Você errou, a resposta correta é: ${correctAnswer}`
    }
    
    
}

function choosePhrase(){

    let i = Math.floor(Math.random() * phrases.length)
    

    selectedPhrase = phrases[i]

    let phrase = document.querySelector("#selected-phrase")
    correctAnswer = selectedPhrase.correctPhrase
    wrongAnswer = selectedPhrase.wrongPhrase

    let answer = [correctAnswer,wrongAnswer]

    let e = Math.floor(Math.random() * answer.length)
    leftButton.innerHTML = answer[e]
    answer.splice(answer.indexOf(answer[e]),1)

    let o = Math.floor(Math.random() * answer.length)
    

    phrase.innerHTML = selectedPhrase.phrase

    rightButton.innerHTML = answer[o]

    result.innerHTML = ""
    status = 0
    // console.log(phrases.length)
    // console.log(i)
    // console.log(selectedPhrase.phrase)
    
    
    phrases.splice(phrases.indexOf(phrases[i]),1)
    if(phrases.length===0) end()
    
    // console.log(selectedPhrase.phrase)
    // console.log(phrases)

}

function deleteButtons(){
    let buttonsDiv = document.querySelector("#buttons")
    buttonsDiv.style.display= "none"
}

function end(){
    deleteButtons()
    firstH1.innerHTML = "O seu resultado foi:"
    secondH1.innerHTML= `${points} pontos`

    let phrase = document.querySelector("#selected-phrase")
    
    if(points === 100) phrase.innerHTML= "Parabéns, você acertou tudo!"
    if(points === 90) phrase.innerHTML= "Muito bom, quase lá!"
    if(points === 80 || points === 70) phrase.innerHTML= "Você foi muito bem!"
    if(points < 61 || points > 39) phrase.innerHTML= "Você consegue melhorar!"
    if(points < 39) phrase.innerHTML= "Precisa estudar mais!"

    result.innerHTML=""

    
}

let status = 0
let points = 0
let selectedPhrase
let correctAnswer
let wrongAnswer

let firstH1 = document.querySelector("#first-h1")
let secondH1 = document.querySelector("#second-h1")
let result = document.querySelector("#result")

let leftButton = document.querySelector("#left-button")
let rightButton = document.querySelector("#right-button")
let nextButton = document.querySelector("#next")

let buttons=[leftButton,rightButton]

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{

        checkAnswer(selectedPhrase,button.innerHTML)

    })
})

nextButton.addEventListener("click",choosePhrase)

choosePhrase()
