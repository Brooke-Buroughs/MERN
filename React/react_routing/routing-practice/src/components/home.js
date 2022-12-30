import React from "react";
// import {
//     Link
// } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <div>
                <h1 style={{color: "pink"}}>Welcome to the SPA</h1>
            </div>
            {/* <div>
                <Link to={"/hello"}>Say Hello</Link>
                |
                <Link to={"/numbers"}>What Number is it?</Link>
                |
                <Link to={"/colors"}>What color is hello?</Link>
            </div> */}
        </div>
    );
}

export default Home