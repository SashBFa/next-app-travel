"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect("mongodb+srv://" +
    process.env.USER +
    ":" +
    process.env.PSWD +
    "@next-app-travel.hajeynl.mongodb.net")
    .then(() => {
    console.log("⚡️[server]: Connect to MongoDB");
})
    .catch((err) => {
    console.log("⚡️[server]: Failed to connect to MongoDB", err);
});
//# sourceMappingURL=db.js.map