// server/src/routes/user.ts
import { Router, Request, Response } from 'express';
import prisma from '../db';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_key_forkwise';

// Middleware to check token (simplified for speed)
const authenticate = (req: Request, res: Response, next: any) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.body.userId = decoded.id; // Attach ID to request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};

// @route   PUT /user/onboarding
// @desc    Update user profile with goals/diet after registration
router.put('/onboarding', authenticate, async (req: Request, res: Response): Promise<any> => {
  try {
    const { userId, goals, dietaryType, allergies, budget } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        goals,        // Array of strings
        dietaryType,  // String
        allergies,    // Array of strings
        budget        // String
      }
    });

    res.json({ message: 'Profile updated', user: updatedUser });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;