!function(){var t=document.createElement("script");t.src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js",t.onload=t.onreadystatechange=function(){ss1000()},document.body.appendChild(t)}();var ss1000=function(){var t=document.getElementsByTagName("script");for(numberOfScripts=0,i=0;i<t.length;i++)"ssShareWidgetScript"===t[i].id&&numberOfScripts++;if(numberOfScripts<2){var e=document.createElement("DIV");e.className="ssShareWidget",e.id="ssShareWidget";var n=document.getElementById("ssShareWidgetScript");n.parentNode.insertBefore(e,n),$(".ssShareWidget").append('<div id="ssShares"><h1 id="ssShareCount">0</h1><p>shares</p></div><div class="ssShareGroup"><a id="ssfbURL" href=""><button class="ssShareBtn fb">Facebook</button></a><a id="sstwitterURL" href=""><button class="ssShareBtn twitter">Twitter</button></a><a id="ssliURL" href=""><button class="ssShareBtn li">LinkedIn</button></a></div><style type="text/css">.ssShareWidget { font-family: sans-serif; display: flex; } #ssShares { margin: 0px 10px; text-align: center; } #ssShares p { text-align: center; 	font-size: 16px; margin: 0;	padding: 0; }#ssShareCount {color: #4FD45C;	text-align: center;	font-size: 50px;	font-family: sans-serif; margin: 0; } .ssShareGroup { max-width: 300px;	text-align: center;	display: flex; align-items: center; } .ssShareBtn {	height: 35px; width: 100px;	cursor: pointer; border: none; font-size: 14px; } .ssShareBtn.fb { background-color: #2d5f9a; color: white; } .ssShareBtn.twitter { background-color: #00c3f3;	color: white; } .ssShareBtn.li { background-color: #2ba3e1;	color: white; } .ssShareBtn:hover { background-color: black; } .ssShareBtn a { color: white; }</style>');var r=window.location.href,s=r.replace("www.",""),a=r.replace("://","://www."),o=0,c=0,h=0,l=0,u=0,d=0,p=50,f=15;$("#ssfbURL").attr("href","javascript:window.open('http%3A%2F%2Fwww.facebook.com%2Fshare.php?u="+r+"', '_blank', 'width=400,height=500');void(0);"),$("#sstwitterURL").attr("href","javascript:window.open('https://twitter.com/intent/tweet?url="+r+"', '_blank', 'width=400,height=500');void(0);"),$("#ssliURL").attr("href","javascript:window.open('https://www.linkedin.com/shareArticle?url="+r+"', '_blank', 'width=400,height=500');void(0);");{var w=function(){u++,u>=3&&g()},g=function(){d=o+c+h+l,m()},m=function(){var t=0;f>d?t=0:d>f&&(t=d-f);var e=setInterval(function(){$("#ssShareCount").text(t),t>=d&&clearInterval(e),t++},p)};(function(){jQuery.getJSON("https://cdn.api.twitter.com/1/urls/count.json?url="+s+"&callback=?",function(t){t.count&&(o+=t.count)}),jQuery.getJSON("https://cdn.api.twitter.com/1/urls/count.json?url="+a+"&callback=?",function(t){t.count&&(wwwTwitterCount=o+t.count),w()})})(),function(){jQuery.getJSON("http://graph.facebook.com/"+r,function(t){t.shares&&(c+=t.shares),t.comments&&(h=c+t.comments),w()})}(),function(){jQuery.getJSON("http://www.linkedin.com/countserv/count/share?url="+r+"&callback=?",function(t){t.count&&(l+=t.count),w()})}()}}};