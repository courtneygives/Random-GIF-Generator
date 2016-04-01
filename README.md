# Random-GIF-Generator
Today you will use jQuery's ajax function to create a random GIF (not like the peanut butter) generator!

Information and examples about the API can be found here: https://github.com/Giphy/GiphyAPI

You application should have an HTML page with a button on it, when the button is clicked it should retrieve a random GIF from Giphy and append it to the screen.

##Hard Mode
Include text input to add tags to your random generation (see docs).

## Pro Mode
Allow normal (non-random) searching and show all results.

$(function(){
  var movieData = {};
  var banannaSandwich = {};
​
  $(".getMeWarwick").on("click", function(){
    $(".getMeRickyGervais").on("click", function(){
      console.log('Blah blah blah');
    })
  })
​
  function getWarwick(){
    $.get('http://www.omdbapi.com/?t=Willow&y=&plot=short&r=json').done(function(response){
      console.log(response);
      banannaSandwich = response;
      beginProcessingBanannaSandwich();
    })
  }
​
  function beginProcessingBanannaSandwich(){
    $("body").append("<p> " + banannaSandwich.Title + " was made in " + banannaSandwich.Year + "</p>");
  }
  //kill some time
  for(var x = 0; x < 1000; x++){
  }
  banannaSandwich.thing = 2;
  movieData.dateCreated = 'Friday';
})
