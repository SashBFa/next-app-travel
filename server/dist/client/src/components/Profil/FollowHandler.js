"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const user_actions_1 = require("../../actions/user.actions");
const Utils_1 = require("../Utils");
const FollowHandler = (props) => {
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const [isFollowed, setIsFollowed] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleFollow = () => {
        dispatch((0, user_actions_1.followUser)(userData._id, props.idToFollow));
    };
    const handleUnfollow = () => { };
    (0, react_1.useEffect)(() => {
        if (!(0, Utils_1.isEmpty)(userData.following)) {
            if (userData.following.includes(props.idToFollow)) {
                setIsFollowed(true);
            }
            else
                setIsFollowed(false);
        }
    }, [userData, props.idToFollow]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isFollowed && !(0, Utils_1.isEmpty)(userData) && ((0, jsx_runtime_1.jsx)("span", Object.assign({ onClick: handleUnfollow }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "unfollow-btn" }, { children: "Abonn\u00E9" })) }))), isFollowed === false && !(0, Utils_1.isEmpty)(userData) && ((0, jsx_runtime_1.jsx)("span", Object.assign({ onClick: handleFollow }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "follow-btn" }, { children: "Suivre" })) })))] }));
};
exports.default = FollowHandler;
//# sourceMappingURL=FollowHandler.js.map