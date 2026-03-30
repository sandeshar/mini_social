# Mini Social

**Mini Social** is a minimalist social media platform where users can share posts, discover content, and connect with others. It features user authentication, a live post feed with moments/stories, post creation, and social interactions (likes, comments, bookmarks, and shares). The platform is designed around quality and simplicity, making it easy to share ideas and stay connected.

This repository is a monorepo containing both the backend and frontend for the Mini Social application.

## Project Structure

```
mini_social/
├── backend/          # Node.js/Express backend with Prisma ORM
│   ├── controller/   # Route controllers
│   ├── middleware/   # Express middleware
│   ├── route/        # API routes
│   ├── lib/          # Utility libraries (JWT, Prisma)
│   ├── prisma/       # Prisma schema and migrations
│   └── index.js      # Server entry point
│
└── frontend/         # Next.js frontend application
    ├── src/
    │   ├── app/      # App router pages and layouts
    │   └── components/  # Reusable React components
    ├── public/       # Static assets
    └── next.config.ts  # Next.js configuration
```

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Technologies

**Backend:**
- Node.js/Express
- Prisma ORM
- JWT Authentication

**Frontend:**
- Next.js
- React
- TypeScript

## Development

Both applications run independently but communicate through API calls.
- Backend API: `http://localhost:3000` (or configured port)
- Frontend Dev Server: `http://localhost:3000` (Next.js default)

## Environment Variables

Create `.env` files in respective directories (backend and frontend) with necessary configuration.

## License

MIT
