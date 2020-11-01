'use strict';

(function () {
  const pictureList = document.querySelector(`.pictures`);
  const picture = document.querySelector(`#picture`).content.querySelector(`.picture`);

  const postAmount = 25;
  let posts = [];
  let comments = [];

  for (var commentBodiesCount = 0; commentBodiesCount < window.moks.commentBodies.length; commentBodiesCount++) {
    comments[i] = {
      avatar: `img/avatar-` + window.util.getRandomValue(6, 1) + `.svg`,
      message: window.moks.commentBodies[window.util.getRandomValue(window.moks.commentBodies.length, 0)],
      name: window.moks.userNames[window.util.getRandomValue(window.moks.userNames.length, 0)]
    };
  }

  for (var postCount = 0; postCount < postAmount; postCount++) {
    let imageNumber = 1;
    imageNumber += postCount;
    posts[postCount] = {
      url: `photos/` + imageNumber + `.jpg`,
      description: window.moks.pictureDescriptions[window.util.getRandomValue(window.moks.pictureDescriptions.length, 0)],
      likes: String(window.util.getRandomValue(window.moks.maxLikes, window.moks.minLikes)),
      comments: comments.slice(0, window.util.getRandomValue(comments.length, 0))
    };
  }

  const renderPost = function () {
    const postElement = picture.cloneNode(true);

    postElement.querySelector(`.picture__img`).src = posts[i].url;
    postElement.querySelector(`.picture__likes`).textContent = posts[i].likes;
    postElement.querySelector(`.picture__comments`).textContent = posts[i].comments.length;

    return postElement;
  };

  const fragment = document.createDocumentFragment();

  for (var i = 0; i < posts.length; i++) {
    fragment.appendChild(renderPost(posts[i]));
  }

  window.postsRender = {
    pictureList: pictureList,
    fragment: fragment
  }
})();
