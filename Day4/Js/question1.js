Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const array = this;

  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};
