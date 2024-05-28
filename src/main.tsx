// Packages
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Components
import App from "./App";

// Store
import store from "@/redux/store";

// Styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";
import "./assets/styles/tailwind.css";

// Multilanguage
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
