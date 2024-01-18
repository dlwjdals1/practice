const express = require('express');
const router = express.Router();

const bookaddRouter = require('../controller/bookaddController');

router.get("/", bookaddRouter.bookaddView);

router.post("/", bookaddRouter.bookadd);

module.exports = router;