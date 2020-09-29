var GET_RANDOM_VALUE = function (max, min) {
  return Math.round(Math.random() * (max - min) + min);
};

var GET_RANDOM_I = function (countObj) {
  for (var startValue = 0; startValue < (countObj.length -1); startValue++) {
    startValue += 1;
  };
  return Math.round(Math.random() * (startValue - 0) + 0);
};

var getPictureList = document.querySelector('.pictures');
var getPicture = document.querySelector('#picture').content.querySelector('.picture');

var userName = [
  'Коля Моля',
  'Маша Саша',
  'Петя Бетя',
  'Вася Картошкин',
  'Ира Арбузова',
  'Тетя Таня',
  'Дядя Федя',
  'Бабушка Зина',
  'Дедушка Митя'
];

var commentBody = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var pictureDescription = [
  'Мое фото.',
  'Я тут был совсем недавно',
  'Мотивация для домохозяек',
  'Посмотрите какой я крутой',
  'Бестолковое занятие эти ваши соцсети'
];

var postAmount = 25;
var posts = [];
var comments = [];

for (var commentCount = 0; commentCount < commentBody.length; commentCount++) {
  comments[commentCount] = {
    avatar: 'img/avatar-' + GET_RANDOM_VALUE(6, 1) + '.svg',
    message: commentBody[GET_RANDOM_I(commentBody)],
    name: userName[GET_RANDOM_I(userName)]
  }
}

for (var postCount = 0; postCount < postAmount; postCount++) {
  var imageNumber = 1;
  imageNumber += postCount;
  posts[postCount] = {
    url: 'photos/' + imageNumber + '.jpg',
    description: pictureDescription[GET_RANDOM_I(pictureDescription)],
    likes: String(GET_RANDOM_VALUE(200, 15)),
    comment: comments = new Array (GET_RANDOM_VALUE(commentBody.length, 0))
  };
}

var renderPost = function () {
  var postElement = getPicture.cloneNode(true);

  postElement.querySelector('.picture__img').src = posts[i].url;
  postElement.querySelector('.picture__likes').textContent = posts[i].likes;
  postElement.querySelector('.picture__comments').textContent = posts[i].comment.length;

  return postElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < posts.length; i++) {
  fragment.appendChild(renderPost(posts[i]));
}

getPictureList.appendChild(fragment);
