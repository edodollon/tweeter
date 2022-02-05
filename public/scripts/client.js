/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const renderTweets = function(tweets) {
    for (const tweet in tweets) {
      console.log(tweet);
    }
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend(createTweetElement(tweetData));
  }

  const createTweetElement = (tweet) => {
    let newTweet = `
    <article class="tweet">
      <header>
        <div>
          <i class="fas fa-user-circle"></i>
          <p>${tweet.user.name}</p>
        </div>
        <div>
          <p>${tweet.user.handle}</p>
        </div>
      </header>
        <p>${tweet.content.text}</p>
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
  }

  renderTweets(tweetData);

  // Form Submission
  const $form = $('#tweet-text');

  $form.submit(function (event) {
    event.preventDefault();
  })
}); 