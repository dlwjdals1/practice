const express = require('express');
const router = express.Router();

const listRouter = require('../controller/listController');

router.get("/", listRouter.listView);

router.post("/", listRouter.list);

module.exports = router;
