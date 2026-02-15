# 🔗 URL Shortener

A full-stack URL shortener application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. Create short links, track analytics, and manage your URLs with role-based access control.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

---

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT
- 🔗 **URL Shortening** - Generate short URLs with unique IDs
- 📊 **Analytics Dashboard** - Track clicks and visit history
- 👤 **User Dashboard** - Manage your personal URLs
- 👨‍💼 **Admin Panel** - View and manage all URLs (admin only)
- 🎨 **Clean UI** - Server-side rendered EJS templates
- 🔒 **Role-Based Access** - NORMAL and ADMIN user roles

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NikunjS91/short-url-nodejs.git
   cd short-url-nodejs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   
   Create a `.env` file:
   ```env
   PORT=8001
   MONGODB=mongodb://localhost:27017/short-url
   ```
   
   For MongoDB Atlas, use:
   ```env
   MONGODB=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/short-url
   ```

4. **Start MongoDB**
   ```bash
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   
   # Windows
   net start MongoDB
   ```

5. **Run the application**
   ```bash
   npm start
   ```

6. **Open in browser**
   ```
   http://localhost:8001
   ```

---

## 📚 Documentation

Complete documentation is available in the [**Wiki**](https://github.com/NikunjS91/short-url-nodejs/wiki):

- [**Project Description**](https://github.com/NikunjS91/short-url-nodejs/wiki/Project-Description) - Detailed overview and architecture
- [**Technologies Used**](https://github.com/NikunjS91/short-url-nodejs/wiki/Technologies-Used) - Full tech stack
- [**How to Run Locally**](https://github.com/NikunjS91/short-url-nodejs/wiki/How-to-Run-Locally) - Complete setup guide
- [**API Documentation**](https://github.com/NikunjS91/short-url-nodejs/wiki/API-Documentation) - All endpoints with examples

---

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js v5.1.0
- Mongoose v8.17.2

**Authentication**
- JWT (jsonwebtoken)
- Cookie-based sessions

**Database**
- MongoDB

**Frontend**
- EJS templating

**Utilities**
- nanoid - Short URL generation
- bcrypt - Password hashing
- cookie-parser - Cookie management

---

## 📁 Project Structure

```
├── controllers/        # Business logic
│   ├── url.js         # URL operations
│   └── user.js        # User operations
├── middleware/        # Custom middleware
│   └── auth.js        # Authentication & authorization
├── models/            # Database schemas
│   ├── url.js         # URL model
│   └── user.js        # User model
├── routes/            # API routes
│   ├── URL.js         # URL endpoints
│   ├── user.js        # User endpoints
│   └── staticRouter.js # Page routes
├── service/           # Utility services
│   └── auth.js        # JWT utilities
├── views/             # EJS templates
│   ├── home.ejs       # Dashboard
│   ├── login.ejs      # Login page
│   └── signup.ejs     # Signup page
├── connect.js         # Database connection
└── index.js           # Application entry
```

---

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user` | Sign up new user |
| POST | `/user/login` | Login user |

### URL Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/url` | Create short URL | ✅ |
| GET | `/url/:shortID` | Redirect to original URL | ❌ |
| GET | `/url/analytics/:shortID` | Get URL analytics | ✅ |

### Pages
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | User dashboard | ✅ |
| GET | `/admin/urls` | Admin dashboard | ✅ (Admin only) |
| GET | `/signup` | Signup page | ❌ |
| GET | `/login` | Login page | ❌ |

📖 [**Full API Documentation**](https://github.com/NikunjS91/short-url-nodejs/wiki/API-Documentation)

---

## 💡 Usage Examples

### Create a Short URL
```bash
curl -X POST http://localhost:8001/url \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"url":"https://www.example.com/very/long/url"}'
```

### Get Analytics
```bash
curl http://localhost:8001/url/analytics/abc123 -b cookies.txt
```

---

## 🔐 User Roles

- **NORMAL** - Can create and manage their own URLs
- **ADMIN** - Can view and manage all URLs in the system

*Note: To create an admin user, manually update the `role` field in MongoDB after signup.*

---

## 🎯 Features in Detail

### URL Shortening
- Uses `nanoid` to generate unique short IDs
- Stores original URL with metadata
- Associates URLs with user accounts

### Analytics
- Tracks click count for each URL
- Records timestamp of each visit
- Stores user agent and IP information

### Authentication
- JWT tokens stored in HTTP-only cookies
- Password hashing with bcrypt
- Session-based authentication

### Authorization
- Middleware-based role checking
- Protected routes for authenticated users
- Admin-only routes for management

---

## 🐛 Troubleshooting

**Port already in use**
```bash
# Change PORT in .env or kill the process
lsof -ti:8001 | xargs kill -9
```

**MongoDB connection error**
- Ensure MongoDB is running
- Check your connection string in `.env`

**JWT errors**
- Clear browser cookies and login again

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Nikunj Shetye**

- GitHub: [@NikunjS91](https://github.com/NikunjS91)
- Repository: [short-url-nodejs](https://github.com/NikunjS91/short-url-nodejs)

---

## 🙏 Acknowledgments

- Built with modern Node.js best practices
- Inspired by popular URL shortening services
- Uses industry-standard security practices

---

## 📞 Support

For detailed documentation, visit the [**Wiki**](https://github.com/NikunjS91/short-url-nodejs/wiki).

For issues or questions, please [open an issue](https://github.com/NikunjS91/short-url-nodejs/issues).

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Nikunj Shetye

</div>
