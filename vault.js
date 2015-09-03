'use strict';
module.exports = function() {
  var myVault = {};

  function _setValue(key, value) {
    myVault[key] = value;

  }
  function _getValue(key) {
    if (myVault.hasOwnProperty(key)) {
      return myVault[key];
    } else {
      return null;
    }
  }

  return {
    setValue : _setValue,
    getValue : _getValue
  };
};