/**
 * User: Sohel
 * Date: 3/31/15
 * Time: 7:33 PM
 */

var User = require('../models/user')();

/**
 * get user data
 * @param req, request param from express
 * @param res, response param from express
 */
exports.getUsers = function (req, res) {
  User.getUsers(function (err, users) {
    if (err) {
      res.send({msg: 'Something wrong! Check the error message', error: err})
    }
    else {
      res.send(users);
    }
  });
};