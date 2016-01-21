/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  // store solution
  var solution = new Board({n:n}); //fixme
  // get the board size
  var length = solution.rows().length-1;
  var badCols = [];
  console.log('length is ' + length);
  // // iterate through n pieces
  for(var i = 1; i <= n; i++){
    console.log('working on piece ' + i);
  //   // find a row without conflicts
    var goodRow = null;
    for(var j = 0; j <= length; j++){
      if(solution.get(j).indexOf(1) === - 1){
        // store that row
        goodRowIdx = j;
        console.log('no conflict row ' + j);
        break;
      }
     }
    // find a column in the good row without conflicts
    for(var k = 0; k <= length; k++){
      if(badCols.indexOf(k) === -1){
        // toggle the piece at [goodRow, goodCol]
        console.log('no conflict col ' + k);
        solution.togglePiece(goodRowIdx, k);
        badCols.push(k);
        break;
    //       console.log("toggle:" + goodRowIdx + ' ' + k);
    //       solution.togglePiece(goodRowIdx, k);
      }
    }
  }
  //   // if there is no valid placement and we haven't place n pieces
  //     // this setup is not a solution
  console.log(solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
