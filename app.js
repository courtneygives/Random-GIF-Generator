// Random http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC

$(function (){
  var randomGif = {}

  $(".random-gif").on("click", function(){
    alert("random gif!");
  });

  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
    console.log(response);
    randomGif = response;

  });










});
