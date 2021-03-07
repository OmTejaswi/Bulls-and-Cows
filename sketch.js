var word, bull , cow;
var rand;
var s;
var cword;
var input, submitBtn;
var lowerCase;
var bulls = 0, cows = 0; 

function setup(){
    createCanvas(windowWidth, windowHeight)
    word = createElement("h2").html("Your  Word").position(400,25);
    bull = createElement("h2").html("Bulls").position(600,25);
    cow = createElement("h2").html("Cows").position(800,25);
    input = createInput("","[A-Za-z]").attribute("placeholder","Guess A Word").position(550,
        350);

    submitBtn = createButton("SUBMIT").position(600,400)
    rand = Math.round(random(0,s.length-1))
    cword = s[rand];
}

function draw() {
    background(255);
    submitBtn.mousePressed(function(){
        var wo = input.value();
        lowerCase = wo.toLowerCase();
        bulls = 0;
        cows = 0;

        console.log(lowerCase)
        if(wo.length !== 4) {
            alert("Please Eneter A Valid 4 Letter Word");
        }

        if(cword.charAt(0) === lowerCase.charAt(0)){
            bulls+=1;
        }
        if(cword.charAt(1) === lowerCase.charAt(1)){
            bulls+=1;
        }
        if(cword.charAt(2) === lowerCase.charAt(2)){
            bulls+=1;
        }
        if(cword.charAt(3) === lowerCase.charAt(3)){
            bulls+=1;
        }

        if(cword.charAt(0) === lowerCase.charAt(1) ||
            cword.charAt(0) === lowerCase.charAt(2) ||
            cword.charAt(0) === lowerCase.charAt(3) ||
            cword.charAt(0) === lowerCase.charAt(0)) {
                cows += 1;
            }

            if(cword.charAt(1) === lowerCase.charAt(0) ||
                cword.charAt(1) === lowerCase.charAt(2) ||
                cword.charAt(2) === lowerCase.charAt(3) || 
                cword.charAt(1) === lowerCase.charAt(1)) {
                    cows += 1;
            }

            if(cword.charAt(2) === lowerCase.charAt(0) ||
                cword.charAt(2) === lowerCase.charAt(1) ||
                cword.charAt(2) === lowerCase.charAt(3) || 
                cword.charAt(2) === lowerCase.charAt(2)) {
                    cows += 1;
            }

            if(cword.charAt(3) === lowerCase.charAt(0) ||
                cword.charAt(3) === lowerCase.charAt(2) ||
                cword.charAt(3) === lowerCase.charAt(1) || 
                cword.charAt(3) === lowerCase.charAt(3)) {
                    cows += 1;
            }

        console.log("bulls:"+bulls)
        console.log("cows:"+cows)

        
    })
if(bulls !== 0 || cows !== 0) {
    fill(0);
    textSize(20);
    text(bulls,600,100);
    text(cows,820,100)
    textAlign(CENTER);
    text(lowerCase,450,100)
}


}