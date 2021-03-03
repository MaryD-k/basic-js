const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let amountStack = 3;
  let turns;
  turns=Math.pow(2, disksNumber) - 1;
  let seconds;
  seconds = Math.floor(turns/(turnsSpeed/3600));
  let result = {
    turns: turns,
    seconds: seconds
  };
  return result;
};
