'use strict';

(function () {
  const minLikes = 15;
  const maxLikes = 200;

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

  window.moks = {
    minLikes: minLikes,
    maxLikes: maxLikes,
    userNames: userNames,
    commentBodies: commentBodies,
    pictureDescriptions: pictureDescriptions
  };
})();
