const CustomError = require("../extensions/custom-error");

const modern_activity= 15; 
const half_life_period= 5730;

module.exports = function dateSample(sampAct) {
  let t, k;
  if (typeof sampAct !== 'string' || sampAct == null) return false;

  let  activity=parseFloat(sampAct);
    if (isNaN(activity)) 
      return false;
    else
    {
      if (activity <= 0 || activity > modern_activity) return false;
      else{
        n0n=modern_activity / activity;
        k=0.693 / half_life_period;
        t=Math.ceil(Math.log(n0n)/k);
    }
    }
  return t;
};
