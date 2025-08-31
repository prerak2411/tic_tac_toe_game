let boxes=document.querySelectorAll(".box");
let btn1=document.querySelector(".btn1");
let newbtn1=document.querySelector(".newbtn1");
let h4=document.querySelectorAll("h4");
let msg=document.querySelector(".msg");



const resetgame=()=>{
    player=true;
    enablebtn();
        msg.classList.add("hide");


};

let player=true;
const winne=[
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6], 
];
const showwinner=()=>{
    h4.innerText=`You are the Inner`;
    msg.classList.remove("hide");
};

const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box)=>{
box.addEventListener(("click"),()=>{

if(player===true){
    box.style.color="purple";
    box.innerHTML="<b>X</b>"
    player=false;
}
else{
        box.style.color="rose";

        box.innerHTML="<b>0</b>"
            player=true;

}
box.disabled=true;
checkwinner( );

    


})
});
const checkwinner=()=>{
    for(let winner of winne){
        if(boxes[winner[0]].innerText!=""
            &&boxes[winner[1]].innerText!=""
            &&boxes[winner[2]].innerText!="")


    if(boxes[winner[0]].innerText===boxes[winner[1]].innerText
        &&boxes[winner[1]].innerText===boxes[winner[2]].innerText){
        console.log(` congrats! ${boxes[winner[0]].innerText} is the winner`);
        disablebtn();
        showwinner();
    }}
}
btn1.addEventListener("click",resetgame);
newbtn1.addEventListener("click",resetgame);


