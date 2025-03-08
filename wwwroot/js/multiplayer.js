let currentPlayer = "X"; // Start with player X

function makeMove(row, col) {
    let cell = document.getElementById("board").rows[row].cells[col];

    if (cell.innerHTML === "") {
        cell.innerHTML = currentPlayer;
        connection.invoke("SendMove", row, col, currentPlayer);

        // Switch turn between X and O
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateTurnDisplay();
    }
}

connection.on("ReceiveMove", (row, col, player) => {
    document.getElementById("board").rows[row].cells[col].innerHTML = player;

    // Ensure turn switches
    currentPlayer = player === "X" ? "O" : "X";
    updateTurnDisplay();
});

function updateTurnDisplay() {
    document.getElementById("turnIndicator").innerText = `Player ${currentPlayer}'s Turn`;
}
