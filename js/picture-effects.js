'use strict';

(function () {
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

  window.pictureEffects = {
    imgUploadEffects: imgUploadEffects,
    imgUploadPreviewContent: imgUploadPreviewContent,
    effectsRadioChangeSelectHandler: effectsRadioChangeSelectHandler
  }
})();
