Winston-Loggly
===============
A wrapper around [winston-loggly](https://github.com/indexzero/winston-loggly.git) for using [Loggly](http://loggly.com) transport with [winston](https://github.com/flatiron/winston.git) for use with [Meteorite](https://github.com/oortcloud/meteorite) ontop of [Meteor](http://meteor.com) :)

##Install
mrt add winston-loggly

##Usage

Winston is exposed as:

``` js
Winston
```

And loggly transport is exposed as:

``` js
Winston.transports.Loggly
```

so it can be used as follows:

``` js
var options = {
  "level": "info",
  "subdomain": "<loggly subdomain>",
  "auth": {
    "username": "<loggly username>",
    "password": "<loggly password>"
  },
  "inputToken":"<loggly input token>",
  "json": true,
  "handleExceptions": true
};

Winston.add(winston.transports.Loggly, options);
Winston.info('Added winston loggly transport');
```

See winston-loggly [documentation](https://github.com/indexzero/winston-loggly) for more details.