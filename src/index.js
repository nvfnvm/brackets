module.exports = function check(str, bracketsConfig) {
  let repairString = str;
  while(str) {
    bracketsConfig.forEach(el => {
      str = str.replace(el.join(""), "");
    });
    
    if(str === repairString) {
      return false;
    }
    repairString = str;
  }
  return true;
};
