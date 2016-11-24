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
  return 'red';
}
//make a layer over it that's one color

//when the mouse moves over it erase it, it erases the forground color

//when 90% of the picture is revealed it reloads the webpage
