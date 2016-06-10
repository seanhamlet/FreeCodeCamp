$(document).ready(function() {
  var userList = ["freecodecamp", "storbeck",        "terakilobyte", "habathcx",
                  "RobotCaleb",   "thomasballinger", "noobs2ninjas", "beohoff",
                  "brunofin",     "comster404",      "ESL_SC2",      "middleditch" ];

  var links = [];

  for (var i = 0; i < userList.length; i++) {
    getStreams(userList[i]);
  }

  // button functionality
  
  // Show all
  $('#all').on("click", function() {
    $('.online').parent().show();
    $('.offline').parent().show();
    $('.notFound').parent().show();   
  });
  
  // Only show online
  $('#online').on("click", function() {
    $('.online').parent().show();
    $('.offline').parent().hide();
    $('.notFound').parent().hide();   
  });
  
  // Only show online
  $('#offline').on("click", function() {
    $('.online').parent().hide();
    $('.offline').parent().show();
    $('.notFound').parent().hide();   
  });

  function getStreams(user) {
    var url = 'https://api.twitch.tv/kraken/streams/' +
      user + '?callback=?';
    
    // Call status api
    $.getJSON(url, function(data) {
      var status;
      var game;
      var description;
      
      if (data.stream === null) {
        // console.log(user + ': Offline');
        status = 'Offline';
        game = '';
        description = '';
      } else if (data.stream === undefined) {
        // console.log(user + ': Account Not Found');
        status = 'Account Not Found';
        game = '';
        description = '';
        
      } else if (typeof data.stream === "object") {
        // console.log(user + ': Online');
        // status = 'online: ' + data.stream.viewers + ' viewers';
        status = 'Online';
        game = data.stream.game;
      }
      
      var url = 'https://api.twitch.tv/kraken/channels/' +
      user + '?callback=?';
      
      $.getJSON(url, function(channelData) {
        
        console.log(channelData);
        var logo = channelData.logo;
        
        if (status === 'Online') {
          description = channelData.status;
        }
        
        addUserToList(user, logo, status, game, description);
        
      });

    });
  }

  // function to update html in list group or append to it.
  // pass it user, website, 
  function addUserToList(user, logo, status, game, description) {
    
    if (logo === null) {
      logo = 'http://image005.flaticon.com/1/svg/17/17004.svg';
    }

    var html = "";
    if (status === 'Account Not Found') {
      html += '<a href="#" class="list-group-item disabled" target="_blank">';
      html += '<img src="#"; class="img-responsive img-rounded icon">';
    } else {
      html += '<a href="https://www.twitch.tv/' + user + '" class="list-group-item" target="_blank">';
      html += '<img src="' + logo + '"; class="img-responsive img-rounded icon">';
    }
    
    if (status === 'Online') {
    html += '<h5 class="status pull-right online"><span class="fa fa-circle"></span> ' + status + '</h5>'; 
    } else if (status === 'Offline') {
      html += '<h5 class="status pull-right offline"><span class="fa fa-circle"></span> ' + status + '</h5>'; 
    } else if (status === 'Account Not Found') {
      html += '<h5 class="status pull-right notFound"><span class="fa fa-circle"></span> ' + status + '</h5>';
    }
    
    // Update name
    html += '<h4 class="name list-group-item-heading">' + user + '</h4>';
    
    // If online, add game and description
    if (status === 'Online') {
    html += '<span class="list-group-item-text">' + game + ': ' + description + '</span> </a>';
    } else {
      html += '</a>';
    }

    $('.list-group').append(html);

  }
});