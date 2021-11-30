const authenticate = require("./authenticate");
const {
  register,
  validateRegister,
  login,
  getUser,
  logout,
} = require("./controllers/auth");

const router = require("express").Router();

router.post("/auth/register", ...validateRegister, register);
router.post("/auth/login", login);

router.use(authenticate);

router.get("/auth/user", getUser);
router.post("/auth/logout", logout);

module.exports = router;
