"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const SignInForm = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const handleLogin = (e) => {
        e.preventDefault();
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        (0, axios_1.default)({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            },
        })
            .then((res) => {
            window.location.href = "/";
        })
            .catch((err) => {
            emailError.innerHTML = err.response.data.errors.email;
            passwordError.innerHTML = err.response.data.errors.password;
        });
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ action: "", onSubmit: handleLogin, id: "sign-up-form" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", id: "email", onChange: (e) => setEmail(e.target.value), value: email }), (0, jsx_runtime_1.jsx)("div", { className: "email error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", onChange: (e) => setPassword(e.target.value), value: password }), (0, jsx_runtime_1.jsx)("div", { className: "password error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Se connecter" })] })));
};
exports.default = SignInForm;
//# sourceMappingURL=SignInForm.js.map