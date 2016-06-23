/**
 * This function looking array into for searched key.
 *
 * @param {*} element - Searching for this key
 * @returns {Boolean} - If Array contains element the function will return boolean.
 */
Array.prototype.contains = function (element) {
  return this.indexOf(element) > -1;
};

/**
 * This function create csv from object
 *
 * @param  {Object} json - Containing incoming json data.
 * @param  {Function} callback - It's callback and if csv is created successfully
 * it will be return csv type string
 */
module.exports = function (json, callback) {
  if (!callback || typeof callback !== 'function') {
    throw new Error('Callback is required');
  }

  if (!json || typeof json !== 'object') {
    callback('Json is required');
  }

  // If json file is has not parent array push this to an array
  var dataArr = Array.isArray(json) ? json : [json];
  var csvKeys = [];

  dataArr.forEach(function (value) {

    for (var prop in value) {

      // Check key if exist in array, don't push
      if (!csvKeys.contains(prop)) {
        csvKeys.push(prop);
      }
    }
  });

  callback(null, dataArr);
}
