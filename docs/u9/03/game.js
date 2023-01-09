const tttTable = document.querySelector('#ttt');

let turn = true;

tttTable.addEventListener('click', onClickMethode);



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
        turn = !turn;
    }
    testIfWon(clickedCell);
}

function testIfWon(clickedCell) {
    const cells = tttTable.querySelectorAll('td');
    const winningCombinations = [
        [cells[0], cells[1], cells[2]],
        [cells[3], cells[4], cells[5]],
        [cells[6], cells[7], cells[8]],
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]],
        [cells[0], cells[4], cells[8]],
        [cells[2], cells[4], cells[6]]
    ];
    //todo: check if the clicked cell is part of a winning combination
    
}