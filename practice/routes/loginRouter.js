const express = require('express');
const router = express.Router();

const loginRouter = require('../controller/loginController');

router.get("/", loginRouter.loginView);
router.get("/login", loginRouter.login);
router.get("/logout", loginRouter.logout);

module.exports = router;
