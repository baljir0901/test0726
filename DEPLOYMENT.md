# Bodol.space Deployment Guide

## Required Environment Variables

### Backend (.env file)

Create a `.env` file in the Backend directory with:

```env
# Server Configuration
PORT=5555
NODE_ENV=production

# Database
MONGO_ATLAS_URI=your-mongodb-connection-string

# Authentication
JWT_SECRET=your-secure-jwt-secret

# File Upload (Cloudinary)
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-api-key
API_SECRET=your-cloudinary-api-secret
```

### Frontend (.env file)

Create a `.env` file in the Frontend directory with:

```env
# Backend API URL
VITE_API_URL=https://your-backend-deployment-url.vercel.app

# App Configuration
VITE_APP_NAME=bodol.space
VITE_APP_DESCRIPTION=Mongolian Social Media Platform
```

## Deployment Steps

1. **Backend Deployment:**

   - Deploy to Vercel
   - Set environment variables in Vercel dashboard
   - Copy the deployment URL

2. **Frontend Deployment:**
   - Deploy to Vercel
   - Set VITE_API_URL to backend URL
   - Deploy

## Security Notes

- Never commit .env files to Git
- Keep all sensitive credentials secure
- Use strong passwords and secrets
- Set environment variables only in deployment platform
