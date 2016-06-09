function getSearchResults() {
  // Make previous results hidden
  $('.search-result').addClass('hidden');
  
  searchtext = $("#searchTxt").val();
  
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch='+searchtext;

  $.ajax({
    url: wikiUrl,
    dataType: 'jsonp',
    success: function (data) {
      showResults(data);
    },

    error: function (errorMessage) {
      alert(errorMessage);
    }

  });
}

function showResults(data) {
  
  $('.request-box').css('position','relative');
  
  var titles = data[1];
  var descriptions = data[2];
  
  var html = '';
  for (i=1; i < data.query.search.length+1; i++) {
    var site = "http://en.wikipedia.org/wiki/" + data.query.search[i-1].title;
    var title = data.query.search[i-1].title;
    var snippet = data.query.search[i-1].snippet;
    
    html += '<div class="row">';
    html += '<a href="' + site + '" target="_blank">';
    html += '<div class="col-xs-offset-3 col-xs-6 search-result">';
    html += '<h3>' + title + '</h3>';
    html += '<p>' + snippet + '</p>';
    html += '</div> </a> </div>';
  }
  console.log(html);
  $('.results').html(html);
  $('.results').removeClass('hidden');
  $('footer').css('margin-top', '5%');
}



$(document).ready(function(){
  $('.search').addClass('hidden');
  
  $('.fa-search').on('click', function() {
    $('.search-icon').addClass('hidden');
    $('.search').removeClass('hidden');
    $('.icon-label').html('<h4>Click here to close search</h4>')
    $('input').focus();
  });
  
  $('.icon-label').on('click', function() {
    $('.search').addClass('hidden');
    $('.search-icon').removeClass('hidden');
    $('.icon-label').html('<h4>Click icon to search</h4>');
    $('.request-box').css('position','absolute');
    $('.results').addClass('hidden');
    $('#searchTxt').val('');
    $('footer').css('margin-top', '50%');
  });
  
  // Call getSearchResults when user presses enter
  $('#searchTxt').keydown(function (e) {
    var key = e.which;
    if (key == 13) {
      getSearchResults();
      return false;  
    }
    
  });
  
});