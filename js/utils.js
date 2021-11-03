function playSlot (url){
    document.getElementById("iframe").src= url;
    document.getElementById("play-button").style.display = 'none';
    document.getElementById("iframe").style.opacity = 1;
}