import jwt from "jsonwebtoken";
const checkAuth = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      console.log("Si tiene el token con Bearer");
    } catch (error) {
      console.log(error);
    }
  }

  next();
};
export default checkAuth;
