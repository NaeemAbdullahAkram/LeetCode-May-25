/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const targetSquare = n * n;

    function getCoordinates(squareNum) {
        const numZeroBased = squareNum - 1; 
        
        const rowFromBottom = Math.floor(numZeroBased / n);
        const colOffset = numZeroBased % n;

        const matrixRow = n - 1 - rowFromBottom;
        
        let matrixCol;
        if (rowFromBottom % 2 === 0) { 
            matrixCol = colOffset;
        } else {
            matrixCol = n - 1 - colOffset;
        }
        return [matrixRow, matrixCol];
    }

    const queue = [[1, 0]]; 
    const visited = new Set();
    visited.add(1); 

    while (queue.length > 0) {
        const [currentSquare, moves] = queue.shift();

        const maxRollDestination = Math.min(currentSquare + 6, targetSquare);
        for (let nextSquareAfterDice = currentSquare + 1; nextSquareAfterDice <= maxRollDestination; nextSquareAfterDice++) {
            
            const [row, col] = getCoordinates(nextSquareAfterDice);
            
            let finalLandedSquare = board[row][col];
            if (finalLandedSquare === -1) {
                finalLandedSquare = nextSquareAfterDice;
            }
            
            if (finalLandedSquare === targetSquare) {
                return moves + 1;
            }

            if (!visited.has(finalLandedSquare)) {
                visited.add(finalLandedSquare);
                queue.push([finalLandedSquare, moves + 1]);
            }
        }
    }

    return -1
};