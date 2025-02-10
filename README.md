# Blog REST API

This is a RESTful API for a blog application built using Express.js and MongoDB. It allows users to create, read, update, and delete blog posts with full authentication.

## Live Repository
### [GitHub Repository](https://github.com/BESUFKADMEKONNEN/Blog-rest-api.git)

## Features
- User Authentication (Register/Login)
- Create, Read, Update, and Delete (CRUD) blog posts
- Token-based authentication using JWT
- Secure password hashing with bcrypt
- MongoDB database with Mongoose ODM

## Installation
To get started with the Blog REST API, follow these steps:

### 1. Clone the repository:
```bash
 git clone https://github.com/BESUFKADMEKONNEN/Blog-rest-api.git
```

### 2. Navigate to the project directory:
```bash
 cd Blog-rest-api
```

### 3. Install dependencies:
Make sure you have Node.js installed. Then, run:
```bash
 npm install
```

### 4. Environment Setup
Create a `.env` file in the root directory and add the following variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Development
To start the development server, run:
```bash
 npm run dev
```
**The server will run on `http://localhost:5000`.**

### 6. API Endpoints
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login and get a token
- **POST** `/api/posts` - Create a new blog post (Requires authentication)
- **GET** `/api/posts` - Get all blog posts
- **GET** `/api/posts/:id` - Get a single blog post
- **PUT** `/api/posts/:id` - Update a blog post (Requires authentication)
- **DELETE** `/api/posts/:id` - Delete a blog post (Requires authentication)

### 7. Usage
Use **Postman** or any API client to test the endpoints. Make sure to include the `Authorization: Bearer <token>` header for protected routes.

## License
This project is licensed under the ISC License.

## Author
**Besufkad Mekonnen**

