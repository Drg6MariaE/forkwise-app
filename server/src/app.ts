// server/src/app.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import prisma from './db'; // <--- UPDATED: Import prisma instead of pool
import authRoutes from './routes/auth';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ForkWise API is ready!' });
});

// UPDATED: Database Test Route using Prisma
app.get('/test-db', async (req: Request, res: Response) => {
  try {
    // We use $queryRaw to execute raw SQL just to test the connection
    const result = await prisma.$queryRaw`SELECT NOW()`;
    
    res.json({ 
      message: 'Database connection successful (via Prisma)', 
      time: result 
    });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error: ' + err.message);
  }
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('❌ SERVER CRASHED:', err);
});