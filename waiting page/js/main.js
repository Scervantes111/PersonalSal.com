$(document).ready(function() {
/*
  setInterval(swapText, 4000);

  function swapText(){
    $("#profile-text-fade").fadeOut(500, function() {
      $(this).fadeIn(1000).delay(2000);
      $(this).html('and much more!');
      $(this).fadeOut(500, function () {
        $(this).fadeIn(2000, function () {
          $(this).html('In the making, Soon to show all the work I can create!');
        })
        });
    });
  }
*/

var msgs = [ "In the making, Soon to show all the work I can create!","and much more!"];
var indx = 0;

$("#profile-text-fade").text(msgs[indx]);

setInterval(function() {
  $("#profile-text-fade").fadeOut(500, function() {
      indx++;
      if (indx>=msgs.length) indx=0;
      $(this).text(msgs[indx]);
      $(this).fadeIn(500);
    });
}, 3000);
});
