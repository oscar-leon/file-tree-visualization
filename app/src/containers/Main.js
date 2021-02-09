import React, { useEffect, useState } from "react";
import fetchTree from "../services/fetch-tree";

import Loader from "../components/Loader";
import RootList from "../components/RootList";

const Main = () => {
  const [rootTree, setRootTree] = useState(null);

  useEffect(() => {
    fetchTreeData();
  }, []);

  const fetchTreeData = async () => {
    const treeData = await fetchTree();

    setRootTree(treeData);
  };

  if (!rootTree) return <Loader />;

  return <RootList root={'/'} children={rootTree.children} fetch={false} />;
};

export default Main;
