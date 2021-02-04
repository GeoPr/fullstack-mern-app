require('dotenv').config();
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();
const config = require('../config');

const consts = {
  email: 'email',
  password: 'password',
};

const types = {
  error: 'error',
  success: 'success',
};

router.post(
  '/signup',
  [
    check(consts.email, 'Incorrect email').isEmail(),
    check(consts.password, 'Min length must be greater or than 6').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          type: types.error,
          errors: errors.array(),
          message: 'Incorrect data during the registation',
        });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({
          type: types.error,
          message: 'There is already user like this',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({
        type: types.success,
        message: 'The user has been created',
      });
    } catch (e) {
      res.status(500).json({
        type: types.error,
        message: 'Somehting went wrong. Try again',
      });
    }
  },
);

router.post(
  '/login',
  [
    check(consts.email, 'Enter a correct email').normalizeEmail().isEmail(),
    check(consts.password, 'Enter a password').exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          type: types.error,
          errors: errors.array(),
          message: 'Incorrect data',
        });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          type: types.error,
          message: 'The user is not found',
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          type: types.error,
          message: 'Incorrect password. Try again',
        });
      }

      const token = jwt.sign({ userId: user.id }, config.jwtSecret, {
        expiresIn: '1h',
      });

      res.status(201).json({
        token,
        userId: user.id,
        type: types.success,
        message: 'U`re successfully loged in !',
      });
    } catch (e) {
      res.status(500).json({
        type: types.error,
        message: 'Something went wrong. Try again',
      });
    }
  },
);

module.exports = router;
