module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let lastStr = str;
  for (let i = 0; i < bracketsConfig.length; i++) {
      arr.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }
  while (true) {
      for (let i = 0; i < arr.length; i++) {
          str = str.replace(arr[i], '');
      }
      if (str.length == 0) {
          return true;
      }
      if (lastStr === str) {
          return false;
      }
      lastStr = str;
  }
};