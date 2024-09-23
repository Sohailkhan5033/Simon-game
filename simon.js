let gameseq=[];
let high=0;

let userseq=[];

let Level=0;
let h3=document.querySelector("h3");
let btn=["red","pink","blue","yellow"]

let start=false;
let h2=document.querySelector("h2");

h2.innerHTML=`High is is ${high}`;

document.addEventListener('keypress', function(e) {
    if(start==false)
    {
        console.log("Start");
        start=true;
        levelup();   
    }
});


function check(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
    }
}
   else{
      
        danger();
        reset(idx);
    }}


function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function()
    {btn.classList.remove("flash")}
    , 250);}


function danger() {
    // Add the danger class to the body
    document.body.classList.add("danger");
    
    // Remove it after 250ms
    setTimeout(() => {
        document.body.classList.remove("danger");
    }, 250);}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function()
    {btn.classList.remove("userflash")}
    , 250);}


function levelup(){
    Level++;
    h3.textContent=`Level ${Level}`;
    userseq=[];
    let rndindex=Math.floor(Math.random()*btn.length);
    let rancolor=btn[rndindex];
    let radbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log("gameseq: " + gameseq);
    gameflash(radbtn);
}


function btnpress(){
    let btn=this;
    userflash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log("userseq: " + userseq);
    check(userseq.length-1);}


    let buttons = document.querySelectorAll(".inner");
 for(let btn of buttons)
 {
     btn.addEventListener("click", btnpress);
 }



function reset(idx){
    if(Level>high)
    {
        high=Level;
        h2.innerText=`High score is ${Level}`;
    }
       
       
        h3.innerHTML = `Gameover! You score <b>${Level}</b> Press any key to Restart`;
        
        start = false;
        Level = 0;
        userseq = [];
        gameseq = [];
}




