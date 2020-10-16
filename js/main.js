'use strict';

const getRandomValue = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

const minLikes = 15;
const maxLikes = 200;

const pictureList = document.querySelector(`.pictures`);
const picture = document.querySelector(`#picture`).content.querySelector(`.picture`);

let userNames = [
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

const commentBodies = [
  `Всё отлично!`,
  `В целом всё неплохо. Но не всё.`,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const pictureDescriptions = [
  `Мое фото.`,
  `Я тут был совсем недавно`,
  `Мотивация для домохозяек`,
  `Посмотрите какой я крутой`,
  `Бестолковое занятие эти ваши соцсети`,
  `Это видео блог, что происходит?`,
  `Волк слабее тигра, зато волк не выступает в цирке`,
  `Продам бизнес секреты`
];

const postAmount = 25;
let posts = [];
let comments = [];

for (var commentBodiesCount = 0; commentBodiesCount < commentBodies.length; commentBodiesCount++) {
  comments[i] = {
    avatar: `img/avatar-` + getRandomValue(6, 1) + `.svg`,
    message: commentBodies[getRandomValue(commentBodies.length, 0)],
    name: userNames[getRandomValue(userNames.length, 0)]
  };
}

for (var postCount = 0; postCount < postAmount; postCount++) {
  let imageNumber = 1;
  imageNumber += postCount;
  posts[postCount] = {
    url: `photos/` + imageNumber + `.jpg`,
    description: pictureDescriptions[getRandomValue(pictureDescriptions.length, 0)],
    likes: String(getRandomValue(maxLikes, minLikes)),
    comments: comments.slice(0, getRandomValue(comments.length, 0))
  };
}

// Отрисовка пользовательских фотографий

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

pictureList.appendChild(fragment);

// Слайдер

const imgUploadEffects = document.querySelector('.img-upload__effects');
const imgUploadPreview = document.querySelector(`.img-upload__preview`);
const imgUploadPreviewContent = imgUploadPreview.querySelector(`img`);

const getCleanStyle = function () {
  imgUploadPreviewContent.classList.remove(
      `effects__preview--chrome`,
      `effects__preview--sepia`,
      `effects__preview--marvin`,
      `effects__preview--phobos`,
      `effects__preview--heat`
  );
};

const effectsRadioChangeSelectHandler = function (evt) {
  if (evt.target && evt.target.matches('input[type="radio"]')) {
    var selectedEffect = evt.target.value;
  }

  var preparedStyle = `effects__preview--` + selectedEffect;

  if (selectedEffect !== `none`) {
    getCleanStyle();

    imgUploadPreviewContent.classList.add(preparedStyle);
  } else {
    getCleanStyle();
  }
};

// Масштабилка

const minScaleValue = 25;
const maxScaleValue = 100;

const scaleControlSmaller = document.querySelector(`.scale__control--smaller`);
const scaleControlBigger = document.querySelector(`.scale__control--bigger`);
const scaleControlValue = document.querySelector(`.scale__control--value`);

let currentScaleValue = minScaleValue;
scaleControlValue.value = String(currentScaleValue + `%`);

const increaseScaleClickHandler = function () {
  if (currentScaleValue < maxScaleValue) {
    currentScaleValue += minScaleValue;
  }
  scaleControlValue.value = String(currentScaleValue + `%`);
  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
};

const decreaseScaleClickHandler = function () {
  if (currentScaleValue > minScaleValue) {
    currentScaleValue -= minScaleValue;
  }
  scaleControlValue.value = String(currentScaleValue + `%`);
  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
};

// Валидация хештегов

const MAX_DESCRIPTION_LENGTH = 140;

const maxHashtagCount = 5;
const hashtags = document.querySelector(`.text__hashtags`);
const textDescription = document.querySelector(`.text__description`);

var regexTag = /^#[\w]{1,19}$/;

var textDescriptionInputHandler = function () {
  var valueLength = textDescription.value.length;

  if (valueLength > MAX_DESCRIPTION_LENGTH) {
    textDescription.setCustomValidity('Удалите лишние ' + (valueLength - MAX_DESCRIPTION_LENGTH) + ' симв.');
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
};

var hashtagsInputHandler = function () {
  var hashtagList = hashtags.value.split(` `);
  for (var hashtagListCount = 0; hashtagListCount < hashtagList.length; hashtagListCount++) {
    var checkResult = regexTag.test(hashtagList[i]);
  }

  if (hashtagList.length > maxHashtagCount) {
    hashtags.setCustomValidity('Вы можеье даба  вить не более 5 тегов');
  } else if (!checkResult) {
    hashtags.setCustomValidity('Ошибка тега');
  } else {
    hashtags.setCustomValidity('');
  }
  hashtags.reportValidity();
};


// Открыть попап

const uploadFileButton = document.querySelector(`#upload-file`);
const imgUploadOverlay = document.querySelector(`.img-upload__overlay`);
const uploadCancel = document.querySelector(`#upload-cancel`);
const body = document.querySelector(`body`);

const popupEscPressHandler = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  imgUploadOverlay.classList.remove(`hidden`);
  body.classList.add(`modal-open`);

  document.addEventListener(`keydown`, popupEscPressHandler);
  imgUploadEffects.addEventListener('change', effectsRadioChangeSelectHandler);

  imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
  scaleControlBigger.addEventListener('click', increaseScaleClickHandler);
  scaleControlSmaller.addEventListener('click', decreaseScaleClickHandler);
  textDescription.addEventListener(`input`, textDescriptionInputHandler);
  hashtags.addEventListener(`input`, hashtagsInputHandler);
};

const closePopup = function () {
  imgUploadOverlay.classList.add(`hidden`);
  body.classList.remove(`modal-open`);

  document.removeEventListener(`keydown`, popupEscPressHandler);

  imgUploadEffects.removeEventListener('change', effectsRadioChangeSelectHandler);

  scaleControlBigger.removeEventListener('click', increaseScaleClickHandler);
  scaleControlSmaller.removeEventListener('click', decreaseScaleClickHandler);
  textDescription.removeEventListener(`input`, textDescriptionInputHandler);
  hashtags.removeEventListener(`input`, hashtagsInputHandler);
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
  }
});
