module.exports = () => {
  var fsReadDirRecursiveSync = require('fs-readdir-recursive')
    , _ = require('underscore')
  ;

  _.each( fsReadDirRecursiveSync(__dirname), file => {
    if(file.indexOf('.js') == -1) return;
    if(file == "index.js") return;
    require('./'+file.split(".")[0]);
  });
};
