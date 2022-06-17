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
const react_1 = require("react");
const SignInForm_1 = __importDefault(require("./SignInForm"));
const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = (0, react_1.useState)(false);
    const [pseudo, setPseudo] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [controlPassword, setControlPassword] = (0, react_1.useState)("");
    const handleRegister = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const terms = document.getElementById("terms");
        const pseudoError = document.querySelector(".pseudo.error");
        const emailError = document.querySelector(".email.error");
        const passwordError = document.querySelector(".password.error");
        const passwordConfirmError = document.querySelector(".password-confirm.error");
        const termsError = document.querySelector(".terms.error");
        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";
        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword) {
                passwordConfirmError.innerHTML =
                    "les mots de passe ne correspondent pas";
            }
            if (!terms.checked) {
                termsError.innerHTML = "veuillez valider les conditions generales";
            }
        }
        else {
            yield (0, axios_1.default)({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    pseudo,
                    email,
                    password,
                },
            })
                .then((res) => {
                setFormSubmit(true);
            })
                .catch((err) => {
                pseudoError.innerHTML = err.response.data.errors.pseudo;
                emailError.innerHTML = err.response.data.errors.email;
                passwordError.innerHTML = err.response.data.errors.password;
            });
        }
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: formSubmit ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SignInForm_1.default, {}), (0, jsx_runtime_1.jsx)("span", {}), (0, jsx_runtime_1.jsx)("h4", Object.assign({ className: "success" }, { children: "Enregistrement reussi, veuillez vous connecter" }))] })) : ((0, jsx_runtime_1.jsxs)("form", Object.assign({ action: "", onSubmit: handleRegister, id: "sign-up-form" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "pseudo" }, { children: "Pseudo" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "pseudo", id: "pseudo", onChange: (e) => setPseudo(e.target.value), value: pseudo }), (0, jsx_runtime_1.jsx)("div", { className: "pseudo error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "email" }, { children: "Email" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "email", id: "email", onChange: (e) => setEmail(e.target.value), value: email }), (0, jsx_runtime_1.jsx)("div", { className: "email error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password" }, { children: "Password" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password", id: "password", onChange: (e) => setPassword(e.target.value), value: password }), (0, jsx_runtime_1.jsx)("div", { className: "password error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "password-conf" }, { children: "Control Password" })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "password-conf", id: "password-conf", onChange: (e) => setControlPassword(e.target.value), value: controlPassword }), (0, jsx_runtime_1.jsx)("div", { className: "password-confirm error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: "terms" }), (0, jsx_runtime_1.jsxs)("label", Object.assign({ htmlFor: "terms" }, { children: ["I accept terms", " ", (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "/", target: "_blank", rel: "noopener noreferrer" }, { children: "GCD" }))] })), (0, jsx_runtime_1.jsx)("div", { className: "terms error" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Valider inscription" })] }))) }));
};
exports.default = SignUpForm;
//# sourceMappingURL=SignUpForm.js.map