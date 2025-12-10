import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import pool from './db';
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

app.get('/test-db', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ 
      message: 'Database connection successful', 
      time: result.rows[0].now 
    });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 8000;

// 1. Assign server to variable
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// 2. Explicitly log server errors (like port already in use)
server.on('error', (err) => {
    console.error('❌ SERVER CRASHED:', err);
});

// 3. FORCE ALIVE: Add a simple heartbeat to prevent clean exit
setInterval(() => {
    // This keeps the event loop active
}, 1000 * 60 * 60);