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
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const Logout = () => {
    const removeCookie = (key) => {
        if (typeof window !== "undefined") {
            js_cookie_1.default.remove(key, { expires: 1 });
        }
    };
    const logout = () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, axios_1.default)({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/logout`,
            withCredentials: true,
        })
            .then(() => {
            removeCookie("jwt");
        })
            .catch((err) => {
            console.log(err);
        });
        window.location.href = "/";
    });
    return ((0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: logout }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/icons/logout.svg", alt: "logout" }) })));
};
exports.default = Logout;
//# sourceMappingURL=Logout.js.map