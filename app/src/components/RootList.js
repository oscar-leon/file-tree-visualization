import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FolderIcon from "@material-ui/icons/Folder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import fetchTree from "../services/fetch-tree";
import ListChild from "./ListChild";

const PADDING_INCREASE = 15;

export default function RootList({ root, children = [], indentation= 0}) {
  const [open, setOpen] = useState(false);
  const [childNodes, setChildNodes] = useState(children);
  const nextIndentation = indentation + PADDING_INCREASE;

  useEffect(() => {
    if (open && !childNodes.length) {
      fetchTreeData();
    }
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  const fetchTreeData = async () => {
    const treeData = await fetchTree(root);

    setChildNodes(treeData.children);
  };

  return (
    <List component="div">
      <ListItem
        button
        onClick={handleClick}
        style={{ paddingLeft: `${nextIndentation}px` }}
      >
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={root} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {childNodes.map(({ path, isDirectory }) => (
          <ListChild root={root} path={path} isDirectory={isDirectory} indentation={nextIndentation} />
        ))}
      </Collapse>
    </List>
  );
}
