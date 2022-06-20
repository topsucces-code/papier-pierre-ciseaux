


var playRounds = (playSelection, computerSelection)=>{
    
if (playSelection == computerSelection){
return "you eguality ! repeat"
}
if (playSelection != computerSelection && computerSelection === "Scissors" && playSelection === "Rock"){
return "you winned ! Rock beat Scissors"
}
if (playSelection != computerSelection && computerSelection === "Rock" && playSelection === "Scissors"){
    return "you lose ! Rock beat Scissors"   
}
if (playSelection != computerSelection && computerSelection === "Rock" && playSelection === "Paper"){
    return "you winned ! Paper beat Rock"
}
if(playSelection != computerSelection && computerSelection === "Paper" && playSelection==="Rock"){
    return "you lose ! Paper beat Rock"
}
if(playSelection != computerSelection && computerSelection === "Scissors" && playSelection ==="Paper"){
        return "you lose ! Scissors beat Paper"
}
else{
    return "you winned ! Scissors beat Paper"
}

};








let reset = document.querySelector("#reset");
let arr = document.querySelectorAll(".selection");
let game =()=>{

        let m = 0;
        let n = 0;
        let g = 0;
        let b = 0;

       
        
for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    elem.onclick =  function(e){
        n++;

        let computerPlay = ()=>{
    
            let random = Math.floor(Math.random()*10);
        console.log(random)
            
            if(random<=3){
               return  "Rock"
            }
           if(random>3 && random<7){
               return  "Paper"
            }
            else{
            return "Scissors"
               };
        
        
               };

         const computerSelection = computerPlay();
        document.querySelector("#recupere").innerHTML = "player play: " + e.target.innerText;
        let nbre = playRounds(e.target.innerText, computerSelection);
        document.querySelector("#result").innerHTML += n+" : "+nbre + "<br>";
        document.querySelector("#computer").innerHTML ="computer play :" + computerSelection;

        
            
            console.log(n+": "+ nbre);
        console.log(e);


        if(e.target && nbre.match(/win/ig)){
            m++;
        console.log(m+": "+ nbre.match(/win/ig));
        
        console.log(m)
        }
        if(e.target && nbre.match(/lose/ig)){
            g++;
            console.log(g+": "+ nbre.match(/lose/ig));
            
            console.log(g)
        }
        if(e.target && nbre.match(/eguality/ig)){
            b++;
            console.log(b+": "+ nbre.match(/eguality/ig));
            
            console.log(b)
        }
        if(e.target && n==5 && m<g){
            console.log(n + " " + m +": "+ g);
            console.log("Game over ! you lose");
            document.getElementById("gameOver").innerHTML = "Game over! you lose";
        }
        if(e.target && n==5 && m>g){
            console.log(n + " " + m +": "+ g);
            console.log("Game over ! you win")
            document.getElementById("gameOver").innerHTML = "Game over! you win";
        }
        if(e.target && n==5 && m==g && (b==1||b==3)){
            console.log(n + " " + m +": "+ g);
            console.log("Game over !  eguality");
            document.getElementById("gameOver").innerHTML = "Game over! equality";
        }
        if(n>5){
            document.getElementById("result").innerHTML = "You must Reset to play another round <br>";
            console.log("reset")
            
        }
        

        
    }
    
};
reset.onclick = function() {
    
    document.getElementById("result").innerHTML = "";
    document.getElementById("gameOver").innerHTML = "";
    document.getElementById("recupere").innerHTML = " player :";
    document.getElementById("computer").innerHTML = "computer play :";
   n = 0;
   g = 0;
   b = 0;
   m = 0;
}
    }



console.log(game());




