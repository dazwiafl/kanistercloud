var express = require('express')
  , app = express()
  , router = require('./routes/index')
  , moment = require('moment')
  , path = require('path')
  , Handlebars = require('handlebars')
  , consolidate = require('consolidate')
  , nconf = require('nconf')
  , _ = require('underscore')
  , fs = require('fs')
  , moment = require('moment')
;

/* hbs setup */
_.each(nconf.get('hbs-partials'), function(t, idx){
  Handlebars.registerPartial(idx, fs.readFileSync( path.join(__dirname, t), 'utf8'));
});

require('./hbs-helpers/index')();
/* hbs setup end */

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static( path.join(__dirname, 'public') ));

app.use(router);

app.locals.__baseurl = nconf.get('server:baseurl');

app.listen(
  nconf.get('server:port')
  , () => console.log(moment().format('DD.MM.YYYY HH:mm:ss'), "server started on port", nconf.get('server:port'))
)
