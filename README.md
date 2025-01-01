#_TP_Mongoose
A full-stack application built with Express.js, Mongoose, and dotenv, providing a seamless way to manage and interact with a MongoDB database. The project includes API endpoints that can be tested using Postman.

Introduction
TP_Mongoose is an Express.js application designed to interact with a MongoDB database using Mongoose. It uses dotenv to handle environment variables securely. This project is ideal for users looking to manage a MongoDB database through a RESTful API. The endpoints provided can be tested using Postman to perform CRUD operations.

Features
RESTful API: Built using Express.js, with endpoints for CRUD operations.
MongoDB Integration: Utilizes Mongoose for MongoDB database interaction.
Environment Variables: Uses dotenv to manage sensitive data like database URLs and API keys.
Postman Ready: Easily testable API endpoints using Postman.
Technologies Used
Express.js: Web framework for building the API.
Mongoose: ODM (Object Document Mapper) for MongoDB.
dotenv: Environment variables management.
Postman: Tool for testing API endpoints.
Installation
Follow these steps to set up the project on your local machine:

Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB (or use MongoDB Atlas for cloud hosting)
Steps
Clone the repository:

bash
Copier le code
git clone https://github.com/Saadnaanaiy/TP_Mongoose.git
Navigate to the project folder:

bash
Copier le code
cd TP_Mongoose
Install dependencies:

bash
Copier le code
npm install
Set up environment variables:

Create a .env file in the root directory of the project.
Add the following variables to .env:
makefile
Copier le code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Replace your_mongodb_connection_string with your actual MongoDB connection URI (e.g., MongoDB Atlas or local MongoDB URL).
Run the application:

bash
Copier le code
npm start
The server should now be running at http://localhost:5000.

Configuration
This project uses the dotenv package to securely manage environment variables. Ensure you add your MongoDB URI to the .env file as shown above.

Example .env file:

bash
Copier le code
MONGO_URI=mongodb://localhost:27017/your-database-name
PORT=5000
API Endpoints
Here is a list of available API endpoints:

GET /api/items - Retrieve all items.
GET /api/items/:id - Retrieve a specific item by ID.
POST /api/items - Create a new item.
PUT /api/items/:id - Update an existing item by ID.
DELETE /api/items/:id - Delete an item by ID.
Testing with Postman
You can test all the above API endpoints using Postman.

Open Postman and create a new request.
Set the request type (GET, POST, PUT, DELETE) based on the endpoint you want to test.
For POST and PUT requests, add JSON data in the request body (e.g., item name, description).
Send the request and verify the responses.
Example Postman request for creating an item:

Method: POST
URL: http://localhost:5000/api/items
Body:
json
Copier le code
{
  "name": "New Item",
  "description": "This is a new item."
}
