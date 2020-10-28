import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import ApplicationRoot from "./application/ApplicationRoot";
import "../components/Styles";
import "./assets/style/rest.scss";
import "./assets/style/index.scss";

ReactDOM.render(
    <HashRouter>
        <ApplicationRoot />
    </HashRouter>,
    document.getElementById("root"),
);
