$(document).ready(function() {
  console.log("Document ready!");

  // $("#tweet-text").keypress(function() {
  //   console.log('KEYPRESS', this);
  // });

  $("#tweet-text").on('input', function(event) {
    let value = $(this).val();
    let count = 140 - value.length;
    let countNum = event.target.form.counter.innerText;

    if (count < 0) {
      $(".counter").css("color", "red");
    }

    $(".counter").text(`${count}`);
  });
});