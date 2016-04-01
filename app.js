// Random http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC

$(function (){
  var randomGif = {};

  $(".gif-button").on("click", function(){
    $(".gif-window").empty();
    $(".gif-message").empty();
    giferateRandom();
  });

  $(".clear-button").on("click", function(){
    $(".gif-window").empty();
    $(".gif-message").empty();
  });



function giferateRandom(){
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
    randomGif = response;
    console.log(response);
    $(".gif-message").append("<h2>"
    + "Here's your gif."
    + "</h2><p>"
    + "That will be $2.00." + "</p>")
    $(".gif-window").append("<img src=" + response.data.image_url + ">");
  });
}









});
