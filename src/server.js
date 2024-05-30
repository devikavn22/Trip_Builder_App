import express from "express";
import { createProxyServer } from "http-proxy";

const app = express();
const port = 3007;
const apiProxy = createProxyServer({
  // Create proxy server
  target: `https://www.course-api.com/react-tours-project`,
  changeOrigin: true,
});

app.use("/api", (req, res) => {
  apiProxy.web(req, res);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
