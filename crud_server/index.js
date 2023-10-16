import express from "express";
import dotenv from "dotenv";
import Connections from "./database/db.js";
import router from "./routers/users-routes.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json({ extended: true }));

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

app.use("/", router);

Connections();



app.listen(PORT, () => {
  console.log(`Server is running at @ http://localhost:${PORT}`);
});
