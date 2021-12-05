import React, { Component } from "react";
import '../styles/App.css';
import Header from "./Header/Header.jsx";
// import MainListContainer from "./MainList/MainListContainer.jsx";
import store from "./../redux/redux-store.js"
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Main from "./Main/Main.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";
import Content from "./Content/Content.jsx";


class App extends Component {
    render() {
        return (
                <div className="App__wrapper">
                    <Header />
                    <Main />
                    <MainMenu />
                    <Content />
                </div>
        );
    }
}

export default App;