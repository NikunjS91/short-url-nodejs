# API Documentation

Complete documentation of all API endpoints and routes available in the URL Shortener application.

## Base URL

```
http://localhost:8000
```

---

## Authentication Endpoints

### Sign Up

Create a new user account.

**Endpoint**: `POST /user`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response** (200):
```json
{
  "message": "User created successfully"
}
```

**Error Response** (400):
```json
{
  "error": "User already exists"
}
```

---

### Login

Authenticate a user and receive a JWT token in cookies.

**Endpoint**: `POST /user/login`

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response** (200):
- Sets `uid` cookie with JWT token
- Redirects to homepage

**Error Response** (401):
```json
{
  "error": "Invalid credentials"
}
```

---

## URL Management Endpoints

### Create Short URL

Generate a new shortened URL (requires authentication).

**Endpoint**: `POST /url`

**Headers**:
```
Cookie: uid=<jwt_token>
```

**Request Body**:
```json
{
  "url": "https://www.example.com/very/long/url/that/needs/shortening"
}
```

**Success Response** (200):
```json
{
  "id": "abc123def",
  "shortURL": "http://localhost:8000/url/abc123def"
}
```

**Authentication Required**: Yes

**Authorization**: NORMAL, ADMIN roles

---

### Get URL Analytics

Retrieve analytics data for a specific short URL.

**Endpoint**: `GET /url/analytics/:shortID`

**Parameters**:
- `shortID` (path parameter): The unique identifier of the shortened URL

**Example**: `GET /url/analytics/abc123def`

**Success Response** (200):
```json
{
  "totalClicks": 42,
  "analytics": [
    {
      "timestamp": "2026-02-13T10:30:00.000Z",
      "userAgent": "Mozilla/5.0...",
      "ipAddress": "192.168.1.1"
    },
    {
      "timestamp": "2026-02-13T11:15:00.000Z",
      "userAgent": "Mozilla/5.0...",
      "ipAddress": "192.168.1.2"
    }
  ]
}
```

**Authentication Required**: Yes

---

### Redirect to Original URL

Redirect to the original URL using the short URL identifier.

**Endpoint**: `GET /url/:shortID`

**Parameters**:
- `shortID` (path parameter): The unique identifier of the shortened URL

**Example**: `GET /url/abc123def`

**Response**: HTTP 302 redirect to the original URL

**Authentication Required**: No

---

## Page Routes (Static Router)

### Home / Dashboard

Display user's shortened URLs or admin dashboard.

**Endpoint**: `GET /`

**Authentication Required**: Yes

**Authorization**: 
- NORMAL users see their own URLs
- ADMIN users can access admin panel at `/admin/urls`

**Response**: Renders `home.ejs` with user's URLs

---

### Admin Dashboard

View all URLs created by all users (admin only).

**Endpoint**: `GET /admin/urls`

**Authentication Required**: Yes

**Authorization**: ADMIN role only

**Response**: Renders `home.ejs` with all URLs

---

### Signup Page

Display the user registration form.

**Endpoint**: `GET /signup`

**Authentication Required**: No

**Response**: Renders `signup.ejs`

---

### Login Page

Display the login form.

**Endpoint**: `GET /login`

**Authentication Required**: No

**Response**: Renders `login.ejs`

---

## Authentication & Authorization

### Authentication Method

The application uses **JWT (JSON Web Tokens)** stored in HTTP-only cookies.

**Cookie Name**: `uid`

**Header Example**:
```
Cookie: uid=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Authorization Roles

- **NORMAL**: Standard user with access to their own URLs
- **ADMIN**: Administrator with access to all URLs and admin dashboard

### Protected Routes

Routes using the `restrictTo()` middleware require authentication and specific roles:

```javascript
restrictTo(["NORMAL", "ADMIN"])  // Accessible by both roles
restrictTo(["ADMIN"])            // Admin only
```

---

## Error Handling

### Common Error Responses

**401 Unauthorized**:
```json
{
  "error": "Authentication required"
}
```

**403 Forbidden**:
```json
{
  "error": "Insufficient permissions"
}
```

**404 Not Found**:
```json
{
  "error": "Resource not found"
}
```

**500 Internal Server Error**:
```json
{
  "error": "Internal server error"
}
```

---

## Rate Limiting

Currently, no rate limiting is implemented. Consider adding rate limiting middleware for production deployments.

---

## CORS Policy

The application does not currently implement CORS headers. If you need to access the API from a different origin, add CORS middleware.

---

## Example Usage with cURL

### Sign Up
```bash
curl -X POST http://localhost:8000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:8000/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}' \
  -c cookies.txt
```

### Create Short URL
```bash
curl -X POST http://localhost:8000/url \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"url":"https://www.example.com/very/long/url"}'
```

### Get Analytics
```bash
curl -X GET http://localhost:8000/url/analytics/abc123def \
  -b cookies.txt
```
