let sign = 'x';
let gameOngoing = true;

let pick = function(event){
    if (!gameOngoing) return;
    let cell = event.target;
    if (cell.innerText !== '') {
        return;
    }
    cell.innerText = sign;
    //sign = sign == 'x' ? 'o' : 'x';
    checkWin();
    setTimeout(function(){
        bot();
        checkWin();
        //block();
    }, 500);
    
}

let reset = function() {
    cells.forEach(function(cell) {
        cell.innerText = '';
        cell.classList.remove("win");
        gameOngoing = true;
        //cell.style.pointerEvents = 'auto';
    })
}

let cells = Array.from(document.querySelectorAll(".cell"));

// let rows = [];
// let chunk = 3;
// for (let i = 0; i < cells.length; i+=3) {
//     rows.push(cells.slice(i, chunk));
//     chunk += 3;
// }
// let columns = [];
// for (let i = 0; i < rows.length; i++) {}

let combinations = [[cells[0], cells[1], cells[2]], [cells[3], cells[4],cells[5]], [cells[6], cells[7], cells[8]],
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
   combinations.forEach(function(comb){  
        if (comb.every(item => item.innerText == 'x') || comb.every(item => item.innerText == 'o')) {
            comb.forEach(item => item.classList.add("win"));
            gameOngoing = false;
        }
        
    })
}

let bot = function() {
    
    if (!gameOngoing) return;

    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText == '') {
            cells[i].innerText = 'o';
            sign = 'x';
            return;
        }
    }
}