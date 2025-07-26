# Environment Setup Guide - bodol.space

## Overview

This guide helps you set up the necessary environment variables for the bodol.space Mongolian social media platform.

## Backend Environment Variables

| Variable          | Description               | Example                                                      |
| ----------------- | ------------------------- | ------------------------------------------------------------ |
| `PORT`            | Server port               | `5555`                                                       |
| `MONGO_ATLAS_URI` | MongoDB connection string | `mongodb+srv://username:password@cluster.mongodb.net/dbname` |
| `JWT_SECRET`      | Secret key for JWT tokens | `your-secure-random-string`                                  |
| `CLOUD_NAME`      | Cloudinary cloud name     | `your-cloud-name`                                            |
| `CLOUD_API_KEY`   | Cloudinary API key        | `your-api-key`                                               |
| `API_SECRET`      | Cloudinary API secret     | `your-api-secret`                                            |

## Frontend Environment Variables

| Variable        | Description      | Example                           |
| --------------- | ---------------- | --------------------------------- |
| `VITE_API_URL`  | Backend API URL  | `https://your-backend.vercel.app` |
| `VITE_APP_NAME` | Application name | `bodol.space`                     |

## Setup Instructions

1. Create `.env` files in respective directories
2. Add the variables listed above
3. Replace example values with your actual credentials
4. Never commit .env files to version control

## Security Best Practices

- Use strong, unique passwords
- Generate random JWT secrets (32+ characters)
- Keep credentials confidential
- Use environment variables in production
- Regularly rotate sensitive keys
