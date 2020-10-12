'use strict';

var getRandomValue = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
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
  `Бестолковое занятие эти ваши соцсети`,
  `Это видео блог, что происходит?`,
  `Волк слабее тигра, зато волк не выступает в цирке`,
  `Продам бизнес секреты`
];

var postAmount = 25;
var posts = [];
var comments = [];

for (var i = 0; i < commentBodies.length; i++) {
  comments[i] = {
    avatar: `img/avatar-` + getRandomValue(6, 1) + `.svg`,
    message: commentBodies[getRandomValue(commentBodies.length, 0)],
    name: userNames[getRandomValue(userNames.length, 0)]
  };
}

for (var postCount = 0; postCount < postAmount; postCount++) {
  var imageNumber = 1;
  imageNumber += postCount;
  posts[postCount] = {
    url: `photos/` + imageNumber + `.jpg`,
    description: pictureDescriptions[getRandomValue(pictureDescriptions.length, 0)],
    likes: String(getRandomValue(maxLikes, minLikes)),
    comments: comments.slice(0, getRandomValue(comments.length, 0))
  };
}

// Отрисовка пользовательских фотографий

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

// Показать полный пост

var socialCommentCount = document.querySelector(`.social__comment-count`);
var commentsLoader = document.querySelector(`.comments-loader`);

socialCommentCount.classList.add(`hidden`)
commentsLoader.classList.add(`hidden`)

var thumbnails = document.querySelectorAll(`.picture`);
var fullPicture = document.querySelector(`.big-picture`);
var bigPictureCancel = document.querySelector(`.big-picture__cancel`);
var pictureImg = document.querySelector(`.big-picture__img img`);
var lickes = document.querySelector(`.likes-count`);
var commentCount = document.querySelector(`.comments-count`);
var socialComments = document.querySelector(`.social__comments`);
var socialComment = document.querySelector(`.social__comment`);
var socialCommentTemplates = document.querySelectorAll(`.social__comment`);
var socialCaption = document.querySelector(`.social__caption`);

var addThumbnailClickHandler = function (thumbnail, picture, likeTotal, commentTotal, caption) {
  thumbnail.addEventListener(`click`, function () {
    fullPicture.classList.remove(`hidden`);
    pictureImg.src = picture;
    lickes.textContent = likeTotal;
    commentCount.textContent = commentTotal;
    socialCaption.textContent = caption;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(
    thumbnails[i],
    posts[i].url,
    posts[i].likes,
    posts[i].comments.length,
    posts[i].description
  );

  bigPictureCancel.addEventListener(`click`, function () {
    fullPicture.classList.add(`hidden`);
  });
};

// Слайдер

var effectLevel = 25;

var effectLevelPin = document.querySelector(`.effect-level__pin`);
var effectsRadio = document.querySelectorAll(`.effects__radio`);
var imgUploadEffects = document.querySelector('.img-upload__effects');
var imgUploadPreview = document.querySelector(`.img-upload__preview`);
var imgUploadPreviewContent = imgUploadPreview.querySelector(`img`);

var levelPinMove = function () {
  console.log(`Кликнут пин слайдера`);
};

var getCleanStyle = function () {
  imgUploadPreviewContent.classList.remove(
    `effects__preview--chrome`,
    `effects__preview--sepia`,
    `effects__preview--marvin`,
    `effects__preview--phobos`,
    `effects__preview--heat`
  );
};

var effectsRadioChangeHandler = function (evt) {
  if (evt.target && evt.target.matches('input[type="radio"]')) {
    var selectedEffect = evt.target.value;
  };

  var preparedStyle = `effects__preview--` + selectedEffect;

  if (selectedEffect !== `none`) {
    getCleanStyle();

    imgUploadPreviewContent.classList.add(preparedStyle);
  } else {
    getCleanStyle();
  };
};

imgUploadEffects.addEventListener('change', effectsRadioChangeHandler);

// Масштабилка

var minScaleValue = 25;
var maxScaleValue = 100;

var scaleControlSmaller = document.querySelector(`.scale__control--smaller`);
var scaleControlBigger = document.querySelector(`.scale__control--bigger`);
var scaleControlValue = document.querySelector(`.scale__control--value`);

var currentScaleValue = minScaleValue;
scaleControlValue.value = String(currentScaleValue + `%`);

var increaseScale = function () {
  if (currentScaleValue < maxScaleValue) {
    currentScaleValue += minScaleValue;
  };
  scaleControlValue.value = String(currentScaleValue + `%`);
  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
};

var decreaseScale = function () {
  if (currentScaleValue > minScaleValue) {
    currentScaleValue -= minScaleValue;
  };
  scaleControlValue.value = String(currentScaleValue + `%`);
  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
};

// Валидация хештегов

var MAX_DESCRIPTION_LENGTH = 140;

var maxHashtagCount = 6;
var hashtags = document.querySelector(`.text__hashtags`);
var imgUploadForm = document.querySelector(`.img-upload__form`);
var imgUploadSubmit = document.querySelector(`.img-upload__submit`);
var textDescription = document.querySelector(`.text__description`);

var regexTag = /^#[\w]{1,19}$/;

var inputPictureDescription = function () {
  var valueLength = textDescription.value.length;

  if (valueLength > MAX_DESCRIPTION_LENGTH) {
    textDescription.setCustomValidity('Удалите лишние ' + (valueLength - MAX_DESCRIPTION_LENGTH) +' симв.');
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
};

var inputPictureTags = function () {
  var hashtagList = hashtags.value.split(` `);
  for (var i = 0; i < hashtagList.length; i++) {
    var checkResult = regexTag.test(hashtagList[i]);
  };

  if (hashtagList.length > 5) {
    hashtags.setCustomValidity('Вы можеье даба  вить не более 5 тегов');
  } else if (!checkResult) {
    hashtags.setCustomValidity('Ошибка тега');
  } else {
    hashtags.setCustomValidity('');
  };
  hashtags.reportValidity();
};



// Открыть попап

var uploadFileButton = document.querySelector(`#upload-file`);
var imgUploadOverlay = document.querySelector(`.img-upload__overlay`);
var uploadCancel = document.querySelector(`#upload-cancel`);
var body = document.querySelector(`body`);

var onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  };
};

var openPopup = function () {
  imgUploadOverlay.classList.remove(`hidden`);
  body.classList.add(`modal-open`);

  document.addEventListener(`keydown`, onPopupEscPress);
  effectLevelPin.addEventListener(`mouseup`, levelPinMove);
  imgUploadEffects.addEventListener('change', effectsRadioChangeHandler);

  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
  scaleControlBigger.addEventListener('click', increaseScale);
  scaleControlSmaller.addEventListener('click', decreaseScale);
  textDescription.addEventListener(`input`, inputPictureDescription);
  hashtags.addEventListener(`input`, inputPictureTags);
};

var closePopup = function () {
  imgUploadOverlay.classList.add(`hidden`);
  body.classList.remove(`modal-open`);

  document.removeEventListener(`keydown`, onPopupEscPress);
  effectLevelPin.removeEventListener(`mouseup`, levelPinMove);
  imgUploadEffects.removeEventListener('change', effectsRadioChangeHandler);

  scaleControlBigger.removeEventListener('click', increaseScale);
  scaleControlSmaller.removeEventListener('click', decreaseScale);
  textDescription.removeEventListener(`input`, inputPictureDescription);
  hashtags.removeEventListener(`input`, inputPictureTags);
};

uploadFileButton.addEventListener(`change`, function () {
  openPopup();
});

uploadCancel.addEventListener(`click`, function () {
  closePopup();
});

uploadCancel.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  };
});
