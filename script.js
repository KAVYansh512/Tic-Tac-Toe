let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset-btn");
let newGame= document.querySelector(".newGame");
let result= document.querySelector(".result");
let msg= document.querySelector(".msg");

let counter= 0;
let turnX= true;
let winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const drawGame= () => {
    msg.innerText= "Game-Draw!";
    result.classList.remove("hide");
}
let restartGame= () => {
    turnX= true;
    counter=0;
    boxes.forEach((box) => {
        box.innerText= "";
        box.disabled= false;
        result.classList.add("hide");
    })
}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerText= "X";
            turnX=false;
        }
        else{
            box.innerText= "O";
            turnX=true;
        }
        box.disabled= true;
        counter++;
        checkWinner();
    });
});



let showWinner = (pos1) => {
    msg.innerText= `Congatulations, Winner is ${pos1}`;
    result.classList.remove("hide");
}
let checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1==pos2&&pos2==pos3)
            {
                showWinner(pos1);
            }
            else if(counter>=9)
            {
                drawGame();
            }
        }

    }
}
newGame.addEventListener("click", restartGame);
resetBtn.addEventListener("click", restartGame);