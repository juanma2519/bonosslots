var name_input;
var provider_input;
var volatility_input;
var minValue_input;
var maxValue_input;
var init_input;

function showSlots(str, type) {

  if(type == "init") init_input = str;
  if(type == "name") name_input = str;
  if(type == "provider") provider_input = str;
  if(type == "volatility") volatility_input = str;
  if(type == "minValue") minValue_input = str;
  if(type == "maxValue") maxValue_input = str;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "load-slots-online.php?provider="+ provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
  if(type == "init") init_input = "false";
}


function showProviders(str, type) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("productos").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "load-providers-online.php", true);
    xmlhttp.send();
    if(init_input === "false") document.getElementById('load-more').style.display = 'none';
    if(type == "init") init_input = "false";
}

function showMegawaysSlots() {
    provider_input = "Megaways";
    init_input = "true";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("productos").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
    xmlhttp.send();
    if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showMicrogamingSlots() {
    provider_input = "Microgaming";
    init_input = "true";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("productos").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
    xmlhttp.send();
    if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showPragmaticPlaySlots() {
  provider_input = "Pragmatic Play";
  init_input = "true";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showQuickspinSlots() {
  provider_input = "Quickspin";
  init_input = "true";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showNetentSlots() {
  provider_input = "Netent";
  init_input = "true";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showNolimitCitySlots() {
  provider_input = "Nolimit City";
  init_input = "true";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showBigTimeGamingSlots() {
  provider_input = "Big Time Gaming";
  init_input = "true";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("productos").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
  xmlhttp.send();
  if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function showNetentSlots() {
    provider_input = "Netent";
    init_input = "true";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("productos").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "../load-slots-online.php?provider=" + provider_input + "&volatility=" + volatility_input + "&slot-name=" + name_input + "&minValue=" + minValue_input + "&maxValue=" + maxValue_input + "&init=" + init_input, true);
    xmlhttp.send();
    if(init_input === "false") document.getElementById('load-more').style.display = 'none';
}

function getMinValues() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("minValue").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "load-min-values.php", true);
  xmlhttp.send();
}

function getMaxValues() {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maxValue").innerHTML = this.responseText;
    }
  };
  xmlhttp.open("GET", "load-max-values.php", true);
  xmlhttp.send();
}