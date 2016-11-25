$(document).ready(function(){
newWallPaper();
createGrid();
removeColor();
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
    'purple',
    'orange',
    'green',
    'white',
    'black',
  ];
  return color[randomNumber(color.length)];
}
//create x number of divs to fill the whole page
function createGrid (){
  number = 4;
  power =number*number;
  dimensionPercentage = (99/number);
  for(var x = 0; x<power; x++){
    $('.container').append('<div class ="box '+x+'"></div>');
   }
   $('.box').width(dimensionPercentage +'%');
   $('.box').height(dimensionPercentage +'%');
   $('.box').addClass('grey');
}
//when the mouse moves over it erase it, it erases the forground color
function removeColor(){
  var divCount = [];
divCount = $('.grey').toArray();

console.log(shuffle(divCount.length));



  // var num = "."+randomNumber(divCount.length).toString();
  // $(num).removeClass('grey');

}
function randomNumber(count){
    var randomNum = Math.floor(Math.random()*count);
    return randomNum;
}
function shuffle(count){
  var arr = [];
  for(var x =0;x<count;x++){
    arr[x]=x;
  }

  for(var x =0; x<count;x++){
    var y = randomNumber(count);
    temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }
  return arr;


}
//when 90% of the picture is revealed it reloads the webpage
