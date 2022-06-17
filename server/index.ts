import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import "./config/db";
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";
import cookieParser from "cookie-parser";
import { checkUser, requireAuth } from "./middleware/auth.middleware";
import cors from "cors";

const app: Express = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Listening on port ${process.env.PORT}`);
});
