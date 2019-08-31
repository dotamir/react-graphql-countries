import React from "react";

const Home = () => {
    return (
        <div className="home">
            <h1>Home page</h1>
            <p>This application is based on Create-React-App, but I've made some changes on structure to make it organized.</p>
            <p>You might see the "componentWillMount" warning in console, which is related to "react-loadable" package and they didn't migrate to the latest react version yet.</p>
        </div>
    );
};

export default Home;
