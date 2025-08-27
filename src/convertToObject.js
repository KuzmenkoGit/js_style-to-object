'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let split = sourceString.split(';');

  split = split.map((item) => item.trim()).filter((item) => item.length > 0);
  split = split.map((item) => item.split(':').map((item2) => item2.trim()));

  const obj = {};

  for (const item of split) {
    obj[item[0]] = item[1];
  }

  return obj;
}

module.exports = convertToObject;
