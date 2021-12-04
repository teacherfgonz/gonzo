module.exports = {
  /*
   * Port where the server will run.
   */
  port: process.env.PORT || 3000,

  cors: {
    origins: ["http://localhost:8080"],
  },

  auth: {
    secret: process.env.APP_SECRET || "StrongSecret",
    cookieName: process.env.SESSION_COOKIE_NAME || "gonzo_auth",
    cookieOptions: {
      signed: true,
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? "None" : "Lax",
    }
  },

  /*
   * MongoDB connection parameters.
   */
  mongodb: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/gonzo",
  },
};
