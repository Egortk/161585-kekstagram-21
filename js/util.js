'use strict';

(function () {
  const getRandomValue = function (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  window.util = {
    getRandomValue: getRandomValue
  };
})();
