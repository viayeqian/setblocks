var Bookshelf = require('./bookshelf');

var User = Bookshelf.Model.extend({
    tableName: 'users'
});


module.exports = Bookshelf.model('User', User);
