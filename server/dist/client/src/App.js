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
const react_redux_1 = require("react-redux");
const user_actions_1 = require("./actions/user.actions");
const AppContext_1 = require("./components/AppContext");
const Routes_1 = __importDefault(require("./components/Routes"));
const App = () => {
    const [uid, setUid] = (0, react_1.useState)(null);
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        const fetchToken = () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, axios_1.default)({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}jwtid`,
                withCredentials: true,
            })
                .then((res) => {
                setUid(res.data);
            })
                .catch((err) => {
                console.log("No token");
            });
        });
        fetchToken();
        if (uid) {
            dispatch((0, user_actions_1.getUser)(uid));
        }
    }, [dispatch, uid]);
    return ((0, jsx_runtime_1.jsx)(AppContext_1.UidContext.Provider, Object.assign({ value: uid }, { children: (0, jsx_runtime_1.jsx)(Routes_1.default, {}) })));
};
exports.default = App;
//# sourceMappingURL=App.js.map