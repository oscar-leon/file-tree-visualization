const url = require("url");
const TreeNode = require("./TreeNode");
const getRootPath = require('../../utils/get-root-path');

const ROOT_PATH = getRootPath();

function mapBuilder(req, res) {
  const { path } = url.parse(req.url, true).query;
  const treeDir = path ? `${ROOT_PATH}/${path}` : ROOT_PATH;

  const tree = new TreeNode(treeDir);

  res.send(tree);
}

module.exports = mapBuilder;
