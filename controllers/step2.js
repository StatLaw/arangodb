var Foxx = require('org/arangodb/foxx'),
    controller;

controller = new Foxx.Controller(applicationContext);

/** Process post.
*
* Process post.
*/
controller.post('/', function (req, res) {
  res.json({
    "Hello": "World"
  });
})
