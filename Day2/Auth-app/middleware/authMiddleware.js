const basicAuth = (req, res, next) => {
  
  const authCookie = req.cookies.auth;

  if (!authCookie) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

module.exports = basicAuth;
