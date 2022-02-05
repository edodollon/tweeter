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

  const createTweetElement = (data) => {
    const newTweet = `
    <article class="tweet">
      <header>
        <div>
          <i class="fas fa-user-circle"></i>
          <p>${data.user.name}</p>
        </div>
        <div>
          <p>${data.user.handle}</p>
        </div>
      </header>
        <p>${data.content.text}</p>
      <footer>
        <p>${data.created_at}</p>
        <div>
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>`;

    return newTweet;
  }

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').prepend($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}); 