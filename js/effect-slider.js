'use strict';

(function () {
  const effectLevelPin = document.querySelector(`.effect-level__pin`);
  const effectLevelLine = document.querySelector(`.effect-level__line`);
  const effectLevelDepth = document.querySelector(`.effect-level__depth`);
  const effectLevelValue = document.querySelector(`.effect-level__value`);

  let shiftValue;

  effectLevelPin.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = evt.clientX;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      const levelLineStartCoord = (window.innerWidth - effectLevelLine.clientWidth) / 2;
      const levelLineEndCoords = levelLineStartCoord + effectLevelLine.clientWidth;

      const shift = startCoords - moveEvt.clientX;

      startCoords = moveEvt.clientX;

      shiftValue = effectLevelPin.offsetLeft - shift;

      if (moveEvt.clientX < levelLineStartCoord) {
        shiftValue = 0;
      }

      if (moveEvt.clientX > levelLineEndCoords) {
        shiftValue = effectLevelLine.clientWidth;
      }

      effectLevelPin.style.left = shiftValue + `px`;
      effectLevelDepth.style.width = effectLevelPin.offsetLeft + `px`;

      effectLevelValue.value = Number(shiftValue);
      effectLevelValue.textContent = shiftValue;

      window.pictureEffects.imgUploadPreviewContent.style.filter = window.pictureEffects.effectsRadioChangeSelectHandler(evt).filterName + `(` + ((window.pictureEffects.effectsRadioChangeSelectHandler(evt).filterCoof / effectLevelLine.clientWidth) * shiftValue) + window.pictureEffects.effectsRadioChangeSelectHandler(evt).filterCounter + `)`;
    };

    const onMouseUp = function () {
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);

  });

})();
