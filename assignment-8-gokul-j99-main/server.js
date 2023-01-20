import app from './api/app.js';
import swaggerui from 'swagger-ui-express';
import swaggerdocument from "./swagger_output.json" assert { type: "json" };
const port = 9001;

// used for swagger generation
app.use(
    '/api-docs',
    swaggerui.serve, 
    swaggerui.setup(swaggerdocument)
  );
  // app started to listen on given port 
app.listen(port);
console.log(`app running at port ${port}`);