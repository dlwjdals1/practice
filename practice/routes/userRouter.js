const express = require('express');
const router = express.Router();

const userRouter = require('../controller/userController');

router.get("/", userRouter.userView);



module.exports = router;