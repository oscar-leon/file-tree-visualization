const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
const PORT = 8080;

app.use(cors());

app.use("/tree-map", routes.treeMap);
app.use("/reader", routes.reader);
app.use("/download", routes.download);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
