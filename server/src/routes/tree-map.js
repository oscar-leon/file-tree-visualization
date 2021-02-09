const express = require("express");
const router = express.Router();
const mapBuilder = require('../controllers/mapBuilder');

router.get("/", mapBuilder);

module.exports = router;
