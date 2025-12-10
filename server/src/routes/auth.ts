// server/src/routes/auth.ts
import { Router, Request, Response } from 'express';
import prisma from '../db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

// Secret key for JWT (in production, use process.env.JWT_SECRET)
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_forkwise';

// @route   POST /auth/register
// @desc    Register a new user
router.post('/register', async (req: Request, res: Response): Promise<any> => {
  try {
    // 1. Get data from frontend (matching your Schema: fullName, email, password)
    const { fullName, email, password } = req.body;

    // 2. Check if user exists
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 3. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User using Prisma
    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
      },
    });

    // 5. Generate Token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: '7d' });

    // 6. Respond
    res.json({
      token,
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
      },
    });

  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST /auth/login
// @desc    Login user & get token
router.post('/login', async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    // 1. Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // 3. Generate Token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

    // 4. Respond
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
    });

  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;