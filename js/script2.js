
function myFunction() {
    var x = document.getElementById("myTopnav");
    const body = document.getElementById("burger");
  
    body.classList.toggle("nav-open");
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    } 
  }
  var key = 'first',
  hadModal = localStorage.getItem(key);
  var modal = document.getElementById("myModal");

  if(!hadModal){
    modal.style.display = "block";
    localStorage.setItem(key, true);
  }
 
  var close = document.getElementsByClassName("close")[0];
  var exit = document.getElementsByClassName("exit")[0];
 


  close.onclick = function() {
    modal.style.display = "none";
  }

  exit.onclick = function() {
    window.history.back()
  }

  function getlocation(){
    $.get("http://ipinfo.io", function(response) {
      $("#ip").html("IP: " + response.ip);
      $("#address").html("Location: " + response.city + ", " + response.region);
      $("#details").html(JSON.stringify(response, null, 4));
    }, "jsonp");
  }

