
// MongoDB requires not just an ID as a string, but as an ID object or, 
// as they call it, an ObjectID.
var ObjectID = require('mongodb').ObjectID;
  
module.exports = function(app, db) {

  // list all
  app.get('/notes/', function(req, res) {
    const title = req.params.title;
    var query = { text: '/^' + title + '/' };
    db.collection('notes').find({}).toArray(function(err, result) {
      if (err) {
        res.send({'error':'An error has occurred'});
      }
    });
  });

  // read
  app.get('/notes/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, function(err, item) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // create
  app.post('/notes', function(req, res) {
    const note = { 
      text: req.body.body, 
      title: req.body.title
    };
    db.collection('notes').insert(note, function(err, result) {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // update
  app.put('/notes/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { 
      text: req.body.body, 
      title: req.body.title
    };
    db.collection('notes').update(details, note, function(err, result) {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });

  // delete
  app.delete('/notes/:id', function(req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, function(err, item) {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });

};