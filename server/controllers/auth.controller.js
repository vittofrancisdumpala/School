import User from '../models/user.model';

/**
 * Get the existing user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
}

/**
 * Attempt to login
 * @param req
 * @param res
 * @returns void
 */
export function login(user, res) {
  const cleanUser = Object.assign({}, user);

  if (cleanUser.local) {
    delete cleanUser.local.password;
  }

  res.json({ user: cleanUser });
}

/**
 * Attempt to logout
 * @param req
 * @param res
 * @returns void
 */
export function logout(req, res) {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({ msg: 'Logging you out' });
  } else {
    res.json({ msg: 'No user to log out' });
  }
}

/**
 * Attempt to signup
 * @param req
 * @param res
 * @returns void
 */
export function signup(req, res) {
  const { email, password } = req.body;

  User.findOne({ 'local.email': email }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        message: `Sorry, a user with that email already exists: ${email}`,
      });
    }

    const newUser = new User({
      'local.email': email,
      'local.password': password,
    });

    newUser.save((error, savedUser) => {
      if (error) return res.json(error);
      return res.json(savedUser);
    });
  });
}
