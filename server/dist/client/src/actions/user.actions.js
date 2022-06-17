"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.followUser = exports.updateBio = exports.uploadPicture = exports.getUser = exports.UNFOLLOW_USER = exports.FOLLOW_USER = exports.UPDATE_BIO = exports.UPLOAD_PICTURE = exports.GET_USER = void 0;
const axios_1 = __importDefault(require("axios"));
exports.GET_USER = "GET_USER";
exports.UPLOAD_PICTURE = "UPLOAD_PICTURE";
exports.UPDATE_BIO = "UPDATE_BIO";
exports.FOLLOW_USER = "FOLLOW_USER";
exports.UNFOLLOW_USER = "UNFOLLOW_USER";
const getUser = (uid) => {
    return (dispatch) => {
        return axios_1.default
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
            dispatch({ type: exports.GET_USER, payload: res.data });
        })
            .catch((err) => console.log(err));
    };
};
exports.getUser = getUser;
const uploadPicture = (data, id) => {
    return (dispatch) => {
        return axios_1.default
            .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
            .then((res) => {
            return axios_1.default
                .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
                .then((res) => {
                dispatch({ type: exports.UPLOAD_PICTURE, payload: res.data.picture });
            })
                .catch((err) => console.log(err));
        })
            .catch((err) => console.log(err));
    };
};
exports.uploadPicture = uploadPicture;
const updateBio = (userId, bio) => {
    return (dispatch) => {
        return axios_1.default
            .put(`${process.env.REACT_APP_API_URL}api/user/${userId}`, { bio })
            .then((res) => {
            dispatch({
                type: exports.UPDATE_BIO,
                payload: bio,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.updateBio = updateBio;
const followUser = (followerId, idToFollow) => {
    return (dispatch) => {
        return axios_1.default
            .patch(`${process.env.REACT_APP_API_URL}api/user/follow/${followerId}`, {
            idToFollow,
        })
            .then((res) => {
            dispatch({
                type: exports.FOLLOW_USER,
                payload: idToFollow,
            });
        })
            .catch((err) => console.log(err));
    };
};
exports.followUser = followUser;
//# sourceMappingURL=user.actions.js.map