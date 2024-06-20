const express = require('express');

const routes = express.Router();

const userController = require('../contollers/usercontrollers');

routes.get('/', userController.login);
routes.get('/index', userController.index);
routes.get('/buttons', userController.buttons);
routes.get('/cards', userController.cards);
routes.get('/color', userController.color);
routes.get('/border', userController.border);
routes.get('/animation', userController.animation);
routes.get('/other', userController.other);
routes.get('/charts', userController.charts);
routes.get('/tables', userController.tables);
routes.get('/register', userController.register);
routes.post('/adduser', userController.adduser);
routes.post('/loginUser', userController.loginUser);
routes.get('/logout', userController.logout);

module.exports = routes;