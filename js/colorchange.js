// Made by Nate
/*

███    ██  █████
████   ██ ██   ██
██ ██  ██  █████
██  ██ ██ ██   ██
██   ████  █████

*/
var color= undefined;
var cycles= undefined;
function even(number) {
  if( number % 2 == 1 ) {
    return true;
  } else {
    return false;
  };
};

function colorchange(){

  if(color) {
    $("body").css('background-color', 'orange');
    console.log("orange");
    color= false;
  } else if (color == false) {
    $("body").css('background-color','black')
    console.log("black");
    color= true;
  };
  cycles=cycles+1
};
cycles=0;
color= false;
window.setInterval(function(){
  colorchange();
  console.log(cycles);
}, 504);
