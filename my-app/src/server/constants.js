//'use strict';

/* inside nodejs now */
var URI;

angular = {
  module : function() {
    return {
      constant: function(name, constants) {
        URI = constants;
      }
    }
  }
}

require('../client/app/js/my-app.constant.js');
//console.log(JSON.stringify(URI)); // easy peasy

module.exports = URI;