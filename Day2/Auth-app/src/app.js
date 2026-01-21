const express = require("express");
const cookieParser = require("cookie-parser");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());


const USER = {
  username: "admin",
  password: "admin123"
};


app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    
    res.cookie("auth", "authenticated", {
      httpOnly: true,
      secure: false, 
      sameSite: "strict"
    });
    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


app.use("/api", protectedRoutes);


app.get("/", (req, res) => {
  res.send("Public Route");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
