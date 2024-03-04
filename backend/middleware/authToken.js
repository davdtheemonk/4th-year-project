const jwt = require("jsonwebtoken");

const authtoken = async (req, res, next) => {
  console.log(req.header("x-auth-token"));
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({ message: "No token found" });
  }
  try {
    const user = await jwt.verify(token, process.env.PRIVATE_KEY);

    req.user = user;

    next();
  } catch (error) {
    res.status(403).send({ message: "Invalid Token" });
  }
};

module.exports = authtoken;
