import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.USER +
      ":" +
      process.env.PSWD +
      "@next-app-travel.hajeynl.mongodb.net"
  )
  .then(() => {
    console.log("⚡️[server]: Connect to MongoDB");
  })
  .catch((err) => {
    console.log("⚡️[server]: Failed to connect to MongoDB", err);
  });