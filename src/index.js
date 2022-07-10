import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "@picocss/pico";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
