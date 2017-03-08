var Handlebars = require('handlebars')
  , nconf = require('nconf')
  , _ = require('underscore')
;

Handlebars.registerHelper('json', (obj, opts) => {
  if(!nconf.get('env') == 'local') return '';
  if(opts.hash && opts.hash.type && opts.hash.type.toUpperCase() == "UNHUMAN")
    return JSON.stringify(obj)

  return new Handlebars.SafeString("<pre><code>"+JSON.stringify(obj, null, 2)+"</code></pre>");
});

Handlebars.registerHelper('json-plain', (obj) => new Handlebars.SafeString(JSON.stringify(obj)));
