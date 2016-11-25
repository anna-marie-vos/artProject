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
  number = 10;
  power =number*number;
  dimensionPercentage = (97/number);
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
  var counter = [];

divCount = $('.grey').toArray();
counter = shuffle(divCount.length);
console.log(counter);
var maxLoop = divCount.length;
var x = 0;
(function next(){
  if(x>=maxLoop){
    return;
  }else{

  setTimeout(function(){
       var num = "."+counter[x-1].toString();
       $(num).removeClass('grey');
       next();
  },200);
x++;
}
})();


// for(var x = 0; x < divCount.length;x++){
//    var num = "."+counter[x].toString();
//    $(num).removeClass('grey').fadeout();
// }
//


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
