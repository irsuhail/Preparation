Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = this;

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      callback.call(thisArg, array[i], i, array);
    }
  }
};
