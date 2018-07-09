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
