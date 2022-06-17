"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const user_actions_1 = require("../../actions/user.actions");
const UploadImg = () => {
    const [file, setFile] = (0, react_1.useState)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", userData.pseudo);
        data.append("userId", userData._id);
        data.append("file", file);
        dispatch((0, user_actions_1.uploadPicture)(data, userData._id));
    };
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ action: "", onSubmit: handlePicture, className: "upload-pic" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ htmlFor: "file" }, { children: "Changer d'image" })), (0, jsx_runtime_1.jsx)("input", { type: "file", id: "file", name: "file", accept: ".jpg, .jpeg, .png", onChange: (e) => setFile(e.target.files[0]) }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "submit", value: "Envoyer" })] })));
};
exports.default = UploadImg;
//# sourceMappingURL=UploadImg.js.map