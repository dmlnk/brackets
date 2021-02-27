module.exports = function check(str, bracketsConfig) {
  let stack = [];
  strarray = str.split('');

  for (i = 0; i < strarray.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (strarray[i] == bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
      stack.push(strarray[i]);
      break;
      }

      if (strarray[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
        stack.pop();
        break;
      }
    }
  }
  return stack.length == 0;
}
