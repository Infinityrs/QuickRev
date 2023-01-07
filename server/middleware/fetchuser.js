import jwt from "jsonwebtoken";
const secretMesage = "DHEERAJ$ARORA";

export const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Access denied" });
  }
  try {
    const data = jwt.verify(token, secretMesage);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Access denied" });
  }
};





// Express is a routing and middleware web framework that has minimal functionality of its own:
//  An Express application is essentially a series of middleware function calls.

// Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware 
// function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.