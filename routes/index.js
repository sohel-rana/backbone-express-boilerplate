var path = require('path');

module.exports = function (app) {
  app.use('/users', require('./users'));


  //loading index.html for root
  //you can use the index.jade file as default
  app.route('/')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, 'public') + '/index.html');
    });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


// error handlers
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
};
