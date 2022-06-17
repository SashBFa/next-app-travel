"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_actions_1 = require("../actions/users.actions");
const initialState = {};
function usersReducer(state = initialState, action) {
    switch (action.type) {
        case users_actions_1.GET_USERS:
            return action.payload;
        default:
            return state;
    }
}
exports.default = usersReducer;
//# sourceMappingURL=users.reducer.js.map