$(document).ready(function(){
newWallPaper();
createGrid();
removeColor();
});
var color=[];
//get a random background when loading the web page
//find a random background generator API.
 // https://api.desktoppr.co/1/wallpapers/random
function newWallPaper(){
  // $('body').css("background-color", randomColor);
randomImage();
}
function randomImage(){
  $.ajax({
    url:'https://api.desktoppr.co/1/wallpapers/random',
    dataType: 'jsonp',
    auth_token: 'rRa-_N2W1W8Xz18T2dKd',
    type: 'GET',
    success: function(data){
      URL = data.response.image.preview.url;
      $('body').css("background-image",'url('+ URL+')');

    }
  });
}

//add random colors to the front blocks
function randomColor(){
  color = [
    'grey',
    'aqua',
    'BlueViolet',
    'Cyan',
    'DarkOrange',
    'DeepSkyBlue',
    'DeepPink',
    'Fuchsia',
    'Gold',
    'Green',
    'LawnGreen'
  ];
  return color[randomNumber(color.length)];
}
//create x number of divs to fill the whole page
function createGrid (){
  number = 8;
  power =number*number;
  dimensionPercentage = (99/number);
  var picHeight = 0;
  for(var x = 0; x<power; x++){
    $('.container').append('<div class ="box '+x+'"></div>');
   }
   $('.box').width(dimensionPercentage +'%');
   $('.box').height(dimensionPercentage* 0.75 +'%');
   console.log(randomColor);
   $('.box').addClass(randomColor);
}
//remove color randomly
function removeColor(){
  var divCount = [];
  var counter = [];

//loop through the array using recursive funtion to add timedelay
divCount = $('.box').toArray();
counter = shuffle(divCount.length);
// console.log(counter);
var maxLoop = divCount.length;
var x = 0;
(function next(){
  if(x>=maxLoop){
    return;
    }
    else{
      setTimeout(function(){
       var num = "."+counter[x-1].toString();
       var classList = $(num)[0].className.split(' ');
       $(num).removeClass(classList[2]);
       next();
      },200);
    x++;
    }
  })();
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
