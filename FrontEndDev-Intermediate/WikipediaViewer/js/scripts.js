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
    }

  });
}

function showResults(data) {
  
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
  if (html === '') {
    $('footer').css('margin-top', '45%');
  } else {
    $('footer').css('margin-top', '5%');
  }
}

$(document).ready(function(){
  // when typing again in search box, clear results
  $('.search-result').addClass('hidden');
  
  $('[data-toggle="tooltip"]').tooltip();
  
  $('#search').on("click",function() {
     getSearchResults();
  })
  
  // Call getSearchResults when user presses enter
  $('#searchTxt').keydown(function (e) {
    var key = e.which;
    if (key == 13) {
      getSearchResults();
      return false;  
    }
    
  });
})