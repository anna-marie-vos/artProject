$(document).ready(function(){
newWallPaper();

});

//get a random background when loading the web page
//find a random background generator API.
 // https://api.desktoppr.co/1/wallpapers/random
function newWallPaper(){
  $('body').css("background-color", randomColor);

}
//for now just create a random background color.
function randomColor(){
  var color = [
    'red',
    'purple',
    'orange',
    'green',
    'white',
    'black',
  ];
  var randomCounter = Math.floor(Math.random()*color.length);
  return color[randomCounter];
}

//when the mouse moves over it erase it, it erases the forground color
function removeColor(){
//create a new div
}
//when 90% of the picture is revealed it reloads the webpage
