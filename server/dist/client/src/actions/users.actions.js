"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.GET_USERS = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_USERS = "GET_USERS";
const getUsers = () => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/user`)
            .then((res) => {
            dispatch({ type: exports.GET_USERS, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getUsers = getUsers;
//# sourceMappingURL=users.actions.js.map