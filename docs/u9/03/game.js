const tttTable = document.querySelector('#ttt');

tttTable.addEventListener('click', onClickMethode);

let turn = true;

class cell {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.clicked = false;
        this.owner = '';
    }
    setOwner (owner) {
        this.owner = owner;
    }
    setClicked () {
        this.clicked = true;
    }
}
const cells = [];
cells[0] = [false, false, false];
cells[1] = [false, false, false];
cells[2] = [false, false, false];


function onClickMethode (e) {
    const clickedCell = e.target;
    if (clickedCell.nodeName === 'TD' && clickedCell.textContent !== '') {
        if (turn) {
            clickedCell.className = 'xDisplay';
            clickedCell.innerHTML = '<svg><use xlink:href="#cross"/></svg>';
        } else{
            clickedCell.className = 'oDisplay';
            clickedCell.innerHTML = '<svg><use xlink:href="#circle"/></svg>';
        }
        const cellPosition = clickedCell.id.split(',');
        const cell = cells[cellPosition[0]][cellPosition[1]];
        cell.setClicked();
        cell.setOwner(turn ? 'X' : 'O');
        turn = !turn;
        testIfWon(cell);
    }
}

function testIfWon(clickedCell) {
    winningCombination = [
        [cells[0][0], cells[0][1], cells[0][2]],
        [cells[1][0], cells[1][1], cells[1][2]],
        [cells[2][0], cells[2][1], cells[2][2]],
        [cells[0][0], cells[1][0], cells[2][0]],
        [cells[0][1], cells[1][1], cells[2][1]],
        [cells[0][2], cells[1][2], cells[2][2]],
        [cells[0][0], cells[1][1], cells[2][2]],
        [cells[0][2], cells[1][1], cells[2][0]]
    ];
    for (const winningCombinationKey in winningCombination) {
        for (const cell in winningCombinationKey) {
            if(cell.clicked) {

            }
        }
    }

}