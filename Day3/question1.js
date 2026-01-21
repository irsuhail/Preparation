Array.prototype.myMap = function (callback, thisArg) {

 
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const arr = this;

  for (let i = 0; i < arr.length; i++) {

   
    if (i in arr) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }

  return result;
};
