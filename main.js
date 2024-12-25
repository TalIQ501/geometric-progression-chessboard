const boardContainer = document.getElementById('board-container');
const seriesManualDisplay = document.getElementById('series-manual');
const seriesFormulaDisplay = document.getElementById('series-formula');
const expSeriesDisplay = document.getElementById('exponent-series');
const geometricRatio = document.getElementById('geometric-ratio');     
let sumSoFar = 0;

const createSquare = (board, row, squareId) => {
    // Create Box in Grid
    const square = document.createElement('div');

    // Give each box an ID and the general class
    square.setAttribute('id', `${squareId}`);
    square.classList.add('chessboard-square');

    square.setAttribute('onclick', `handleSquareClick(${square.id})`);

    if (row % 2 == 0) {
        if (squareId % 2 == 0) {
            square.classList.add('chessboard-square-dark');
        } else {
            square.classList.add('chessboard-square-light');
        }
    } else {
        if (squareId % 2 == 0) {
            square.classList.add('chessboard-square-light');
        } else {
            square.classList.add('chessboard-square-dark');
        }
    }
    
    const hoverText = document.createElement('div');
    hoverText.classList.add('hover-text');
    hoverText.textContent = `${squareId}`;

    square.appendChild(hoverText);

    // Add Box to Row
    board.appendChild(square);
};

const createBoard = (output, boardSize) => {
    const board = document.createElement('div');
    board.setAttribute("id", "board");
    board.classList.add('chessboard');
    output.appendChild(board);

    let row = 1;

    for (let i = 1; i <= boardSize; i++) {
        createSquare(board, row, i);
        if (i % 8 == 0) {
            row += 1;
        }
    }
};

createBoard(boardContainer, 64);

const handleSquareClick = (id) => {
    updateRatio(id);

    //Using Formula
    seriesFormula = (2 ** id - 1) / (2 - 1);

    updateSeriesFormulaDisplay(seriesFormula);
};

const updateSeriesFormulaDisplay = (series) => {
    seriesFormulaDisplay.textContent = series;
}

const updateExpSeriesDisplay = (series) => {
    expSeriesDisplay.textContent = series;
}

const updateRatio = (ratio) => {
    geometricRatio.textContent = ratio
}