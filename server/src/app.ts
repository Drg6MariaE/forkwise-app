import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Database Connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test Connection on Start
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL Database!');
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ForkWise API is ready and rocking!' });
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});