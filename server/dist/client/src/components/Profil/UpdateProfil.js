"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const user_actions_1 = require("../../actions/user.actions");
const LeftNav_1 = __importDefault(require("../LeftNav"));
const Utils_1 = require("../Utils");
const FollowHandler_1 = __importDefault(require("./FollowHandler"));
const UploadImg_1 = __importDefault(require("./UploadImg"));
const UpdateProfil = () => {
    const [bio, setBio] = (0, react_1.useState)("");
    const [updateForm, setUpdateForm] = (0, react_1.useState)(false);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const usersData = (0, react_redux_1.useSelector)((state) => state.usersReducer);
    const dispatch = (0, react_redux_1.useDispatch)();
    const [followingPopup, setFollowingPopup] = (0, react_1.useState)(false);
    const [followersPopup, setFollowersPopup] = (0, react_1.useState)(false);
    const handleUpdate = () => {
        dispatch((0, user_actions_1.updateBio)(userData._id, bio));
        setUpdateForm(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "profil-container" }, { children: [(0, jsx_runtime_1.jsx)(LeftNav_1.default, {}), (0, jsx_runtime_1.jsxs)("h1", { children: ["Profil de ", userData.pseudo] }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "update-container" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "left-part" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Photo de profil" }), (0, jsx_runtime_1.jsx)("img", { src: userData.picture, alt: "user-pic" }), (0, jsx_runtime_1.jsx)(UploadImg_1.default, {})] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "right-part" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "bio-update" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Bio" }), updateForm === false && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", Object.assign({ onClick: () => setUpdateForm(!updateForm) }, { children: userData.bio })), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: () => setUpdateForm(!updateForm) }, { children: "modifier bio" }))] })), updateForm && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "textarea", defaultValue: userData.bio, onChange: (e) => setBio(e.target.value) }), (0, jsx_runtime_1.jsx)("button", Object.assign({ onClick: handleUpdate }, { children: "Valider modifications" }))] }))] })), (0, jsx_runtime_1.jsxs)("h4", { children: ["Membre depuis le : ", (0, Utils_1.dateParser)(userData.createdAt)] }), (0, jsx_runtime_1.jsxs)("h5", Object.assign({ onClick: () => {
                                    setFollowingPopup(true);
                                } }, { children: ["Abonnements : ", userData.following ? userData.following.length : ""] })), (0, jsx_runtime_1.jsxs)("h5", Object.assign({ onClick: () => {
                                    setFollowersPopup(true);
                                } }, { children: ["Abonn\u00E9s : ", userData.followers ? userData.followers.length : ""] }))] }))] })), followingPopup && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "popup-profil-container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "modal" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Abonnements" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "cross", onClick: () => setFollowingPopup(false) }, { children: "\u2715" })), (0, jsx_runtime_1.jsx)("ul", { children: usersData.map((user) => {
                                for (let i = 0; i < userData.following.length; i++) {
                                    if (user._id === userData.following[i]) {
                                        return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("img", { src: user.picture, alt: "user-pic" }), (0, jsx_runtime_1.jsx)("h4", { children: user.pseudo }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "follow-handler" }, { children: (0, jsx_runtime_1.jsx)(FollowHandler_1.default, { idToFollow: user._id }) }))] }, user._id));
                                    }
                                }
                            }) })] })) }))), followersPopup && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "popup-profil-container" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "modal" }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Abonn\u00E9s" }), (0, jsx_runtime_1.jsx)("span", Object.assign({ className: "cross", onClick: () => setFollowersPopup(false) }, { children: "\u2715" })), (0, jsx_runtime_1.jsx)("ul", { children: usersData.map((user) => {
                                for (let i = 0; i < userData.followers.length; i++) {
                                    if (user._id === userData.followers[i]) {
                                        return ((0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("img", { src: user.picture, alt: "user-pic" }), (0, jsx_runtime_1.jsx)("h4", { children: user.pseudo }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "follow-handler" }, { children: (0, jsx_runtime_1.jsx)(FollowHandler_1.default, { idToFollow: user._id }) }))] }, user._id));
                                    }
                                }
                            }) })] })) })))] })));
};
exports.default = UpdateProfil;
//# sourceMappingURL=UpdateProfil.js.map