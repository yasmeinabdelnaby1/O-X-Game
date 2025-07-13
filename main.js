const board = document.querySelector(".board");
const title = document.querySelector(".title");

let currentPlayer = "x";

const handleClick = (e) => {
    const cellIndex = e.target.dataset.index;
    // console.log(cellIndex); 
    if (cells[cellIndex]) return; // all fileds is full
    updateCell(cellIndex, currentPlayer);
  
    const winner = checkWinner() ;
    //( (x) or (o) is winner ) or cells ia full 
  //  alert (winner ? `player ${winner} Wins ` : "Its a Draw!")}} 
   function autoRestart() {
      setTimeout(() => {
        resetGame()
    }, 2000);
    
   }
  if (winner || !cells.includes(undefined)) {
  if (winner) {
    title.innerHTML = `Player ${winner} Wins!` ;
  } else {
  title.innerHTML = "It's a Draw!";
  }
  autoRestart()
}}

const updateCell = (index, value) => {
    cells[index] = value; //select index and update
    const cell = board.querySelector(`[data-index="${index}"]`)
    cell.textContent = value // write value (x,o) in cell
    cell.classList.add(value === "x" ? "player-x" : "player-o")
    // switch
    currentPlayer = (currentPlayer === "x" ? "o" : "x")
   // console.log(cells);
 if (currentPlayer === "x") {
    title.innerHTML="current Player is X"
 } else if (currentPlayer === "o"){
        title.innerHTML="current Player is O"
 }
}


function checkWinner() {
    const winningComdos = [
        [0, 1, 2], // 0 = 1 = 2
        [3, 4, 5], // 3 = 4 = 5
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combo of winningComdos) {

        const [a, b, c] = combo;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a]        
        }}

    return null;
}

const resetGame = () =>{
  title.innerHTML = "";
    cells = Array.from({length: 9}) ;
    currentPlayer = "o";
    board.querySelectorAll(".cell").forEach( (cell)=> {
            cell.textContent="";
            cell.classList.remove("player-x" , "player-o");  
        }
    )

}

let cells = Array.from({ length: 9 });
cells.forEach((cell, index) => {
  cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    cell.addEventListener("click", handleClick)
    board.appendChild(cell)

})

checkWinner()














