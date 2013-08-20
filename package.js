Package.describe({
  summary: 'A Loggly transport for winston.'
});

Npm.depends({
    "winston": "0.7.2",
    "winston-loggly": "0.6.0"
});

Package.on_use(function (api, where) {
  api.add_files('winston-loggly.js', 'server');
  if(api.export){
    api.export('Winston_Loggly');
  }
});
