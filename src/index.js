module.exports = function check(str, bracketsConfig) {
  let arrFromStr = str.split('');

  for(let i = 0; i < arrFromStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(arrFromStr[i] === bracketsConfig[j][0] && arrFromStr[i + 1] === bracketsConfig[j][1]) {
        arrFromStr.splice(i, 2);
        i -= 2
      }
    }
  }

  return !arrFromStr.length;
}
