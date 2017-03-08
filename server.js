var path = require('path')
  , nconf = require('nconf')
              .argv()
              .file(path.join(__dirname, 'config', 'config.json'))
              .defaults({env: "production"})
;

nconf.file('environment', path.join(__dirname, 'config', nconf.get('env')+'-env.json'));

require('./app');
