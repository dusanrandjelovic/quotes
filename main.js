$(document).ready(function(){
 let randomCitat;
  let randomNum;

  function getCitat(){
   const citati = ["I think that if you go through life and no one hates you, then that means you're not good at anything.",
   "This Game is not over, it is just beginning.",
   "There's only one thing on my mind. There's only one goal. One aim. One focus.",
   "Evolution is your solution.", "This is a game that you don't want to be in!"];
    randomNum = Math.floor((Math.random()*citati.length));
    randomCitat = citati[randomNum];
   $(".citat").text(randomCitat);

 }
   $("#noviCitat").on("click", function(){
     getCitat();
   });
  $("#tweeter").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomCitat);
  });
});
