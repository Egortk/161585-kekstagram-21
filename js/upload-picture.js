'use strict';

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
  window.pictureEffects.imgUploadEffects.addEventListener('change', window.pictureEffects.effectsRadioChangeSelectHandler);

  window.pictureEffects.imgUploadPreviewContent.style.transform = `scale(` + window.pictureScale.currentScaleValue * 0.01 + `)`;
  window.pictureScale.scaleControlBigger.addEventListener('click', window.pictureScale.increaseScaleClickHandler);
  window.pictureScale.scaleControlSmaller.addEventListener('click', window.pictureScale.decreaseScaleClickHandler);
  window.fieldsValidation.textDescription.addEventListener(`input`, window.fieldsValidation.textDescriptionInputHandler);
  window.fieldsValidation.hashtags.addEventListener(`input`, window.fieldsValidation.hashtagsInputHandler);
};

const closePopup = function () {
  imgUploadOverlay.classList.add(`hidden`);
  body.classList.remove(`modal-open`);

  document.removeEventListener(`keydown`, popupEscPressHandler);

  window.pictureEffects.imgUploadEffects.removeEventListener('change', window.pictureEffects.effectsRadioChangeSelectHandler);

  window.pictureScale.scaleControlBigger.removeEventListener('click', window.pictureScale.increaseScaleClickHandler);
  window.pictureScale.scaleControlSmaller.removeEventListener('click', window.pictureScale.decreaseScaleClickHandler);
  window.textDescription.removeEventListener(`input`, window.fieldsValidation.textDescriptionInputHandler);
  window.fieldsValidation.hashtags.removeEventListener(`input`, window.fieldsValidation.hashtagsInputHandler);
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
