import React from "react";
import {
    Link
} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1 style={{color: "red"}}>Home Component</h1>
            <div>
            <Link to={"/about"}>Go to About</Link>
            </div>
            <div>
            <Link to={"/survey"}>Comment here</Link>
            </div>
        </div>
    );
}

export default Home