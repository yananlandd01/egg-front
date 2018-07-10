import chance from 'chance';
import fecha from 'fecha';
import qs from 'qs';

/**
 * format the request params of "GET"
 * @param {request params} options
 */
export function format (options) {
  let getString = '';
  Object.keys (options).map ((item, index) => {
    if (index === 0) {
      getString = `${getString}${item}=${options[item]}`;
    } else {
      getString = `${getString}&${item}=${options[item]}`;
    }
  });
  return getString;
}

/**
 * generate the only guid
 */
export function createGUId () {
  const chanceId = new chance ();
  return chanceId.guid ();
}
