import React from "react";
// import { Link } from "react-router-dom";

export default function Welcome(props) {

    const navbarStyle = {
        background: "linear-gradient(to right, #9900ff, #cc80ff)",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
    };

    const linkStyle = {
        textDecoration: "none",
        padding: "10px",
        color: "black",
        border: "2px solid white",
        borderRadius: "5px",
        margin: "10px",
        marginLeft: "10px",
        transition: "background-color 0.3s ease 0s, color 0.3s ease 0s",
    };

    const navigateToGoogle = () => {
        window.location.href = "https://gif-searching-app.vercel.app/";
    };

    return (
        <div>
            <div style={navbarStyle}>
                <h2 style={{ color: 'black', marginTop: '10px' }}>
                    {props.name ? `Welcome - ${props.name}` : "Login please"}
                </h2>
                <button
                    style={linkStyle}
                    onClick={navigateToGoogle}
                    onMouseOver={(e) => {
                        e.target.style.cursor = "pointer";
                    }}
                >
                    Click to go Giphy
                </button>
            </div>
        </div>
    );
}