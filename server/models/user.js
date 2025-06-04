/**
 * User: Sohel
 * Date: 3/31/15
 * Time: 6:53 PM
 */
module.exports = function () {
  return {
    /**
     * get the users data from db
     * @param callback
     */
    getUsers: function (callback) {
      //fill with some dummy data
      //in real life you have to user db connection
      // and get the data
      var users = [{
        firstname: 'Sohel',
        lastname: 'Rana',
        email: 'sohel023010@gmail.com',
        city: 'Dhaka',
        country: 'Australia'

      }, {
        firstname: 'Mathew',
        lastname: 'Hayden',
        email: 'mathew.hayden@gmail.com',
        city: 'Perth',
        country: 'Australia'
      }, {
        firstname: 'Bill',
        lastname: 'Cosby',
        email: 'bill.cosby@gmail.com',
        city: 'Hollywood',
        country: 'USA'
      }];
      callback(null, users);
    }
  }
};
