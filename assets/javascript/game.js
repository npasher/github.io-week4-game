$(document).ready(function() {

  var audioElement=document.createElement("audio");
        audioElement.setAttribute("src", "assets/audio/8BallAitken_CycloneCountry.mp3");

  $(".crystal").click(function(){
        audioElement.play();
        });
  $(".pause").click(function(){
        audioElement.pause();
        });

  var randomNum=Math.floor(Math.random()*102)+19;
  $("#target").html(randomNum);

  var currentScore=0;
  var newScore=$("<div>");
  newScore.html(currentScore);
  $("#score-current").append(newScore);

  var winCount=0;
  $("#wins").html(winCount);
  var lossCount=0;
  $("#losses").html(lossCount);

  var tweedVal=$("#tweed").val(Math.floor(Math.random()*12)+1);
  var greenVal=$("#green").val(Math.floor(Math.random()*12)+1);
  var greyVal=$("#grey").val(Math.floor(Math.random()*12)+1);
  var yellowVal=$("#yellow").val(Math.floor(Math.random()*12)+1);

  tweedVal=$("#tweed").val();
  greenVal=$("#green").val();
  greyVal=$("#grey").val();
  yellowVal=$("#yellow").val();

  $(".crystal").click(function(){
    currentScore=currentScore+parseInt($(this).val());
    newScore.html(currentScore);
    $("#score-current").append(newScore);

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