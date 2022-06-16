import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./../redux/reducers";
import Navigation from "./Navigation";
import { motion } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

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
const theme = createTheme({
  palette: {
    primary: {
      main: "#075985",
    },
    secondary: {
      main: "#07598569",
    },
  },
});

const Layout = ({ children }: layoutProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
