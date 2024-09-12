//boards = [[],[]]
//superBoard = []

const scores = {
  X: 10,
  O: -10,
  tie: 0
};

function isMovesLeft(board) {
  return board.includes(null);
}

function evaluate(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return scores[board[a]];
    }
  }

  if (board.every(square => square !== null)) {
    return 0;
  }
  
  return false; // No winner
}

export function minimax(boards, depth, isMax, allowedBoards, superBoard) {
  let score = evaluate(superBoard);

  // If Maximizer or Minimizer has won the game, return the evaluated score
  if (score === 10 || score === -10)
    return score - depth; // Subtract depth to favor quicker wins/losses

  // If there are no more moves and no winner, it's a tie
  if (!isMovesLeft(superBoard))
    return 0;

  if (isMax) {
    let best = -999999
    for (let i = 0; i < 9; i++) {
      if (!allowedBoards[i]) continue;
      
      for (let j = 0; j < 9; j++){
        if (boards[i][j] === null) {
          boards[i][j] = 'O';
          // if board win, assign val to superBoard
          let checkBoard = evaluate(boards[i]);
          if (checkBoard) {
            superBoard[i] = 'O';
          }
          if (superBoard[i]) {
            allowedBoards = superBoard.map((sb,index) => {
              return (sb) ? false : true;
            });
          } else {
            allowedBoards = superBoard.map((s,index) => {
              return (index == j) ? true : false
            })
          }
          
          best = Math.max(best, minimax(boards, depth + 1, !isMax, allowedBoards, superBoard))
          boards[i][j] = null;
        }
      }
    }
    return best;
  } else {
    let best = -999999
    for (let i = 0; i < 9; i++) {
      if (!allowedBoards[i]) continue;
      
      for (let j = 0; j < 9; j++){
        if (boards[i][j] === null) {
          boards[i][j] = 'O';
          // if board win, assign val to superBoard
          let checkBoard = evaluate(boards[i]);
          if (checkBoard) {
            superBoard[i] = 'O';
          }
          if (superBoard[i]) {
            allowedBoards = superBoard.map((sb,index) => {
              return (sb) ? false : true;
            });
          } else {
            allowedBoards = superBoard.map((s,index) => {
              return (index == j) ? true : false
            })
          }
          
          best = Math.max(best, minimax(boards, depth + 1, !isMax, allowedBoards, superBoard))
          boards[i][j] = null;
        }
      }
    }
    return best;
  }

  // if (isMax) {
  //   let best = -1000;
  //   for (let i = 0; i < 9; i++) {
  //     if (board[i] === null) {
  //       board[i] = 'O';
  //       best = Math.max(best, minimax(board, depth + 1, !isMax));
  //       board[i] = null;
  //     }
  //   }
  //   return best;
  // } else {
  //   let best = 1000;
  //   for (let i = 0; i < 9; i++) {
  //     if (board[i] === null) {
  //       board[i] = 'X';
  //       best = Math.min(best, minimax(board, depth + 1, !isMax));
  //       board[i] = null;
  //     }
  //   }
  //   return best;
  // }
}

export function findBestMove(boards,allowedBoards, superBoard) {
  let bestVal = -999999;
  let bestMove = [0,0];

  for (let i = 0; i < 9; i++) {
    if (!allowedBoards[i]) continue;

    for (let j = 0; j < 9; j++) {
      if (boards[i][j] === null){
        boards[i][j] = 'O';
        let moveVal = minimax(boards, 0, false, allowedBoards, superBoard)
        boards[i][j] = null;

        if (moveVal > bestVal) {
          bestMove = [i,j];
          bestVal = moveVal;
        }
      } 
    }
    
  }

  // for (let i = 0; i < 9; i++) {
  //   if (board[i] === null) {
  //     board[i] = 'O';
  //     let moveVal = minimax(board, 0, false);
  //     board[i] = null;

  //     if (moveVal > bestVal) {
  //       bestMove = i;
  //       bestVal = moveVal;
  //     }
  //   }
  // }

  return bestMove;
}