const cards = document.querySelectorAll(".card");
const startGameBtn = document.querySelector(".startGameBtn");
const playerInput = document.querySelector(".playerInput")
const inputOne = document.getElementById("playerOne");
const inputTwo = document.getElementById("playerTwo");
const playerTurnIndicator = document.getElementById("playerTurnIndicator");

let playerTurn = 0;

let players = [
    {name:"", symbol:"X"},
    {name:"", symbol:"O"}
]

startGameBtn.addEventListener("click", startGame)

function startGame() {
    if (inputOne.value == "" || inputTwo.value == "") {
        alert("You need to add players");
        return;
    }
    players[0].name = inputOne.value;
    players[1].name = inputTwo.value;
    playerTurnIndicator.textContent = `${players[playerTurn].name}'s turn`;

    playerInput.style.display = "none";
    cards.forEach(card => {
        card.addEventListener("click", handleClick)
    });
}

function handleClick(e) {
    let card = e.target; 
    card.style.pointerEvents = "none";
    card.textContent = players[playerTurn].symbol;
    playerTurn = (playerTurn + 1) % 2;
    playerTurnIndicator.textContent = `${players[playerTurn].name}'s turn`;
}