'use strict';

module.exports = function postWord(word, object) {

  if (object.hasOwnProperty(word)) {

    return {msg: 'We already have ' + word + ' in the hopper.' };
  }

  else {
    object[word] = true;
    return {msg: 'That\'s a great one! We\'ll add ' + word + ' to our selections.' };
  }
};
