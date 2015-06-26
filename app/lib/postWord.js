
'use strict'

module.exports = function postWord(word, object) {

  if(object.hasOwnProperty(word)) {

    return {msg: 'word already exists' };
  }

  else {
    object[word] = true;
    return {msg: 'word ' + word + ' accepted!' };
  }
};
