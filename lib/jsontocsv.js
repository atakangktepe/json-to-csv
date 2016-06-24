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
  var csvHeader = [],
    csvHeadEachDone = false,
    csvValues = "",
    objIndex = 0;

  dataArr.forEach(function (value, index) {

    // If csv header pushing done set value to true
    csvHeadEachDone = (index === (dataArr.length - 1));

    // Pushing headers into an array
    for (var prop in value) {

      // Check header if exist in array, don't push
      if (!csvHeader.contains(prop)) {
        csvHeader.push(prop);
      }
    }

    // If Csv Headers Each Done
    if (csvHeadEachDone) {

      // Loop for data array
      for (var obj of dataArr) {

        for (var key of csvHeader) {
          objIndex++;

          // If object key undefined, set this empty
          obj[key] = (typeof obj[key] == "undefined") ? '" "' : obj[key];

          // Push into a string the values if line is ending seperate with comma
          if (objIndex % csvHeader.length == 0) {
            csvValues += obj[key] + " \n";
          } else {
            csvValues += obj[key] + ",";
          }
        }
      }
    }
  });

  callback(null, dataArr);
}
