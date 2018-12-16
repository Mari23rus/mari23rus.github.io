let sign = 'x';

let pick = function(event){
    let cell = event.target;
    if (cell.innerText !== '') {
        return;
    }
    cell.innerText = sign;
    sign = sign == 'x' ? 'o' : 'x';
    checkWin();
    block();
}

let reset = function() {
    cells.forEach(function(cell) {
        cell.innerText = '';
        cell.classList.remove("win");
        cell.style.pointerEvents = 'auto';
    })
}

let cells = Array.from(document.querySelectorAll(".cell"));

let rows = [];
let chunk = 3;
for (let i = 0; i < cells.length; i+=3) {
    rows.push(cells.slice(i, chunk));
    chunk += 3;
}

// let columns = [];
// for (let i = 0; i < rows.length; i++) {

let allCells = [[cells[0], cells[1], cells[2]], [cells[3], cells[4],cells[5]], [cells[6], cells[7], cells[8]],
                [cells[0], cells[3], cells[6]], [cells[1], cells[4],cells[7]], [cells[2], cells[5], cells[8]],
                [cells[0], cells[4], cells[8]], [cells[2], cells[4], cells[6]]];

 cells.forEach(function(cell) {
   cell.addEventListener("click", pick);
 })

document.querySelector(".btn").addEventListener("click", reset);

let block = function() {
    if (cells.every(item => item.innerText !== '') || cells.some(item => item.classList.contains("win"))) cells.forEach(cell => cell.style.pointerEvents = 'none');
}



let checkWin = function() {    
   allCells.forEach(function(comb){  
        if (comb.every(item => item.innerText == 'x') || comb.every(item => item.innerText == 'o')) comb.forEach(item => item.classList.add("win"));
    })
    // setTimeout(function(){
    //     alert("You Won");
    // },1000);
}
