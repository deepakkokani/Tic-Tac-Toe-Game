let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbutton");
let newbtn = document.querySelector("#newbutton");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true //playerO and playerX;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO == true)
        {
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disbaleBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disbaleBoxes();
    img.style.display = "block"; //show the image
};

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("Winner", pos1Val)

                showWinner(pos1Val);
            }
            else if (isBoardFull()) 
            {
                showDraw();
            }
            
        }
    };
};

const isBoardFull = () => {
    return Array.from(boxes).every(box => box.innerText !== "");
};

const showDraw = () => {
    msg.innerText = "Match draw! Play Again";
    msgcontainer.classList.remove("hide");

    img.style.display = "none"; //remoe the image
};

const resetGame = () =>{
    let turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);