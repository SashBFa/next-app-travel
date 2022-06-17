"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const LeftNav = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "left-nav-container" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "icons" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "icons-bis" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/", className: (nav) => (nav.isActive ? "active-left-nav" : "") }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/icons/home.svg", alt: "home" }) })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/trending", className: (nav) => (nav.isActive ? "active-left-nav" : "") }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/icons/rocket.svg", alt: "trending" }) })), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/profil", className: (nav) => (nav.isActive ? "active-left-nav" : "") }, { children: (0, jsx_runtime_1.jsx)("img", { src: "./img/icons/user.svg", alt: "profil" }) }))] })) })) })));
};
exports.default = LeftNav;
//# sourceMappingURL=LeftNav.js.map