
---

## **Backend README.md**

This README file is specific to the backend part of the project.

```markdown
# Movie Explorer - Backend

The backend of Movie Explorer is built using **Node.js** and **Express.js**. It handles API requests, interacts with the **MongoDB** database, and serves data to the frontend.

## Features

- **Fetch Movie Data**: Integrates with the OMDb API to fetch movie data.
- **Manage Favorites**: Stores and retrieves user favorites from a MongoDB database.
- **RESTful API**: Provides endpoints for searching movies, fetching movie details, and managing favorites.

## Technologies Used

- **Node.js**: For building the server.
- **Express.js**: For creating RESTful APIs.
- **MongoDB**: For storing user favorites.
- **Mongoose**: For interacting with the MongoDB database.
- **Axios**: For making requests to the OMDb API.

## Setup Instructions

1. **Navigate to the Backend Folder**:
   ```bash
   cd backend

2.  Install Dependencies:

bash
Copy
npm install

3. Set Up Environment Variables:

Create a .env file in the backend folder:

env
Copy
MONGO_URI=mongodb://localhost:27017/movie-explorer
PORT=3002

4. Start the Server:

bash
Copy
node server.js

5. Verify the Server:

The server will run at http://localhost:3002.

Test the API using Postman or your browser.
