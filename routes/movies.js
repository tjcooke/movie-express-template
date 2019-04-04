const Router = require('express').Router;

const retrieveAll = require('../controllers/movies');

const movieRoutes = Router();

movieRoutes.get('/', retrieveAll);

module.exports = movieRoutes;