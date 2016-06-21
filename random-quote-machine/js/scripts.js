$(document).ready(function() {

	var tweet = "";
	
	$('#get-quote').on("click", function(event) {
		$.ajax({

    		url: 
    		'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',

    		type: 'GET',

    		dataType: 'json',

    		// Information to send before request
    		beforeSend: function(xhr) {
    			xhr.setRequestHeader("X-Mashape-Key", 
    				"jwKeZ9Jv4EmshoTYPTZwTTsEtMZVp1Q4QU9jsnbB6faXN9nT31");
    			xhr.setRequestHeader("Content-Type",
    				"application/x-www-form-urlencoded");
    			xhr.setRequestHeader("Accept", "application/json");
    		},

    		// If successful, update quote data
    		success: function(data) { 
    			$(".quote").html(
    				"<i class='fa fa-quote-left'></i> " + data.quote);
				$(".author").html("<h4>- " + data.author + "</h4>");
				tweet = data.quote + " - " + data.author; 
			},

    		// If not successful, alert with error
    		error: function(err) { alert(err); }
    		
		});

	});

	$('#tweet-quote').on("click", function() {

		window.open("https://twitter.com/intent/tweet?text=" + tweet + " " + "http://codepen.io/smhamlet/pen/xVgpWZ");
		
	});

});