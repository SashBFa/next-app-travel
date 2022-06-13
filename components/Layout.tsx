import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./../redux/reducers";
import Navigation from "./Navigation";

type layoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const Layout = ({ children }: layoutProps) => {
  return (
    <Provider store={store}>
      <Navigation />
      <main>{children}</main>
    </Provider>
  );
};

export default Layout;
