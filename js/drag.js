// var acertadas = 0;

$( document ).ready(function() {
  var w_height = $("#NBAcourt").height();
  var w_width = $("#NBAcourt").width();

  for (var i = 0; i < 26 ; i++) {
    $("#NBAcourt").append("<div id='drag"+i+"' class='circulo drag'></div>");
    $("#drag"+i).draggable();
  }

  for (var i = 0; i < 10; i++) {
    $("#NBAcourt").append("<div id='drop"+i+"' class='circulo drop'></div>");
    if(i < 5){
      $("#drop"+i).droppable({accept: "#drag0, #drag1, #drag2, #drag3, #drag4, #drag5, #drag6, #drag7, #drag8, #drag9, #drag10, #drag11, #drag12", tolerance: "intersect", hoverClass: "hovered", containment: "document" });
      $("#drop"+i).on("drop", function(event, ui) {dropped($(this).css("top"), $(this).css("left"), $(this).attr("id"),ui)});
    }else{
      $("#drop"+i).droppable({accept: "#drag13, #drag14, #drag15, #drag16, #drag17, #drag18, #drag19, #drag20, #drag21, #drag22, #drag23, #drag24, #drag25", tolerance: "intersect", hoverClass: "hovered", containment: "document" });
      $("#drop"+i).on("drop", function(event, ui) {dropped($(this).css("top"), $(this).css("left") , $(this).attr("id"),ui)});
    }
  }

    // Players
    for (var i = 0; i < 6; i++) {
      $("#drag"+i).css({"top": w_height*(i*0.25)-w_height*0.2, "right": w_width*1.05, "border-color": "black", "background": "url('./img/players/l_"+i+".jpg')", "background-size": "cover"});
      $("#drag"+i).attr({"top": w_height*(i*0.25)-w_height*0.2, "right": w_width*1.05});
      $("#drag"+(i+13)).css({"top": w_height*(i*0.25)-w_height*0.2, "left": w_width*1.05, "border-color": "black", "background": "url('./img/players/r_"+i+".jpg')", "background-size": "cover"});
      $("#drag"+(i+13)).attr({"top": w_height*(i*0.25)-w_height*0.2, "left": w_width*1.05});
    }
    for (var i = 6; i < 13; i++) {
      $("#drag"+i).css({"top": w_height*((i-5)*0.25)-w_height*0.55, "right": w_width*1.2, "border-color": "black", "background": "url('./img/players/l_"+i+".jpg')", "background-size": "cover"});
      $("#drag"+i).attr({"top": w_height*((i-5)*0.25)-w_height*0.55, "right": w_width*1.2});
      $("#drag"+(i+13)).css({"top": w_height*((i-5)*0.25)-w_height*0.55, "left": w_width*1.2, "border-color": "black", "background": "url('./img/players/r_"+i+".jpg')", "background-size": "cover"});
      $("#drag"+(i+13)).attr({"top": w_height*((i-5)*0.25)-w_height*0.55, "left": w_width*1.2});
    }
    
    // Positions in court
    // Left 3
    $("#drop"+0).css({"top": w_height*0.4-w_height*0.3, "left": w_width*0.15, "border-color": "blue"});
    $("#drop"+1).css({"top": w_height*0.4, "left": w_width*0.15, "border-color": "blue"});
    $("#drop"+2).css({"top": w_height*0.4+w_height*0.3, "left": w_width*0.15, "border-color": "blue"});

    // Left 2
    $("#drop"+3).css({"top": w_height*0.4-w_height*0.2, "left": w_width*0.30, "border-color": "blue"});
    $("#drop"+4).css({"top": w_height*0.4+w_height*0.2, "left": w_width*0.30, "border-color": "blue"});

    // Right 3
    $("#drop"+5).css({"top": w_height*0.4-w_height*0.3, "right": w_width*0.15, "border-color": "red"});
    $("#drop"+6).css({"top": w_height*0.4, "right": w_width*0.15, "border-color": "red"});
    $("#drop"+7).css({"top": w_height*0.4+w_height*0.3, "right": w_width*0.15, "border-color": "red"});

    // Right 2
    $("#drop"+8).css({"top": w_height*0.4-w_height*0.2, "right": w_width*0.30, "border-color": "red"});
    $("#drop"+9).css({"top": w_height*0.4+w_height*0.2, "right": w_width*0.30, "border-color": "red"});

    // Display score
    $("#NBAcourt").append("<div id='teamscorefield' class='teamscore' style='top:"+w_height+";left:"+w_width*0.45+";'>score:</div>");
    // $('#teamscorefield').html('score: 200')

});

function randomnumber (top) {
  return Math.floor(top * Math.random());
}

function dropped(top, left, drop, ui) {
  // ui.draggable.css({"top": top,"left": left}).html("<p><br> Nice!</p>").css("border-color", "red");
  drop = "#" + drop;

  if($(drop).attr("pre") != null){
    pre = $(drop).attr("pre");
    if($(pre).attr("right") == null){
      $(pre).css({"top": $(pre).attr("top"), "left": $(pre).attr("left")});
    }else{
      $(pre).css({"top": $(pre).attr("top"), "right": $(pre).attr("right"), "left": ""});
    }
  }

  ui.draggable.css({"top": top,"left": left});

  $(drop).attr("pre", "#"+ui.draggable.attr("id"));

  $('#teamscorefield').html('score: ' +  randomnumber(123))

  // acertadas++;
  //$("body").css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16));

  // if (acertadas == 4) {
  //   $(".drag").html("<p><br>You Won!</p>").css("border-color", "green");
  // }
}