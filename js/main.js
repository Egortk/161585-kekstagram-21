'use strict';

var getRandomValue = function (max, min) {
  return Math.round(Math.random() * (max - min) + min);
};

var minLikes = 15;
var maxLikes = 200;

var pictureList = document.querySelector(`.pictures`);
var picture = document.querySelector(`#picture`).content.querySelector(`.picture`);

var userNames = [
  `Коля Моля`,
  `Маша Саша`,
  `Петя Бетя`,
  `Вася Картошкин`,
  `Ира Арбузова`,
  `Тетя Таня`,
  `Дядя Федя`,
  `Бабушка Зина`,
  `Дедушка Митя`
];

var commentBodies = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

var pictureDescriptions = [
  `Мое фото.`,
  `Я тут был совсем недавно`,
  `Мотивация для домохозяек`,
  `Посмотрите какой я крутой`,
  `Бестолковое занятие эти ваши соцсети`
];

var postAmount = 25;
var posts = [];
var comments = [];

for (var commentCount = 0; commentCount < commentBodies.length; commentCount++) {
  comments[commentCount] = {
    avatar: `img/avatar-` + getRandomValue(6, 1) + `.svg`,
    message: commentBodies[getRandomValue(commentBodies, 0)],
    name: userNames[getRandomValue(userNames, 0)]
  };
}

for (var postCount = 0; postCount < postAmount; postCount++) {
  var imageNumber = 1;
  imageNumber += postCount;
  posts[postCount] = {
    url: `photos/` + imageNumber + `.jpg`,
    description: pictureDescriptions[getRandomValue(pictureDescriptions, 0)],
    likes: String(getRandomValue(maxLikes, minLikes)),
    comments: comments.slice(0, getRandomValue(comments.length, 0))
  };
}

var renderPost = function () {
  var postElement = picture.cloneNode(true);

  postElement.querySelector(`.picture__img`).src = posts[i].url;
  postElement.querySelector(`.picture__likes`).textContent = posts[i].likes;
  postElement.querySelector(`.picture__comments`).textContent = posts[i].comments.length;

  return postElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < posts.length; i++) {
  fragment.appendChild(renderPost(posts[i]));
}

pictureList.appendChild(fragment);
