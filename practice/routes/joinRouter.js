const express = require('express');
const router = express.Router();

const joinRouter = require('../controller/joinController');

router.get("/", joinRouter.joinView);

router.post("/", joinRouter.join);

module.exports = router;