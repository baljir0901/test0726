# বোদল.স্পেস পরিবেশ সেটআপ গাইড

# bodol.space Environment Setup Guide

## প্রয়োজনীয় পরিবেশ ভেরিয়েবল (Required Environment Variables)

### Backend (.env ফাইল)

```
# MongoDB Database Connection
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/bodol-space?retryWrites=true&w=majority

# JWT Secret Key (Generate a secure random string)
JWT_SECRET=your-super-secure-jwt-secret-key-here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Server Configuration
PORT=5555
NODE_ENV=production
```

### Frontend (.env ফাইল)

```
# Backend API URL (Update with your deployed backend URL)
VITE_API_URL=https://your-backend-deployment.vercel.app

# App Configuration
VITE_APP_NAME=bodol.space
VITE_APP_DESCRIPTION=Mongolian Social Media Platform
```

## Vercel Deployment Environment Variables

### Backend Deployment:

1. Go to your Vercel dashboard
2. Select your backend project
3. Go to Settings > Environment Variables
4. Add the following variables:
   - `MONGO_URI` (MongoDB connection string)
   - `JWT_SECRET` (JWT secret key)
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `NODE_ENV` = `production`

### Frontend Deployment:

1. Go to your Vercel dashboard
2. Select your frontend project
3. Go to Settings > Environment Variables
4. Add the following variables:
   - `VITE_API_URL` (Your deployed backend URL)
   - `VITE_APP_NAME` = `bodol.space`

## Local Development Setup

1. Create `.env` files in both Backend and Frontend directories
2. Copy the environment variables template above
3. Fill in your actual values
4. Run `npm install` in both directories
5. Start backend: `cd Backend && npm run dev`
6. Start frontend: `cd Frontend && npm run dev`

## Production Deployment Notes

- Backend will be deployed as a serverless function on Vercel
- Frontend will be deployed as a static site on Vercel
- Make sure to update CORS settings in backend for production domain
- Update the frontend API URL to point to the deployed backend
- All sensitive keys should be added to Vercel environment variables, not committed to Git

## Security Checklist

- [ ] MongoDB URI uses a strong password
- [ ] JWT_SECRET is a long, random string (minimum 32 characters)
- [ ] Cloudinary credentials are kept secure
- [ ] Production environment variables are set in Vercel
- [ ] CORS is properly configured for production domains
- [ ] .env files are in .gitignore (already done)
