import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = new Router();
const passport = require('../passport');

// Get the existing user info
router.route('/user').get(AuthController.getUser);

// Attempt login
router.route('/login').post(function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({ message: info.message }); }
    AuthController.login(user._doc, res);
  })(req, res, next);
});

// Attempt logout
router.route('/logout').post(AuthController.logout);

// Attempt to signup
router.route('/signup').post(AuthController.signup);

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {
    cb(err, user);
  });
});

export default router;
