  //////////////////////////////////////////////////////////////////////////////////////////
  // LOAD JQUERY 
  //////////////////////////////////////////////////////////////////////////////////////////

  (function() {
      var script = document.createElement("script");
      script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js";
      script.onload = script.onreadystatechange = function(){ ss1000(); };
      document.body.appendChild( script );
  })()






  //////////////////////////////////////////////////////////////////////////////////////////
  // ADD HTML / CSS 
  //////////////////////////////////////////////////////////////////////////////////////////

  var ss1000 = function () {
    var scripts = document.getElementsByTagName('script');
    numberOfScripts = 0;
    for (i = 0; i < scripts.length; i++) {
      if (scripts[i].id === "ssShareWidgetScript") {
        numberOfScripts++;
      }
    }

    if (numberOfScripts < 2) {
      var ssDiv = document.createElement('DIV');
      ssDiv.className = "ssShareWidget";
      ssDiv.id = "ssShareWidget";
      var scr = document.getElementById('ssShareWidgetScript');
      scr.parentNode.insertBefore(ssDiv, scr);
      $('.ssShareWidget').append('<div id="ssShares"><h1 id="ssShareCount">0</h1><p>shares</p></div><div class="ssShareGroup"><a id="ssfbURL" href=""><button class="ssShareBtn fb">Facebook</button></a><a id="sstwitterURL" href=""><button class="ssShareBtn twitter">Twitter</button></a><a id="ssliURL" href=""><button class="ssShareBtn li">LinkedIn</button></a></div><style type="text/css">.ssShareWidget { font-family: sans-serif; display: flex; } #ssShares { margin: 0px 10px; text-align: center; } #ssShares p { text-align: center;   font-size: 16px; margin: 0; padding: 0; }#ssShareCount {color: #4FD45C; text-align: center; font-size: 50px;  font-family: sans-serif; margin: 0; } .ssShareGroup { max-width: 300px; text-align: center; display: flex; align-items: center; } .ssShareBtn { height: 35px; width: 100px; cursor: pointer; border: none; font-size: 14px; } .ssShareBtn.fb { background-color: #2d5f9a; color: white; } .ssShareBtn.twitter { background-color: #00c3f3;  color: white; } .ssShareBtn.li { background-color: #2ba3e1; color: white; } .ssShareBtn:hover { background-color: black; } .ssShareBtn a { color: white; }</style>');






    //////////////////////////////////////////////////////////////////////////////////////////
    // ADD JS 
    //////////////////////////////////////////////////////////////////////////////////////////

  var url = window.location.href;

    // URL CLEANSING ///////////////////////////////////////////////////////////////////////////////////////////////
    var cleanURL = url.replace("www.", "")
    var wwwURL = url.replace("://", "://www.")

    // SHARE COUNTS ///////////////////////////////////////////////////////////////////////////////////////////////
    var twitterCount = 0;
    var fbCount = 0;
    var fbComments = 0;
    var liCount = 0;

    // DATA RECEIVED ///////////////////////////////////////////////////////////////////////////////////////////////
    var dataReceived = 0;

    // SUMMING VARIABLES ///////////////////////////////////////////////////////////////////////////////////////////////
    var totalCount = 0;
    var roundedCount = 0;

    // COUNTER VARIABLES ///////////////////////////////////////////////////////////////////////////////////////////////
    var countInterval = 50;
    var distance = 15;



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // SET SHARE URLS ON SHARE BUTTONS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('#ssfbURL').attr("href", "javascript:window.open('http%3A%2F%2Fwww.facebook.com%2Fshare.php?u=" + url + "', '_blank', 'width=400,height=500');void(0);")
    $('#sstwitterURL').attr("href", "javascript:window.open('https://twitter.com/intent/tweet?url=" + url + "', '_blank', 'width=400,height=500');void(0);")
    $('#ssliURL').attr("href", "javascript:window.open('https://www.linkedin.com/shareArticle?url=" + url + "', '_blank', 'width=400,height=500');void(0);")



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK FOR DATA
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var runThisTown = function () {
      dataReceived++;
      if (dataReceived >= 3) {
        updateCount();
      }
    };



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // UPDATE SHARECOUNT
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var updateCount = function () {
      totalCount = twitterCount + fbCount + fbComments + liCount;
      animateCount();
    }




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ANIMATE SHARECOUNT
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var animateCount = function () {
      var number = 0;
      if (totalCount < distance) {
        number = 0;
      } else if (totalCount > distance) {
        number = totalCount - distance;
      }
      var countup2 = setInterval(function () {
        $('#ssShareCount').text(number);
        if (number >= totalCount) {
          clearInterval(countup2);
        }
        number++;
      }, countInterval);
    };




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GET & ADD SHARES
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // GET TWITTER SHARES
    var getTwitter = (function () {

      jQuery.getJSON('https://cdn.api.twitter.com/1/urls/count.json?url='+ cleanURL + '&callback=?', function (data) {
        if (data.count) {
          twitterCount = twitterCount + data.count;
        };
      });

      jQuery.getJSON('https://cdn.api.twitter.com/1/urls/count.json?url='+ wwwURL + '&callback=?', function (data) {
        if (data.count) {
          wwwTwitterCount = twitterCount + data.count;
        };
        runThisTown();
      });

    })();


    //GET FACEBOOK SHARES & COMMENTS
    var getFacebook = (function () {
      
      jQuery.getJSON('http://graph.facebook.com/' + url, function (data) {
        if (data.shares) {
          fbCount = fbCount + data.shares;
        }
        if (data.comments) {
          fbComments = fbCount + data.comments;
        };
        runThisTown();
      });

    })();


    //GET LINKEDIN SHARES
    var getLinkedIn = (function () {

      jQuery.getJSON('http://www.linkedin.com/countserv/count/share?url=' + url + '&callback=?', function (data) {
        if (data.count) {
          liCount = liCount + data.count;
        }
        runThisTown();
      });

    })();

}};