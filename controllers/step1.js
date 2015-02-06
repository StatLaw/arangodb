var Foxx = require('org/arangodb/foxx'),
    ArangoError = require('org/arangodb').ArangoError,
    controller;

controller = new Foxx.Controller(applicationContext);

/** Get a list of all responses.
*
* Get a list of all retrieved data that are stored in the database.
* The actual content is removed from presentation in this listing.
*/
controller.get('/', function (req, res) {
  res.json({
    "Hello": "World"
  });
});

/** Add a new response to the collection
*
* Query and add the resulting information
* to the collection.
*/
controller.post('/', function (req, res) {
  var myQuery = req.params('contentQuery');
  res.json({
    "Hello": "World"
  });
})

/** Delete a response from the collection
*
* Delete a response using its key.
*/
controller.del('/:key', function (req, res) {
  var myKey = req.params('key');
  res.json({ success: true });
})

/** Delete all responses from the collection
*
* Delete all responses.
*/
controller.del('/', function (req, res) {
  res.json({
    "Hello": "World"
  });
});
