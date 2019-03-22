const express = require("express");
const app = express();
const path = require("path");
const STATIC_PATH = path.resolve(__dirname, "public");

// 1. CONFIGURE STATIC FILES
// required so that browser can load other static assets like images or styles
app.use(express.static(STATIC_PATH));

// 2. CONFIGURE API ENDPOINTS ROUTING
// note /api prefix so that api routing wouldn't conflict with client routing
const apiRouter = require("./api");
app.use("/api", apiRouter);

// 3. FALLBACK TO INDEX.HTML. CLIENT ROUTING DO THE JOB LATER IN BROWSER
app.get("*", (_, res) => {
  res.sendFile(path.resolve(STATIC_PATH, "index.html"));
});

app.listen(3000, () => {
  console.log("server started");
});
