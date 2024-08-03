// Create web server
// 1. Import express
// 2. Create an express application
// 3. Create a route for GET /comments
// 4. Send a JSON response with the comments array
// 5. Start the server on port 3000
// 6. Test the endpoint with Postman

const express = require("express");

const app = express();

const comments = [
  {
    id: 1,