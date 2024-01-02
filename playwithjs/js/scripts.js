//https://codepen.io/quasimondo/pen/lDdrF
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.wrapper').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
//https://codepen.io/quasimondo/pen/lDdrF


var textinput = $("#textinput");
var cella = $(".cella");

function change(cell) {
    var randomColor = '#' +('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $(cell).css("background-color", randomColor);
//    setTimeout(function() {
//        $(cell).addClass("rotator").delay(1000).removeClass("rotator");
//    }, 1000);
    $(cell).addClass("rotator").delay(1000).queue(function(next){
    $(this).removeClass("rotator");
    next();
});
}

function hideCell(cell) {
    $(cell).fadeOut();
}

$(textinput).on("keypress", function(e) {
    
//    var log = {key: e.key, background: randomColor};
//    console.log(log);
        
    if(e.key == 'a'){
        change("#a");        
    }
    if(e.key == 'b'){
        change("#b");        
    }    
    if(e.key == 'c'){
        change("#c");        
    }    
    if(e.key == 'd'){
        change("#d");        
    }    
    if(e.key == 'e'){
        change("#e");        
    }    
    if(e.key == 'f'){
        change("#f");        
    }    
    if(e.key == 'g'){
        change("#g");        
    }    
    if(e.key == 'h'){
        change("#h");        
    }    
    if(e.key == 'i'){
        change("#i");        
    }    
    if(e.key == 'j'){
        change("#j");        
    }    
    if(e.key == 'k'){
        change("#k");        
    }    
    if(e.key == 'l'){
        change("#l");        
    }    
    if(e.key == 'm'){
        change("#m");        
    }    
    if(e.key == 'n'){
        change("#n");        
    }    
    if(e.key == 'o'){
        change("#o");        
    }    
    if(e.key == 'p'){
        change("#p");        
    }    
    if(e.key == 'q'){
        change("#q");        
    }    
    if(e.key == 'r'){
        change("#r");        
    }    
    if(e.key == 's'){
        change("#s");        
    }    
    if(e.key == 't'){
        change("#t");        
    }    
    if(e.key == 'u'){
        change("#u");        
    }    
    if(e.key == 'v'){
        change("#v");        
    }    
    if(e.key == 'w'){
        change("#w");        
    }    
    if(e.key == 'x'){
        change("#x");        
    }    
    if(e.key == 'y'){
        change("#y");        
    }    
    if(e.key == 'z'){
        change("#z");        
    }   
    if(e.key == '.'){
        change("#dot");        
    }   
    if(e.key == ' '){
        change("#space");        
    }   
    if(e.key == ','){
        change("#comma");        
    }   
    if(e.key == '!'){
        change("#excla");        
    }
});


$("#a").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#b").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#c").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#d").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#e").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#f").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#g").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#h").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#i").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#j").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#k").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#l").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#m").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#n").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#o").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#p").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#q").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#r").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#s").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#t").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#u").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#v").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#w").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#x").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#y").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#z").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#dot").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#space").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#comma").on("click", function () {
    $(this).css("background-color", "transparent");
});
$("#excla").on("click", function () {
    $(this).css("background-color", "transparent");
});


$("#ttl").on("click", function(){
    var randomColor = '#' +('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $(this).css("color", randomColor);
});
















