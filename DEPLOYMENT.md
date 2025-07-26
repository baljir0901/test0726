# Production Environment Variables for Vercel

## Backend Environment Variables

```bash
PORT=5555
MONGO_ATLAS_URI=mongodb+srv://bodol0726:bodol0726@thread.def4de8.mongodb.net/?retryWrites=true&w=majority&appName=Thread
JWT_SECRET=Ajd98hsd81h81jdhSAdjas@12$##@TSD
CLOUD_NAME=dvld1u0hx
CLOUD_API_KEY=427387557525345
API_SECRET=GknKM1Xa1DXqqy3qnXthGHZPy8c
```

## Frontend Environment Variables (if needed)

```bash
VITE_API_URL=https://your-backend-url.vercel.app
```

## Vercel Deployment Steps

### Backend Deployment:

1. Create new Vercel project
2. Connect to GitHub repository
3. Set root directory to `Backend`
4. Add environment variables in Vercel dashboard
5. Deploy

### Frontend Deployment:

1. Create another Vercel project
2. Connect to same GitHub repository
3. Set root directory to `Frontend`
4. Update API URLs to production backend
5. Deploy

## Important Notes:

- Backend will be deployed as serverless functions
- Frontend will be deployed as static site
- Update CORS settings for production domains
- Test all API endpoints after deployment
