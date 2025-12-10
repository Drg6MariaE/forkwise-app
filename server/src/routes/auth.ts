import { Router, Request, Response } from 'express';
import pool from '../db'; 
import bcrypt from 'bcryptjs';

const router = Router();

// @route   POST /auth/register
// @desc    Register a new user
router.post('/register', async (req: Request, res: Response): Promise<any> => {
  try {
    // 1. Destructure the inputs from the user
    const { username, email, password } = req.body;

    // 2. Check if user already exists
    const userExist = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (userExist.rows.length > 0) {
      return res.status(401).json({ message: "User already exists!" });
    }

    // 3. Bcrypt the user password (Security Step)
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // 4. Enter the new user inside our database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [username, email, bcryptPassword]
    );

    // 5. Send back the new user (excluding the password!)
    res.json(newUser.rows[0]);

  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

export default router;