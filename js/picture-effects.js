'use strict';

(function () {
  const imgUploadEffects = document.querySelector('.img-upload__effects');
  const imgUploadPreview = document.querySelector(`.img-upload__preview`);
  const imgUploadPreviewContent = imgUploadPreview.querySelector(`img`);
  const imgUploadEffectLevel = document.querySelector(`.img-upload__effect-level`);
  const effectLevelDepth = document.querySelector(`.effect-level__depth`);
  const effectLevelPin = document.querySelector(`.effect-level__pin`);

  let selectedEffect;
  let filterName;
  let filterCounter;
  let filterCoof;

  const getCleanStyle = function () {
    imgUploadPreviewContent.classList.remove(
        `effects__preview--chrome`,
        `effects__preview--sepia`,
        `effects__preview--marvin`,
        `effects__preview--phobos`,
        `effects__preview--heat`
    );
  };

  imgUploadEffectLevel.style.opacity = 0;

  const effectsRadioChangeSelectHandler = function (evt) {

    imgUploadPreviewContent.style.filter = ``;

    if (evt.target && evt.target.matches('input[type="radio"]')) {

      effectLevelPin.style.left = `100%`;
      effectLevelDepth.style.width = `100%`;

      selectedEffect = evt.target.value;

      let preparedStyle = `effects__preview--` + selectedEffect;
      if (selectedEffect !== `none`) {
        getCleanStyle();
        imgUploadEffectLevel.style.opacity = 1;
        imgUploadPreviewContent.classList.toggle(preparedStyle);
      } else {
        imgUploadPreviewContent.style.filter = ``;
        getCleanStyle();
        imgUploadEffectLevel.style.opacity = 0;
      }
    }

    if (selectedEffect === `chrome`) {
      filterName = `grayscale`;
      filterCounter = ``;
      filterCoof = 1;
    } else if (selectedEffect === `marvin`) {
      filterName = `invert`;
      filterCounter = `%`;
      filterCoof = 100;
    } else if (selectedEffect === `phobos`) {
      filterName = `blur`;
      filterCounter = `px`;
      filterCoof = 3;
    } else if (selectedEffect === `heat`) {
      filterName = `brightness`;
      filterCounter = ``;
      filterCoof = 3;
    } else {
      filterName = selectedEffect;
      filterCounter = ``;
      filterCoof = 1;
    }

    return {
      filterName: filterName,
      filterCounter: filterCounter,
      filterCoof: filterCoof
    };
  };

  window.pictureEffects = {
    imgUploadEffects: imgUploadEffects,
    imgUploadPreviewContent: imgUploadPreviewContent,
    effectsRadioChangeSelectHandler: effectsRadioChangeSelectHandler,
    selectedEffect: selectedEffect,
    filterName: filterName
  };
})();
