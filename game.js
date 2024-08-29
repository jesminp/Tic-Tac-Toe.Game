let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let true0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// reset the game;
const resetgame =()=>{
    true0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        //console.log("clicked me");
        //box.innerText ="0";
        if(true0== true){ //player0
            box.innerText ="0";
            true0 = false;
        } else{   //playerx
            box.innerText ="X";
            true0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
}); 
//disable box after the winner diclare 
// create function
const disableboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
        //box.innerText ="";
    }
}
// enable box 
const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
// this method for winner person;
const showwinner =(winner)=>{
    msg.innerText =`congratulation , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
 const checkwinner =() =>{
    for(let pattern of winpattern){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(
        let pos1=   boxes[pattern[0]].innerText;
        let pos2=  boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        //);
        if(pos1 !="" && pos2 !=="" && pos3!==""){
            if(pos1 ===pos2 && pos2 ===pos3){
                //console.log("winner");
                showwinner(pos1);
            }
        }
    }
 };

 resetbtn.addEventListener("click", resetgame);
 newGameBtn.addEventListener("click", resetgame);

