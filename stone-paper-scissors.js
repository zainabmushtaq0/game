let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");

// getting choice
let userscore=document.getElementById("userscore");
let compscore=document.getElementById("compscore");
let option=document.getElementsByClassName("option");
let msg=document.getElementById("msg");


let userchoice;
let compchoice;
let uscore=0;
let cscore=0;
let options=["rock","paper", "scissors"];

// random function
function random(num){
    return Math.floor(Math.random()*(num+1));
}
function check(){
    if(userchoice==compchoice)
    {
        console.log("draw");
        msg.innerText="DRAW!"
        // msg.style.transform="scale(1.2)";
    }

    if(userchoice=="rock"&& compchoice=="paper")
       {
         console.log("you lose");
        cscore++;
compscore.innerText=cscore;
msg.innerText="YOU LOSE! Rock VS Paper";
          }

    if(userchoice=="paper"&& compchoice=="rock")
       { console.log("you win");
        uscore++;
        userscore.innerText=uscore;
        msg.innerText="YOU WON! Paper VS ROCK";

       }
    if(userchoice=="rock"&& compchoice=="scissors")
    {
        console.log("you win");
        uscore++;
      userscore.innerText=uscore;
      msg.innerText="YOU WON! Rock VS Scissors";
    }
    if(userchoice=="scissors"&& compchoice=="paper")
    {
        console.log("you win");
        uscore++;
        userscore.innerText=uscore;
        
        msg.innerText="YOU WON! Scissors VS Paper";
    }
    if(userchoice=="paper"&& compchoice=="scissors")
       { console.log("you lose");
     cscore++;
compscore.innerText=cscore;
msg.innerText="YOU LOSE! Paper VS Scissors";}

    if(userchoice=="scissors"&& compchoice=="rock")
        {console.log("you lose");
            cscore++;
            compscore.innerText=cscore;
            msg.innerText=" YOU LOSE! (Scissors vs ROCK)";
        }

}

rock.addEventListener('click', function run(){

rock.style.border="10px solid pink";
rock.style.opacity="80%";

userchoice="rock";
 compchoice=options[random(2)];
check();

});

paper.addEventListener('click', function run(){
paper.style.border="10px solid pink";
paper.style.opacity="80%"
// paper.style.transition="1s all ease-out";
userchoice="paper";
 compchoice=options[random(2)];
check();

});
scissors.addEventListener('click', function run(){
scissors.style.border="10px solid pink";
scissors.style.opacity="80%";
userchoice="scissors";
 compchoice=options[random(2)];
check();
});
rock.addEventListener('mouseout', function run(){
rock.style.border="none";
rock.style.opacity="100%";

});
paper.addEventListener('mouseout', function run(){
paper.style.border="none";
paper.style.opacity="100%";

});
scissors.addEventListener('mouseout', function run(){
scissors.style.border="none";
scissors.style.opacity="100%";

});




// _________________________________________________________________________



paper.onclick=function(){
    paper.classList.toggle("bigpaper");
}



// paper.addEventListener("click",()=>{
//     paper.classList.toggle("mouseout");
// })

