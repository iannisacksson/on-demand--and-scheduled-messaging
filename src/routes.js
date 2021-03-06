import express from 'express';

import EmailController from './app/controller/EmailController';

const emailController = new EmailController();

const routes = express.Router();

routes.post('/', emailController.create);

module.exports = routes;
