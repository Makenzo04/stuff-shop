import React from "react";
import {createRoot} from "react-dom/client";
import './styles/index.css';
import { store } from "./features/store";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);