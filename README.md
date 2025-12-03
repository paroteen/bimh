# BIMH Ltd - Building Stone Extraction & Supply

BIMH Ltd is a women-led building stone extraction and supply company based in Kigali City, Rwanda, committed to providing high-quality construction stones to support the nation's growing infrastructure and real estate sector.

## About

BIMH Ltd specializes in:
- High-quality building stones and aggregates
- Stone cutting and shaping services
- Transport and delivery solutions
- Eco-tourism and conservation initiatives

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development servers (both frontend and backend):
   ```bash
   npm run dev:all
   ```
   
   Or run them separately:
   ```bash
   # Terminal 1 - Frontend (Vite)
   npm run dev
   
   # Terminal 2 - Backend (Express API)
   npm run server
   ```
   
   The frontend will be available at `http://localhost:3000`
   The backend API will be available at `http://localhost:3001`

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Deployment to Vercel

The contact form will work on Vercel! Here's how to deploy:

1. **Push your code to GitHub** (already done)

2. **Import your project to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**:
   - In Vercel project settings, go to "Environment Variables"
   - Add: `RESEND_API_KEY` = `re_RQEzFzbr_PDq2Jfki2yEJ6gCKShH9BFXX`
   - Make sure to add it for Production, Preview, and Development

4. **Deploy**:
   - Vercel will automatically detect Vite and deploy
   - The API function in `/api/send-email.js` will automatically be deployed as a serverless function
   - Your contact form will work at `https://your-app.vercel.app`

**Note**: The Express server (`server.js`) is only needed for local development. Vercel uses the serverless function in `/api/send-email.js` automatically.

## Contact

- **Email:** mabano.joseph@gmail.com
- **Phone:** 0788306938
- **Address:** Nyarugunga - Kicukiro, Kigali, Rwanda

## License

Private - All rights reserved
