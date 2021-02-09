import React from "react";
import RootList from "./RootList";
import FilePreview from "./FilePreview";

const ListChild = ({ isDirectory, root, path, ...childProps }) => {
  const Child = isDirectory ? RootList : FilePreview;
  const parsedRoot = isDirectory ? `${root}${path}/` : `${root}${path}`;

  return <Child root={parsedRoot} {...childProps} />;
};

export default ListChild;
