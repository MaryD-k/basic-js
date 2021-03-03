const CustomError = require("../extensions/custom-error");
const language = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function tableRecta(indexWord, indexKey, type){
  l = language.split("");
  let square = [];
  for (let i = 0; i < l.length; i++) {
      square[i] = l.slice(i).concat(l.slice(0, i));
  }
  if (type == 'encrypt')
  {
    let letter = square[l.indexOf(indexWord)][l.indexOf(indexKey)];
    return letter;
  }
  else
  {
    let index = square[indexWord].indexOf(indexKey);
    return index;
  }
}

class VigenereCipheringMachine {

  constructor(acceptValue) {
    if (acceptValue === false ) this.type = 'reverse';
  }

  encrypt(message, key) {
    let newMessage=message.toUpperCase();
    let editKey='';
    let newKey = '';
    if (message.length > key.length)
    {
      let keyLength = Math.trunc(newMessage.length/key.length);
      for (let k=0; k<keyLength; k++)
      {
        editKey = editKey + key;
      }
      newKey = editKey.concat(editKey.slice(0, newMessage.length - keyLength*key.length)).toUpperCase();
    }
    else newKey = key.toUpperCase();
    let str = "";
    for (let i = 0, j=0; i < newMessage.length; i++, j++) {
      if (language.indexOf(newMessage[i]) >=0 )
      {
        str = str + tableRecta(newMessage[i], newKey[j], 'encrypt');
      }
      else 
      {
        j=j-1;
        str = str + newMessage[i];
      }
    }
    if (this.type === 'reverse') return str.split("").reverse().join("");
    return str;
  }
  
  decrypt(encryptedMessage, key) {
    let decrStr = '';
    let newMessage=encryptedMessage.toUpperCase();
    let editKey='';
    let newKey = '';

    if (encryptedMessage.length > key.length)
    {
      let keyLength = Math.trunc(newMessage.length/key.length);
      for (let k=0; k<keyLength; k++)
      {
        editKey = editKey + key;
      }
      newKey = editKey.concat(editKey.slice(0, newMessage.length - keyLength*key.length)).toUpperCase();
    }
    else newKey = key.toUpperCase();

    for (let i = 0, j =0; i < newMessage.length; i++, j++) {

      if (language.indexOf(newMessage[i]) >=0 )
      {
          let row = language.indexOf(newKey[j]);
          let coll = tableRecta(row, newMessage[i], 'decrypt');
          decrStr = decrStr + language[coll];
      }
      else 
      {
        j=j-1;
        if (newMessage[i] == ' ') decrStr = decrStr + ' ';
        else  decrStr = decrStr + newMessage[i];
      }
    }
    if (this.type === 'reverse') return decrStr.split("").reverse().join("");
    return decrStr;
  }
}

module.exports = VigenereCipheringMachine;
