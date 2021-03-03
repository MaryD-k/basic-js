const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mas) {
  let cat='^^';
  let count=0;
  for (let i=0; i<mas.length;i++)
  {
    for (let j=0; j<mas[i].length; j++)
    {
        if (mas[i][j]==cat)
        count=count+1;
    }
  }

  if (count==0)
  return 0;
  else 
  return count;
};
