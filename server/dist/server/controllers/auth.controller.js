"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.signIn = exports.signUp = void 0;
const user_model_1 = __importDefault(require("./../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_utils_1 = require("./../utils/errors.utils");
const maxAge = 3 * 21 * 60 * 60 * 1000;
const createToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge,
    });
};
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pseudo, email, password } = req.body;
    try {
        const user = yield user_model_1.default.create({ pseudo, email, password });
        res.status(201).send({ user: user._id });
    }
    catch (err) {
        const errors = (0, errors_utils_1.signUpErrors)(err);
        res.status(400).send({ errors });
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_model_1.default.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge });
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        const errors = (0, errors_utils_1.signInErrors)(err);
        res.status(400).send({ errors });
    }
});
exports.signIn = signIn;
const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};
exports.logout = logout;
//# sourceMappingURL=auth.controller.js.map