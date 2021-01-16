import express from 'express';

import EmailController from './controller/EmailController';

const emailController = new EmailController();

const routes = express.Router();

routes.get('/', emailController.index);

module.exports = routes;
