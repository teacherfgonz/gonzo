const passport = require("passport");

module.exports = (req, res, next) => {
  passport.authenticate("cookie", { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ error: "Unauthenticated" });
    }

    req.user = user;
    next();
  })(req, res, next);
};
