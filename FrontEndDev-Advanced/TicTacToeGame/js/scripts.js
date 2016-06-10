$(document).ready(function() {
  
  // Ask player which token they want ('x' or 'o')
  $("#tokenChoice").modal()
  
  var oFill = '<i class="fa fa-circle-o"></i>';
  var xFill = '<i class="fa fa-times"></i>';
  var gameArray = ['','','','','','','','',''];
  var gameOn = true;
  
  // If no choice is made in modal than 'x' is automatically selected for human
  var humSymb = 'x';
  var compSymb = 'o';
  var human = xFill;
  var comp = oFill;
  
  // Player selects token by clicking one of two buttons in modal
  $('#x').on("click", function() {
    humSymb  = 'x';
    compSymb = 'o';
    human    = xFill;
    comp     = oFill;
  });
  
  $('#o').on("click", function() {
    humSymb  = 'o';
    compSymb = 'x';
    human    = oFill;
    comp     = xFill;
  });
  
  // Once game over, allows player to play again and reset game board
  $('#playAgain').on("click", function() {
    clearGame();
  })
  
  // On user click, change background of element, update gameArray, and check if game done (win, lose, or tie) status
  $('.col-xs-4').on("click", function() {
    
    // Fill gameArray with selection if selected element is empty
    if (gameArray[$(this).attr('id')] === '' && gameOn){
      $(this).html(human);
      gameArray[$(this).attr('id')] = humSymb;
      checkGameDone(humSymb);
    }
    
  });
  
  // Find empty gameArray and randomly place compSym
  function computerPlay() {
    
    var empties = findEmpties(gameArray);
    var choice;
    
    choice = Math.floor(Math.random() * empties.length);
    gameArray[empties[choice]] = compSymb;
    $('#' + empties[choice]).html(comp);
    checkGameDone(compSymb);
  }
  
  function checkGameDone(symbol) {

    // Possible win states
    // (i.e. if a symbol is at these indicies)
    var wins = [[0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]];
    
    // Loop through all possible "win states" to check if symbol played, won
    for (var i = 0; i < wins.length; i++) {
      if (checkWin(symbol, gameArray, wins[i])) {
        if (symbol === humSymb) {
          console.log('this happened');
          $('#result').html('You (' + humSymb + ') Win').removeClass('hidden');
          endGame();
        }
        if (symbol === compSymb) {
          $('#result').html('Computer (' + compSymb + ') Wins').removeClass('hidden');
          endGame();
        }
      }
    }
    
    // If gameBoard full and we had no winner, then tie game
    var empties = findEmpties(gameArray);
    
    if (empties.length === 0 && gameOn) {
      $('#result').html("It's a tie!").removeClass("hidden");
      endGame();
    }
    
    // If we reached this point with human, that means human didn't win yet and the computer should play
    if (symbol === humSymb && gameOn) {
      computerPlay();
    }
    
  }
  
  function checkWin(symbol, arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      if (arr1[arr2[i]] !== symbol) {
        return false;
      }
    }
    return true;
  }
  
  function endGame() {
    gameOn = false;
    $('#playAgain').removeClass("hidden");
  }
  
  function clearGame() {
    gameOn = true;
    $('.col-xs-4').html('');
    gameArray = ['','','','','','','','',''];
    $('#result').html('').addClass('hidden');
    $('#playAgain').addClass("hidden");
  }
  
  function findEmpties(gameArray) {
    var empties = [];
    for (var i = 0; i < gameArray.length; i++) {
      if (gameArray[i] === '') {
        empties.push(i);
      }
    }
    return empties;
  }
  
})