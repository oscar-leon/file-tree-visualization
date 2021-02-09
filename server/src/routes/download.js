const express = require("express");
const url = require("url");
const router = express.Router();

const getRootPath = require("../utils/get-root-path");

const ROOT_PATH = getRootPath();

router.get("/", (req, res) => {
  const { path } = url.parse(req.url, true).query;

  res.download(`${ROOT_PATH}/${path}`);
});

module.exports = router;
