const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const config = require("../config");
const User = require("../models/User");

module.exports = {
  getUser(req, res) {
    res.json({ data: { user: req.user } });
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("user not found");
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("password mismatch");
      }

      res.cookie(config.auth.cookieName, user._id, config.auth.cookieOptions);
      res.json({ data: { user } });
    } catch (err) {
      res.status(400).json({ error: "Invalid credentials" });
    }
  },

  validateRegister: [
    body("name").isLength({ min: 3 }),
    body("email")
      .isEmail()
      .custom(async (email) => {
        const user = await User.findOne({ email });
        if (user) {
          return Promise.reject("E-mail already in use");
        }
      }),
    body("password").isLength({ min: 8 }),
  ],

  async register(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await User.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    res.json({ data: { user } });
  },

  logout(req, res) {
    res.clearCookie(config.auth.cookieName);
    res.json({ msg: "Success" });
  },
};
