import express from "express";
import dotenv from "dotenv";
import Connections from "./database/db.js";
import router from "./routers/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(AuthJwt.authJwt);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json({ extended: true }));

app.use(cookieParser());
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set to true if using HTTPS
}));

app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000/",
//   })
// );

app.use("/", router);

Connections();



app.listen(PORT, () => {
  console.log(`Server is running at @ http://localhost:${PORT}`);
});
