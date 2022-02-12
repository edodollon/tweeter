$(document).ready(function() {
  console.log("Document ready!");

  $("#tweet-text").on('keyup', function() {
    let value = $(this).val().length;
    let countVal = 140;
    let currentVal = countVal - value;

    $(".counter").text(currentVal).toggleClass('long-tweet', currentVal < 0);
  });
});