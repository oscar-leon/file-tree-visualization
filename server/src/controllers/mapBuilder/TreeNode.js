const fs = require("fs");

const TREE_BLACKLIST = ['.gitignore', 'node_modules']

class TreeNode {
  constructor(path) {
    this.path = path;
    this.children = this.getChildren();
  }

  getChildren() {
    const children = fs.readdirSync(this.path).filter(child => !TREE_BLACKLIST.includes(child));

    const childWithType = children.map(childNode => {
      const isDirectory = this.getChildType(childNode);

      return { path: childNode, isDirectory };
    })

    return childWithType;
  }

  getChildType(childNode) {
    try {
      return fs.lstatSync(`${this.path}/${childNode}`).isDirectory();
    } catch {
      return false;
    }
  }
}

module.exports = TreeNode;
