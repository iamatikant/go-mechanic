const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//setting the route
app.get("/api", (req, res) => {
  res.json({ users: ["user-one", "user-two", "user-three"] });
});

app.post("/api/data", (req, res) => {
  const { name, email } = req.body;
  debugger;
  res.json({
    message: `Data received successfully name: ${name} and email: ${email}`,
  });
  console.log("name: ", name, "Email: ", email);
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log("Server started on Port: ", PORT);
});
