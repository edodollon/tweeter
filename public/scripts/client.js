/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (tweet) => {
    let newTweet = `
    <article class="tweet">
      <header>
        <div>
          <i class="fas fa-user-circle"></i>
          <p>${escape(tweet.user.name)}</p>
        </div>
        <div>
          <p>${escape(tweet.user.handle)}</p>
        </div>
      </header>
      <main>
        <p>
          ${escape(
              tweet.content.text.length > 40 ? tweet.content.text.slice(0, 40) + "\n" + 
              tweet.content.text.slice(40, tweet.content.text.length) 
              : tweet.content.text
          )}
        </p>
      </main>
      <footer>
        <p>${timeago.format(tweet.created_at)}</p>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>`;

    return newTweet;
  };

  const renderTweets = function(tweets) {
    const twContainer = $('#tweets-container');
    $.each(tweets, (key) => {
      twContainer.prepend(createTweetElement(tweets[key]));
    });

    return twContainer;
  };

  // Form Submission
  const $form = $("#tweet-form");

  $form.submit(function (event) {
    event.preventDefault();

    $(".error-handler").slideUp();
    $("#char-error").slideUp();
    $("#empty-error").slideUp();

    const newTweet = event.target[0].value;
    if (newTweet.length > 140) {
      $("#char-error").slideDown();
      return;
    }

    if (!newTweet || null) {
      $("#empty-error").slideDown();
      return;
    }

    $.ajax({
      method: "POST",
      url: "http://localhost:8080/tweets",
      data: $(this).serialize()
    }).then(function () {
      loadTweets();
    });
  });

  // Fetch tweets with AJAX
  const loadTweets = function () {
    $.ajax({
      method: "GET",
      url: "http://localhost:8080/tweets",
    }).then(function (tweet) {
      renderTweets(tweet);
      document.querySelector("#tweet-form").reset();
    });
  };
  loadTweets();
});