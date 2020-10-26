'use strict';

(function () {
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
    window.pictureEffects.imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
  };

  const decreaseScaleClickHandler = function () {
    if (currentScaleValue > minScaleValue) {
      currentScaleValue -= minScaleValue;
    }
    scaleControlValue.value = String(currentScaleValue + `%`);
    window.pictureEffects.imgUploadPreviewContent.style.transform = `scale(` + currentScaleValue * 0.01 + `)`;
  };

  window.pictureScale = {
    scaleControlSmaller: scaleControlSmaller,
    scaleControlBigger: scaleControlBigger,
    currentScaleValue: currentScaleValue,
    increaseScaleClickHandler: increaseScaleClickHandler,
    decreaseScaleClickHandler: decreaseScaleClickHandler
  };
})();
