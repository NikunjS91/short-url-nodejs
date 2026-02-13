# Project Description

## Overview

This URL Shortener is a full-stack web application that provides a simple and efficient way to create shortened URLs. Built with modern web technologies, it offers user management, URL analytics, and role-based access control.

## Key Features

### User Authentication
- Secure user registration and login
- JWT-based authentication using cookies
- Password hashing for security

### URL Management
- Create shortened URLs with unique identifiers (using nanoid)
- View all your shortened URLs in a personal dashboard
- Track clicks and analytics for each URL

### Role-Based Access
- **NORMAL** users: Can create and manage their own URLs
- **ADMIN** users: Can view and manage all URLs across the platform

### Analytics
- Track the number of clicks on each shortened URL
- View visit history and timestamps
- Get detailed analytics per URL

## Architecture

The application follows the MVC (Model-View-Controller) architecture:

- **Models**: Define data structures for Users and URLs (MongoDB/Mongoose)
- **Views**: EJS templates for server-side rendering
- **Controllers**: Handle business logic for users and URLs
- **Routes**: Define API endpoints and page routes
- **Middleware**: Authentication and authorization logic
- **Services**: Authentication utilities (JWT handling)

## Use Cases

1. **Personal Use**: Shorten long URLs for sharing on social media or in messages
2. **Business Analytics**: Track engagement on shared links
3. **Team Collaboration**: Multiple users can manage URLs under one platform
4. **Marketing Campaigns**: Monitor click-through rates on promotional links
