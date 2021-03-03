const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName='';
  let k;
  if (Array.isArray(members) != true || members.length == 0 )
  return false;
  else
  {
    for (let i=0; i<members.length; i++)
    {
     if ((typeof members[i]) === 'string' )
     {
        k=0;
        while(members[i].charAt(k)==' ')
        {
          k++;
        }
        teamName = teamName + members[i].charAt(k).toUpperCase();
      }
    }
  }
  let newTeamName= teamName.split('').sort().join('');
  return newTeamName;
};
