"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const user_reducer_1 = __importDefault(require("./user.reducer"));
const users_reducer_1 = __importDefault(require("./users.reducer"));
exports.default = (0, redux_1.combineReducers)({
    userReducer: user_reducer_1.default,
    usersReducer: users_reducer_1.default,
});
//# sourceMappingURL=index.js.map