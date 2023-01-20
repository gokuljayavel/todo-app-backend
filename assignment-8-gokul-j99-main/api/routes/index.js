import todoRouter from './todo-routes.js';
// mapping endpoint to corresponding routers
export default(app) => {
    app.use('/todos',todoRouter);
}