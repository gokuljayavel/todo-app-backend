import express from 'express';
import * as todoController from './../controllers/todo-controller.js';

// routing the endpoint to respective controller clasess 
const Router = express.Router();
Router.route('/').post(todoController.post);
Router.route('/').get(todoController.get);
Router.route('/').put(todoController.put);
Router.route('/').delete(todoController.remove);

export default Router;