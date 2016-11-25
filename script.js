$(document).ready(function(){
newWallPaper();
createGrid();
removeColor();
});

//get a random background when loading the web page
//find a random background generator API.
 // https://api.desktoppr.co/1/wallpapers/random
function newWallPaper(){
  // $('body').css("background-color", randomColor);
  // $.ajax({
  //   url:'https://api.desktoppr.co/1/wallpapers/random',
  // });
  $('body').css("background-image",'url('+ randomImage()+')');

}
function randomImage(){
  var arr = [
    'https://awesomewallpapers.files.wordpress.com/2015/07/suwqdpp-imgur.jpg?w=597&h=398&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/07/teawdxf-imgur.jpg?w=456&h=285&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/05/xophyxb-imgur.jpg?w=456&h=257&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/05/vvnaluz-imgur.jpg?w=238&h=134&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/03/theoasis-2880x1800.jpg?w=432&h=270&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/02/tunnel_-1920x1200.jpg?w=432&h=270&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2015/02/waves_mac_fullhd.jpg?w=480&h=270&crop=1',
    'https://awesomewallpapers.files.wordpress.com/2014/12/zimg-11.jpg?w=586&h=391&crop=1'
  ];
  return arr[randomNumber(arr.length)];
}
//for now just create a random background color.
// function randomColor(){
//   var color = [
//     'purple',
//     'orange',
//     'green',
//     'white',
//     'black',
//   ];
//   return color[randomNumber(color.length)];
// }
//create x number of divs to fill the whole page
function createGrid (){
  number = 8;
  power =number*number;
  dimensionPercentage = (99/number);
  for(var x = 0; x<power; x++){
    $('.container').append('<div class ="box '+x+'"></div>');
   }
   $('.box').width(dimensionPercentage +'%');
   $('.box').height(dimensionPercentage*.60 +'%');
   $('.box').addClass('grey');
}
//remove color randomly
function removeColor(){
  var divCount = [];
  var counter = [];

//loop through the array using recursive funtion to add timedelay
divCount = $('.grey').toArray();
counter = shuffle(divCount.length);
// console.log(counter);
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
