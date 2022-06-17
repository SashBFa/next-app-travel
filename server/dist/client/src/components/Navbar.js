"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("./AppContext");
const Logout_1 = __importDefault(require("./Log/Logout"));
const Navbar = () => {
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    return ((0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "nav-container" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "logo" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "logo" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "./img/icon.png", alt: "icon" }), (0, jsx_runtime_1.jsx)("h3", { children: "Geegam" })] })) })) })), uid ? ((0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", {}), (0, jsx_runtime_1.jsx)("li", Object.assign({ className: "welcome" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/profil" }, { children: (0, jsx_runtime_1.jsxs)("h5", { children: ["Bienvenue ", userData.pseudo] }) })) })), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] })) : ((0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", {}), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/profil" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/icons/login.svg", alt: "login" }) })) })] }))] })) }));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map