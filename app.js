// Random http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC

$(function (){
  var randomGif = {};

  $(".random-gif").on("click", function(){
    alert("random gif!");
    giferateRandom();
  });

function giferateRandom(){
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').done(function(response){
    randomGif = response;
    console.log(response);
    $(".gif-window").append("<img src=" + response.data.image_url + ">");
  });
}









});
