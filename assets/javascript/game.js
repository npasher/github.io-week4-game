$(document).ready(function() {
  /*assigns audio to button press*/
  var audioElement=document.createElement("audio");
        audioElement.setAttribute("src", "assets/audio/zapsplat_tech.mp3");
  /*audio on button press*/
  $(".crystal").click(function(){
        audioElement.play();
        });
/*assigns variable random number generator*/
  var randomNum=Math.floor(Math.random()*102)+19;
  $("#target").html(randomNum);
/*adjusts number total with selection*/
  var currentScore=0;
  var newScore=$("<div>");
  newScore.html(currentScore);
  $("#score-current").append(newScore);
/*win total*/
  var winCount=0;
  $("#wins").html(winCount);
/*loss total*/
  var lossCount=0;
  $("#losses").html(lossCount);
/*generates button value*/
  var tweedVal=$("#tweed").val(Math.floor(Math.random()*12)+1);
  var greenVal=$("#green").val(Math.floor(Math.random()*12)+1);
  var greyVal=$("#grey").val(Math.floor(Math.random()*12)+1);
  var yellowVal=$("#yellow").val(Math.floor(Math.random()*12)+1);
/*calls button value*/
  tweedVal=$("#tweed").val();
  greenVal=$("#green").val();
  greyVal=$("#grey").val();
  yellowVal=$("#yellow").val();
/*compares value of click with random number*/
  $(".crystal").click(function(){
    currentScore=currentScore+parseInt($(this).val());
    newScore.html(currentScore);
    $("#score-current").append(newScore);
/*loss function*/
    if(currentScore>randomNum){
      lossCount++;
      $("#losses").html(lossCount);

      currentScore=0;
      newScore.html(currentScore);
      $("#score-current").append(newScore);

      alert("Overshot the Number! Ready to try again?");

      randomNum = Math.floor(Math.random()*102)+19;
      $("#target").html(randomNum);

      $("#tweed").val(Math.floor(Math.random()*12)+1);
      $("#green").val(Math.floor(Math.random()*12)+1);
      $("#grey").val(Math.floor(Math.random()*12)+1);
      $("#yellow").val(Math.floor(Math.random()*12)+1);

      tweedVal= $("#tweed").val();
      greenVal= $("#green").val();
      greyVal= $("#grey").val();
      yellowVal= $("#yellow").val();
    }
/*win function*/
    if(currentScore === randomNum){
      winCount++;
      $("#wins").html(winCount);

      currentScore=0;
      newScore.html(currentScore);
      $("#score-current").append(newScore);

      alert("Winner!, Winner!, Chicken Dinner!")

      randomNum = Math.floor(Math.random()*102)+19;
      $("#target").html(randomNum);

      $("#tweed").val(Math.floor(Math.random()*12)+1);
      $("#green").val(Math.floor(Math.random()*12)+1);
      $("#grey").val(Math.floor(Math.random()*12)+1);
      $("#yellow").val(Math.floor(Math.random()*12)+1);

      tweedVal= $("#tweed").val();
      greenVal= $("#green").val();
      greyVal= $("#grey").val();
      yellowVal= $("#yellow").val();
    }
  });
  });