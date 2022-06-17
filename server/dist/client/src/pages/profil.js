"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Log_1 = __importDefault(require("../components/Log"));
const AppContext_1 = require("../components/AppContext");
const UpdateProfil_1 = __importDefault(require("../components/Profil/UpdateProfil"));
const Profil = () => {
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "profil-page" }, { children: uid ? ((0, jsx_runtime_1.jsx)(UpdateProfil_1.default, {})) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "log-container" }, { children: [(0, jsx_runtime_1.jsx)(Log_1.default, { signin: false, signup: true }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "img-container" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/log.svg", alt: "img-log" }) }))] }))) })));
};
exports.default = Profil;
//# sourceMappingURL=profil.js.map