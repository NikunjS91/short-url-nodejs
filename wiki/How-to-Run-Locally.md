# How to Run the Project Locally

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (Local installation or MongoDB Atlas account) - [Download here](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/downloads)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/NikunjS91/short-url-nodejs.git
cd short-url-nodejs
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:
- express
- mongoose
- ejs
- jsonwebtoken
- cookie-parser
- nanoid
- uuid
- nodemon

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=8001
MONGODB=mongodb://localhost:27017/short-url
```

**Note**: Replace the values with your own:
- `PORT`: The port number where the server will run (default: 8001)
- `MONGODB`: Your MongoDB connection string
  - For local MongoDB: `mongodb://localhost:27017/short-url`
  - For MongoDB Atlas: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/short-url`

### 4. Start MongoDB

If using local MongoDB, start the MongoDB service:

**Windows**:
```bash
net start MongoDB
```

**macOS** (with Homebrew):
```bash
brew services start mongodb-community
```

**Linux**:
```bash
sudo systemctl start mongod
```

### 5. Run the Application

Start the development server with nodemon:

```bash
npm start
```

The application will start on `http://localhost:8001` (or the port you specified in `.env`).

## Accessing the Application

1. Open your browser and navigate to `http://localhost:8001`
2. You'll see the login page
3. Click on "Sign Up" to create a new account
4. After signing up, log in with your credentials
5. Start creating short URLs!

## Testing Admin Features

To test admin features, you'll need to manually set a user's role to "ADMIN" in the MongoDB database:

1. Connect to your MongoDB database
2. Find your user in the `users` collection
3. Update the `role` field to "ADMIN"
4. Log in again to access admin features

## Troubleshooting

### Port Already in Use
If port 8001 is already in use, change the `PORT` in your `.env` file to a different port number.

### MongoDB Connection Error
- Ensure MongoDB is running
- Check your `MONGODB` connection string is correct
- Verify network connectivity if using MongoDB Atlas

### Module Not Found Error
Run `npm install` again to ensure all dependencies are installed.

## Project Scripts

- `npm start` - Starts the development server with nodemon (auto-restart on file changes)
