$(document).ready(function(){
  var input = [];
  var eqn = '';
  var result;
  var dot = false;
  var operators = [' + ',' - ', ' ÷ ', ' × '];
  
  // Updates eqn html
  function updateEqn() {
    $('.eqn').html(input.join(''));
  }
  
  $('button').not('.equals, .clear, .clearall').on('click', function() {
    // Clear result upon key or operator button click
    result = '';
    $('.result').html(result);
    
    // Use html value of button
    var value = $(this).html();
    
    // If operator, make sure to add space on either side for equation
    // Also, reset dot flag
    if ($(this).hasClass('operator')) {
      dot = false;
      value = ' ' + value + ' ';
    } else {
      // If dot character, make sure it hasn't already been used in current number
      // If dot character has been used, then do nothing upon dot button click
      if (value === '.' && !dot) {
        dot = true;
      } else if (value === '.' && dot) {
        return;
      }
    }
    input.push(value);
    updateEqn();
  });
  
  // Equals button click: evaluates valid input and displays result
  $('.equals').on('click', function() {
    
    // If equation ends in operator
    if (operators.indexOf(input[input.length-1]) > 1) {
      alert('Equation ends with operator!');
    }
    
    // Replace all instances of × and ÷ with * and / respectively.
    // This can be done easily using regex and the global  which will 
    // replace all instances of the matched character/substring
    var inputStr = input.join('');
    inputStr = inputStr.replace(/÷/g,'/').replace(/×/g,'*').replace(/\s+/g,'');
    
    // Use regex to make sure 2 or more operators are not used in a row
    var re = /\+{2,}|\-{2,}|\/{2,}|\*{2,}/g;
    console.log(inputStr);
    if (re.test(inputStr)) {
      alert('Too many operators in a row!');
    }
    
    // Valid input if reached this point, thus evaluate string and update results
    result = eval(inputStr);
    $('.result').html(result);    
  });
  
  // CE: clear entry, clears entry of calculator
  $('.clear').on('click', function() {
    // Remove last entry from equation (value or operator)
    input.pop()
    updateEqn();
  });
  
  // AC: all clear function, clears entire input string
  $('.clearall').on('click', function() {
    input = [];
    result = '0';
    eqn = ''
    updateEqn();
    $('.result').html(result);
  });
});


