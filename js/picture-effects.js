'use strict';

(function () {
  const imgUploadEffects = document.querySelector('.img-upload__effects');
  const imgUploadPreview = document.querySelector(`.img-upload__preview`);
  const imgUploadPreviewContent = imgUploadPreview.querySelector(`img`);

  //-----

  const effectLevelPin = document.querySelector(`.effect-level__pin`);
  const effectLevelLine = document.querySelector(`.effect-level__line`);
  const effectLevelDepth = document.querySelector(`.effect-level__depth`);

  const levelLineWidth = effectLevelLine.clientWidth;
  const levelLineMargin1 = (window.innerWidth - levelLineWidth)/2;
  const levelLineMargin2 = levelLineMargin1 + levelLineWidth;

  effectLevelPin.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    var startCoords = evt.clientX;s

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift =  startCoords - moveEvt.clientX;

      startCoords = moveEvt.clientX;

      var shiftValue = effectLevelPin.offsetLeft - shift;

      if (shiftValue < 0) {
        shiftValue = 0;
      }

      effectLevelPin.style.left = shiftValue + `px`;
      effectLevelDepth.style.width = effectLevelPin.offsetLeft + `px`;

    };

    var onMouseUp = function () {
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

  //-----

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
    effectsRadioChangeSelectHandler: effectsRadioChangeSelectHandler,
  };
})();
