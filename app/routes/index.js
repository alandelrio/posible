const noteRoutes = require('./note_routes');
const stockRoutes = require('./stock_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  stockRoutes(app, db);
};