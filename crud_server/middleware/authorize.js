import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;
// Middleware function to check authorization
const authorize = (req, res, next) => {
  console.log(process.env.SECRET_KEY);
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (error) {
    res.json({
      details: false,
      data: "error",
    });
  }
};

export default authorize;
