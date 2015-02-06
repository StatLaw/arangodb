var Foxx = require('org/arangodb/foxx'),
    Joi = require('joi'),
    ArticleQuery;

ArticleQuery = Foxx.Model.extend({
  schema: {
    type: Joi.string().default("content")
  }
});

exports.Model = ArticleQuery;
