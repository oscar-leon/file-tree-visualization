import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FileCopy from "@material-ui/icons/FileCopy";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const PADDING_INCREASE = 15;
const API_FILE_PREVIEW_ENDPOINT = "http://localhost:8080/reader?path=";
const API_FILE_DOWNLOAD_ENDPOINT = "http://localhost:8080/download?path=";

const FilePreview = ({ root, indentation = 0 }) => {
  const [open, setOpen] = useState(false);
  const nextIndentation = indentation + PADDING_INCREASE;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="div">
      <ListItem
        button
        onClick={handleClick}
        style={{ paddingLeft: `${nextIndentation}px` }}
      >
        <ListItemIcon>
          <FileCopy />
        </ListItemIcon>
        <ListItemText primary={root} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {open && (
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <iframe src={`${API_FILE_PREVIEW_ENDPOINT}${root}`} />
            <div>
              <Button variant="contained" color="primary">
                <a
                  href={`${API_FILE_DOWNLOAD_ENDPOINT}${root}`}
                  download
                >
                  Download file
                </a>
              </Button>
            </div>
          </div>
        )}
      </Collapse>
    </List>
  );
};

export default FilePreview;
