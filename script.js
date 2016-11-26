//Index:
// 1) create a new wallpaper upon loading the page
// 1.1) load a random image
// 1.1.1)use ajax to grab a random image
// 1.1.2)grab the image height and make the container div the same height
// 1.1.3)create a grid over the image using the block div
// 1.1.4)run the "removeColor" function to remove grid blocks in a random sequence
// 2)make a random color function that will return a random color class
// 3) make a "removeColor" function
// 3.1) loop through all the divs with a class ".box"
// 3.2) use a recursive function so that when it completes the loop
//       it has a short time delay
// 4) make a random number function that takes the array length as input
// 4.1) use the random function to assign random colors and randomise
//       values when making the grid.
// 5) make a shuffle function with shuffles the array numbers

$(document).ready(function(){
newWallPaper();

});
var color=[];
//get a random background when loading the web page
function newWallPaper(){
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
      var length = data.response.image.preview.width;
      var height = data.response.image.preview.height;
      $('.container').css("background-image",'url('+ URL+')');
      $('body').height(height+'px');

//create x number of divs to fill the whole page
      function createGrid (){
        number = 8;
        power =number*number;
        dimPercentage = (99/number);
        var picHeight = 100/number;
        console.log(height/length);
        console.log(picHeight);
        for(var x = 0; x<power; x++){
          $('.container').append('<div class ="box '+x+'"></div>');
        }
        $('.box').width(dimPercentage +'%');
        $('.box').height(picHeight+'%');
        $('.box').addClass(randomColor);
      }
    createGrid();
    removeColor();
    }
  });

}

//add random colors to the front blocks
function randomColor(){
  color = [
    'grey', 'aqua', 'BlueViolet',
    'Cyan', 'DarkOrange',
    'DeepSkyBlue', 'DeepPink',
    'Fuchsia', 'Gold',
    'Green', 'LawnGreen'
  ];
  return color[randomNumber(color.length)];
}

//remove color randomly
function removeColor(){
  var divCount = [];
  var counter = [];

//loop through the array using recursive funtion to add timedelay
divCount = $('.box').toArray();
counter = shuffle(divCount.length);

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
