/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = new Map();
    let colMap = new Map();
    let gridMap = new Map();
    
    for(let row in board){
        for(let col in board[row]){
            const value = board[row][col];
            if(value === '.') continue;
            if(!rowMap.has(row)) rowMap.set(row,new Set())
            if(!colMap.has(col)) colMap.set(col,new Set())
            const gridKey = `${Math.floor(row/3)} - ${Math.floor(col/3)}`
            if(!gridMap.has(gridKey)) gridMap.set(gridKey,new Set())

            if(rowMap.get(row).has(value) ||
            colMap.get(col).has(value) ||
            gridMap.get(gridKey).has(value)
            ){
                return false;
            }
            rowMap.get(row).add(value)
            colMap.get(col).add(value)
            gridMap.get(gridKey).add(value)
        }
    }

    return true;
};