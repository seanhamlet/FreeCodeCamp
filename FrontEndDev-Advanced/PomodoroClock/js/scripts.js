'use strict';

$(document).ready(function() {

  // Initialize status as work session
  var status = 'Session';

  // Time interval variable
  var interval;

  // Timer running status flag
  var running = false;

  // Create initial timeLeft in countdown variables
  var workLength = $('#worktime').html() * 60;
  var breakLength = $('#breaktime').html() * 60;

  var timeLeft = workLength;

  // Initialize current time left display
  $('#timer').html(Math.floor(workLength / 60) + ':' + ('0' + Math.floor(workLength % 60)).slice(-2));

  // Initialize Progress circle
  var canvas = document.getElementById('canvas');

  // Returns object with methods and properties for drawing
  var cir = canvas.getContext('2d');

  var posX = canvas.width / 2;
  var posY = canvas.height / 2;
  var arcUnit = 360 / timeLeft;
  var degrees = 360;
  var radius = 150;

  cir.lineCap = 'butt';

  // Draw initial progress circle
  updateCircle();

  // Start timer function
  function runTimer() {
    if (status === "Session") {
      $('body').css("background-color", "#EF5350");
    } else if (status === "Break") {
      $('body').css("background-color", "#4CAF50");
    }
    interval = setInterval(updateTimer, 1000);
  }

  // Update timer and progress circle
  function updateTimer() {
    // Decrement timer by one second each call
    console.log(timeLeft);
    timeLeft -= 1;
    // update workcircle?
    var timeLeftSeconds = Math.floor(timeLeft % 60);
    var timeLeftMinutes = Math.floor(timeLeft / 60);

    // slice(-2) will always display leading zero if less than 10 seconds
    $('#timer').html(timeLeftMinutes + ':' + ('0' + timeLeftSeconds).slice(-2))

    degrees -= arcUnit;

    cir.clearRect(0, 0, canvas.width, canvas.height);

    updateCircle();

    // Stop countdown once reached zero
    if (status === "Session") {
      if (timeLeft < 0) {
        status = "Break";
        $('#status').html(status);
        clearInterval(interval);
        //start breaktimer
        timeLeft = $('#breaktime').html() * 60;
        arcUnit = 360 / timeLeft;
        degrees = 360;
        $('#timer').html(Math.floor(timeLeft / 60) + ':' + ('0' + Math.floor(timeLeft % 60)).slice(-2));
        updateCircle();
        runTimer();
      }
    }

    if (status === "Break") {
      if (timeLeft < 0) {
        status = "Session";
        $('#status').html(status);
        clearInterval(interval);
        //start workTimer
        timeLeft = $('#worktime').html() * 60;
        arcUnit = 360 / timeLeft;
        degrees = 360;
        $('#timer').html(Math.floor(timeLeft / 60) + ':' + ('0' + Math.floor(timeLeft % 60)).slice(-2));
        updateCircle();
        runTimer();
      }
    }

  }

  // Draws progress circle
  function updateCircle() {
    cir.beginPath();
    cir.arc(posX, posY, radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
    cir.strokeStyle = '#888888';
    cir.lineWidth = '10';
    cir.stroke();

    cir.beginPath();
    cir.strokeStyle = '#ffffff';
    cir.lineWidth = '10';
    cir.arc(posX, posY, radius, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + degrees));
    cir.stroke();
  }

  // Plus/Minus buttons for break timer length
  $('.break').on('click', function() {
    if (!running) {
      if ($(this).hasClass('minus')) {
        var newBreakLength = parseInt($('#breaktime').html()) - 1;
      } else {
        var newBreakLength = parseInt($('#breaktime').html()) + 1;
      }

      // if breaktimeleft less than equal to zero, then don't do anything
      if (newBreakLength <= 0) {
        return;
      }

      $('#breaktime').html(newBreakLength);
      breakLength = newBreakLength * 60;

      // Update progress circle if during break
      if (status === 'Break') {
        arcUnit = 360 / breakLength;
        degrees = 360;
        updateCircle();
        timeLeft = breakLength;
        $('#timer').html(newBreakLength + ':00');
      }

    }
  })

  // Plus/Minus buttons for work timer length
  $('.session').on('click', function() {
    if (!running) {
      if ($(this).hasClass('minus')) {
        var newWorkLength = parseInt($('#worktime').html()) - 1;
      } else {
        var newWorkLength = parseInt($('#worktime').html()) + 1;
      }

      // Make sure 0 or negative session time is not input
      if (newWorkLength <= 0) {
        return;
      }

      $('#worktime').html((' ' + newWorkLength).slice(-2));
      workLength = newWorkLength * 60;

      // Update progress circle if during session
      if (status === 'Session') {
        arcUnit = 360 / workLength;
        degrees = 360;
        updateCircle();
        timeLeft = workLength;
        $('#timer').html(newWorkLength + ':00');
      }

    }
  })

  // Toggle timer on/off
  $('.sessionbtn').on('click', function() {

    if (!running) {
      running = true;
      // make break length and session length selectors grayed out
      $('.break-control').css('color','rgba(255,255,255,0.50)');
      $('.session-control').css('color','rgba(255,255,255,0.50)');
      runTimer();
    } else {
      $('.break-control').css('color','rgba(255,255,255,1)');
      $('.session-control').css('color','rgba(255,255,255,1)');
      running = false;
      clearInterval(interval);
      $('body').css("background-color", "#2196F3");
    }

  })

})