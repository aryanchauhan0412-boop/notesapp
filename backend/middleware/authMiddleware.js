const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
 const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }
  console.log("Authorization Header:", req.headers.authorization);

  const token = authHeader.split(" ")[1];
  try {

    const decoded = jwt.verify(token, "secretKey");

    req.userId = decoded.id;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token"
    });

  }
};

module.exports = authMiddleware;