# Technologies Used

## Backend Framework

### Node.js
The runtime environment for executing JavaScript on the server-side, providing a fast and scalable platform for building web applications.

### Express.js (v5.1.0)
A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.

## Database

### MongoDB
NoSQL database for storing user information and URL data with flexibility and scalability.

### Mongoose (v8.17.2)
Elegant MongoDB object modeling for Node.js, providing schema-based solution for application data.

## Authentication & Security

### JSON Web Tokens (JWT) (v9.0.2)
Secure authentication mechanism using token-based authentication stored in HTTP-only cookies.

### Cookie Parser (v1.4.7)
Middleware for parsing cookies attached to the client request object.

## Templating Engine

### EJS (v3.1.10)
Embedded JavaScript templating for generating HTML markup with plain JavaScript.

## Utility Libraries

### nanoid (v5.1.5)
Secure, URL-friendly, unique string ID generator for creating short URL identifiers.

### uuid (v11.1.0)
Generation of RFC4122 UUIDs for unique identification needs.

### Nodemon (v3.1.10)
Development tool that automatically restarts the Node.js application when file changes are detected.

## Project Structure

```
├── controllers/     # Business logic
│   ├── url.js      # URL operations
│   └── user.js     # User operations
├── middleware/     # Custom middleware
│   └── auth.js     # Authentication & authorization
├── models/         # Database schemas
│   ├── url.js      # URL model
│   └── user.js     # User model
├── routes/         # API and page routes
│   ├── URL.js      # URL API routes
│   ├── user.js     # User API routes
│   └── staticRouter.js  # Page routes
├── service/        # Utility services
│   └── auth.js     # JWT utilities
├── views/          # EJS templates
│   ├── home.ejs    # Dashboard
│   ├── login.ejs   # Login page
│   └── signup.ejs  # Signup page
├── connect.js      # Database connection
└── index.js        # Application entry point
```

## Development Tools

- **Package Manager**: npm
- **Version Control**: Git
- **Module System**: CommonJS
