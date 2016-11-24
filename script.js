$(document).ready(function(){
newWallPaper();
layorColor();
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
//make a layer over it that's one color
function layorColor(){
  var newDiv = $('<div class ="container"></div>').css({
    'width': '100%',
    'height': '100%',
    'position': 'fixed',
    'background-color': 'grey'
  })
  $('body').append(newDiv);
}

//when the mouse moves over it erase it, it erases the forground color
function removeColor(){

}
//when 90% of the picture is revealed it reloads the webpage
