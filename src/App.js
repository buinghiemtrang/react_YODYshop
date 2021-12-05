import React from "react";

import Routes from "./routes/Routes";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
    const showContentMenus = () => {
        let result = null;
        if (Routes.length > 0) {
            result = Routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                {showContentMenus(Routes)}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
