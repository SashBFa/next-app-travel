import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./../redux/reducers";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

type layoutProps = {
  children?: JSX.Element | JSX.Element[];
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const pageTransition = {
  in: {
    opacity: 0,
    x: -200,
  },
  anim: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 200,
  },
};

const Layout = ({ children }: layoutProps) => {
  return (
    <Provider store={store}>
      <Navigation />
      <motion.main
        initial="in"
        animate="anim"
        exit="in"
        variants={pageTransition}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.main>
    </Provider>
  );
};

export default Layout;
