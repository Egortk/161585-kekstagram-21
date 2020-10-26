'use strict';

(function () {
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

  const hashtagsInputHandler = function () {
    const hashtagList = hashtags.value.split(` `);
    for (var i = 0; i < hashtagList.length; i++) {
      var checkResult = regexTag.test(hashtagList[i]);
    }

    if (hashtagList.length > maxHashtagCount) {
      hashtags.setCustomValidity('Вы можеье дабавить не более 5 тегов');
    } else if (!checkResult) {
      hashtags.setCustomValidity('Ошибка тега');
    } else {
      hashtags.setCustomValidity('');
    }
    hashtags.reportValidity();
  };

  window.fieldsValidation = {
    hashtags: hashtags,
    textDescription: textDescription,
    textDescriptionInputHandler: textDescriptionInputHandler,
    hashtagsInputHandler: hashtagsInputHandler
  };
})();
