import swaggerAutogen from 'swagger-autogen';

// created swagger file to generate swagger
const outputFile = './swagger_output.json';

const endpointsFiles = ['./api/routes/index.js'];

// auto generate swagger file based on the routes
swaggerAutogen(outputFile, endpointsFiles)
