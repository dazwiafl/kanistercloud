var path = require('path')
  , express = require('express')
  , router = express.Router()
  , nconf = require('nconf')
  , _ = require('underscore')
  , fs = require('fs')
  , path = require('path')
  , fsReadDirRecursiveSync = require('fs-readdir-recursive')
;

_.each( fsReadDirRecursiveSync(__dirname), file => {
  if(file.indexOf('.js') == -1) return;
  if(file == "index.js") return;
  require('./'+file.split('.')[0])(router);
});

router.get('/', (req, res, next) => {
  res.render('index', {
    files: ((files) => _.map(files, f => ({ext: path.extname(f).replace(/\./ig, ''), fn: f})))(fs.readdirSync(path.join(__dirname, '..', '/data')))
  });
});

module.exports = router;
