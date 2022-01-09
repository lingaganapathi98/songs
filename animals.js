// JavaScript code 
function search_songs() { 
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('songs'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
}
function playAll(idlist) {
    var audioarray = idlist.split(',');
    for (var i = 0; i < audioarray.length; i++) {
        var audio = document.getElementById(audioarray[i]);
        audio.play();
        while (!audio.ended) {
        }
    }
}