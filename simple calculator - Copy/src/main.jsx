import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Sign from "./Signup.jsx";
import Login from "./Login.jsx";
import Blog from "./Blog.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import Hello from "./Hello.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    // <div className="flex sm:flex-col lg:flex-row md:flex-row flex-wrap justify-evenly ">
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    //   <App />
    // </div>
    // <Sign></Sign>
    // <Login></Login>
    // <Blog></Blog>

    <Provider store={store}>
        <Hello></Hello>
    </Provider>
);
