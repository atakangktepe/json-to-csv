/**
 * This function create csv from object
 *
 * @param  {Object}   json   Containing incoming json data.
 * @param  {Function} callback It's callback and if csv is created successfully
 * it will be return csv type string
 */
module.exports = function (json, callback) {
  var csv = json;

  if (!callback || typeof callback !== 'function') {
    throw new Error('Callback is required');
  }

  if (!json || typeof json !== 'object') {
    callback('Json is required');
  }

  callback(null, csv);
}
