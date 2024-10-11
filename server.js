const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/employees", require("./api/employees"));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// 404 middleware
app.use((req, res, next) => {
  next({
    status: 404,
    message: "The endpoint you're trying to reach does not exist",
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Something went wrong on the server side.");
});

// Listener
app.listen(PORT, () => {
  console.log(`Listening on port#: ${PORT}...`);
});
