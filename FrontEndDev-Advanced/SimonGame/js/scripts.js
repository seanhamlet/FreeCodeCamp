// Functions to draw Simon arc buttons
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {

  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  var d = ["M", start.x, start.y,
    "A", radius, radius, 0, arcSweep, 0, end.x, end.y
  ].join(" ");

  return d;
}

$(document).ready(function() {
  
  // Initialize game settings
  var gameRunning = false;
  var gameOn = false;
  var gameArray = [];

  // Get button variables
  var arcButtons = $('svg.thing > path');
  var startButton = $('svg.thing > #start');
  var strictButton = $('svg.thing > #strict');
  var strictIndicator = $('svg.thing > #strictInd');

  arcButtons.attr('class', 'unclickable');
  startButton.attr('class', 'unclickable');
  strictButton.attr('class', 'unclickable');
  
  // Keep track of how many button have been displayed
  var buttonsDisplayed;

  // Time interval variable
  var interval;

  // User turn flag
  var userTurn = false;
  var userArray = [];

  var strictMode = false;

  // Audio
  var redAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var blueAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var greenAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

  // Draw arc buttons
  document.getElementById("1").setAttribute("d", describeArc(250, 250, 165, 0, 90));

  document.getElementById("2").setAttribute("d", describeArc(250, 250, 165, 90, 180));

  document.getElementById("3").setAttribute("d", describeArc(250, 250, 165, 180, 270));

  document.getElementById("4").setAttribute("d", describeArc(250, 250, 165, 270, 360));

  // On start button click, start update game array
  startButton.on("click", function() {
    resetGame();
    gameRunning = true;
    updateGameArray();
  });

  // On strict button click, make strict mode true
  strictButton.on("click", function() {
    strictMode = !strictMode;
    if (strictMode) {
      strictIndicator.attr('fill', 'red');
    } else {
      strictIndicator.attr('fill', 'black');
    }
  });
  
  // Turning on/off game (off: all buttons are unclickable)
  $('input').on('click', function() {
    if ($('input').prop('checked')) {
      gameOn = true;
      $('#counter').attr('fill','red');
      startButton.attr('class', 'clickable');
      strictButton.attr('class', 'clickable');
    } else {
      resetGame();
      gameOn = false;
      $('#counter').attr('fill','darkred');
      arcButtons.attr('class', 'unclickable');
      startButton.attr('class', 'unclickable');
      strictButton.attr('class', 'unclickable');
      
      // Update counter display to double-hyphen
      $('#counter').html('--').attr('font-size','4rem').attr('x','174').attr('y','275');
    }
  })

  // Resets game ready for gameplay by clearing user array, game array, and counter
  function resetGame() {
    $('#counter').attr('font-size', '2.5rem').attr('x', '176').attr('y', '273');
    $('#counter').html('00');
    userTurn = false;
    userArray = [];
    gameArray = [];
    gameRunning = false;
  }

  // Add random button to gamearray by adding a random 1-4 'button'
  function updateGameArray() {
    userArray = [];
    var randButton = randomIntFromInterval(1, 4);
    gameArray.push(randButton);
    displayGameButtons();
  }

  // Display game buttons (light and color) from game array with 1 second delay between
  function displayGameButtons() {
    arcButtons.attr("class", 'unclickable');
    buttonDisplayed = 1;
    interval = setInterval(displayGameArray, 1000);
  }

  // Displays all of the buttons from a game array
  function displayGameArray() {
    if (buttonDisplayed >= gameArray.length) {
      clearInterval(interval);
      userTurn = true;
      arcButtons.attr('class', 'clickable');
      console.log(userTurn);
    }
    
    displayButton(gameArray[buttonDisplayed - 1], true);
    
    if (buttonDisplayed === 1) {
      $('#counter').html(('0' + gameArray.length).slice(-2));
    }
    
    buttonDisplayed++;
    console.log(gameArray);
  }

  // Clears button back to original color
  function clearButton(button) {
    switch (button) {
      case 1:
        $('#1').attr("stroke", "#bb0000");
        break;
      case 2:
        $('#2').attr("stroke", "#0000b0");
        break;
      case 3:
        $('#3').attr("stroke", "#bbbb00");
        break;
      case 4:
        $('#4').attr("stroke", "#008000");
        break;
    }
  }

  // Displays individual button and sound (auto clears if game is displaying button)
  function displayButton(button, autoClear) {

    switch (button) {
      case 1:
        $('#1').attr("stroke", "red");
        redAudio.play();
        if (autoClear) {
          setTimeout(function() {
            clearButton(button);
          }, 800);
        }
        break;
      case 2:
        $('#2').attr("stroke", "blue");
        blueAudio.play();
        if (autoClear) {
          setTimeout(function() {
            clearButton(button);
          }, 800);
        }
        break;
      case 3:
        $('#3').attr("stroke", "yellow");
        yellowAudio.play();
        if (autoClear) {
          setTimeout(function() {
            clearButton(button);
          }, 800);
        }
        break;
      case 4:
        $('#4').attr("stroke", "#00ff00");
        greenAudio.play();
        if (autoClear) {
          setTimeout(function() {
            clearButton(button);
          }, 800);
        }
        break;
    }

  }

  // Compares user and game array for every user input to determine if user selected wrong button
  // If user correct, update game array with next random button
  // If user wrong and not strict mode, then repeat buttons sequence
  // If user wrong and strict mode, then game over
  function compareArrays() {
    userTurn = false;

    console.log('userarray', userArray);
    console.log('gamearray', gameArray);

    for (var i = 0; i < userArray.length; i++) {
      if (userArray[i] !== gameArray[i]) {
        
        if (strictMode) {
          resetGame();
          displayWrong();
          gameRunning = true;
          updateGameArray();
        } else {
          userArray = [];
          displayWrong();
          displayGameButtons();
        }
      }
    }

    if (userArray.length >= 20) {
      alert('you win!!!');
      resetGame();
      gameRunning = true;
      updateGameArray();
    }
    
    if (gameRunning && userArray.length === gameArray.length) {
      updateGameArray();
    }
    
  }

  // If user wrong, display that they were wrong.
  function displayWrong() {
    $('#counter').html('!!!');
    setTimeout(function() {
      $('#counter').html(('0' + gameArray.length).slice(-2));;
    }, 1000);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // You can only press buttons after game array has been displayed to user
  // Upon button press, lightup button and sound
  arcButtons.on("mousedown", function() {
    userArray.push(parseInt($(this).attr("id")));
    displayButton(parseInt($(this).attr("id")), false);
  });

  // Upon button release, turn off light and sound
  arcButtons.on("mouseup", function() {
    clearButton(parseInt($(this).attr("id")));
    compareArrays();
  });


})