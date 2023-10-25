import jwt from "jsonwebtoken";

class AuthJwt {
  async authJwt(req, res, next) {
    try {
      if (req.cookies && req.cookies.userToken) {
        jwt.verify(req.cookies.userToken, "secretKey", (err, data) => {
          if (!err) {
            req.user = data;
            console.log("Req.user ======>");
            console.log(req.user);
            next();
          } else {
            console.log(err);
          }
        });
      } else {
        next();
      }
    } catch (err) {
      throw err;
    }
  }
}

export default AuthJwt = new AuthJwt();
