/*----- functions -----*/
init(100);

function init(n) {
    createBoard(n);
    let initialArr = generateRandom(n);
    setTimeout(generateNext(initialArr), 0);
}

function createBoard(n) {
    let grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${n}, 4rem)`;
    grid.style.gridTemplateRows = `repeat(${n}, 4rem)`;
    grid.style.width = `${n * 4}rem`;
    grid.style.height = `${n * 4}rem`;
    for (let i = 0; i < n * n; i++) {
        let newEl= document.createElement('div');
        newEl.classList.add('space');
        newEl.id= i.toString();
        grid.appendChild(newEl);
    }
}

function generateRandom(n) {
    let arr = [];
    for (i = 0; i < n * n; i++) {
        if (Math.random() > 0.65) {
            arr.push(1);
        }
        else {
            arr.push(0);
        }
    }
    return arr;
}

function generateNext(arr) {
    let nextBoard = [];
    arr.forEach(function(cell, idx) {
        let liveCells = checkSurroundings(arr, idx)
        if (cell) {
            if (liveCells === 2 || liveCells === 3) nextBoard.push(1);
            else {
                nextBoard.push(0);
            }
        }
        else {
            if (liveCells === 3) nextBoard.push(1);
            else {
                nextBoard.push(0);
            }
        }
    })
    renderBoard(nextBoard);
    setTimeout(function() {
        generateNext(nextBoard);
    }, 200)
}

function renderBoard(arr) {
    arr.forEach((space, idx) => {
        if (space === 1) document.getElementById(idx).style.backgroundColor = 'green';
        else {
            document.getElementById(idx).style.backgroundColor = 'white'
        }
    });
}   

function checkSurroundings(arr, idx) {
    let n = Math.sqrt(arr.length);
    let counter = 0;
    if (arr[idx - n - 1] && idx % n !== 0) counter += arr[idx - n - 1];
    if (arr[idx - n]) counter += arr[idx -n];
    if (arr[idx - n + 1] && idx % n !== n - 1) counter += arr[idx - n + 1];
    if (arr[idx - 1] && idx % n !== 0) counter += arr[idx - 1]; 
    if (arr[idx + 1] && idx % n !== n - 1) counter += arr[idx + 1];
    if (arr[idx + n - 1] && idx % n !== 0) counter += arr[idx + n - 1];
    if (arr[idx + n]) counter += arr[idx + n]
    if (arr[idx + n + 1] && idx % n !== n - 1) counter += arr[idx + n + 1];
    return counter;
}