const passport = require("passport");
const { Strategy: CookieStrategy } = require("passport-cookie");
const config = require("./config");
const User = require("./models/User");

module.exports = (app) => {
  app.use(passport.initialize());

  passport.use(
    new CookieStrategy(
      {
        cookieName: config.auth.cookieName,
        signed: config.auth.cookieOptions.signed,
      },
      async (id, done) => {
        try {
          const user = await User.findById(id);

          if (!user) {
            // invalid user / not logged in
            return done(null, false);
          }

          // valid user / logged in
          done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );
};
