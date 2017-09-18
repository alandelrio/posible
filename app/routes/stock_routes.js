
// MongoDB requires not just an ID as a string, but as an ID object or, 
// as they call it, an ObjectID.
var ObjectID = require('mongodb').ObjectID;
  
module.exports = function(app, db) {

  // list all
  app.get('/stocks/', function(req, res) {
    db.collection('stocks').find({}).toArray(function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(result);
      }
    });
  });

  // list by
  app.get('/stocks/:title', function(req, res) {
    const title = req.params.title;
    var query = { name: '/.*name.*/' };
    db.collection('stocks').find(query).toArray(function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(result);
      }
    });
  });

  // read
  app.get('/stocks/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('stocks').findOne(details, function(err, item) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // create
  app.post('/stocks', function(req, res) {
    const stock = { 
    	sku: req.body.sku, 
    	name: req.body.name,
    	description: req.body.description,
    	size: req.body.size,
    	upc: req.body.upc
    };
    db.collection('stocks').insert(stock, function(err, result) {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // update
  app.put('/stocks/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const stock = { 
    	sku: req.body.sku, 
    	name: req.body.name,
    	description: req.body.description,
    	size: req.body.size,
    	upc: req.body.upc
    };
    db.collection('stocks').update(details, stock, function(err, result) {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(stock);
      } 
    });
  });

  // delete
  app.delete('/stocks/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('stocks').remove(details, function(err, item) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Stock ' + id + ' deleted!');
      } 
    });
  });

};