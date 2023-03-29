import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav
                className="navbar"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(213,177,240,1) 100%)",
                }}
            >
                <div className="container-fluid">
                    <a
                        className="navbar-brand text-black"
                        style={{ fontFamily: "Courier New', Courier, monospace" }}
                        href="/"
                    >
                        Shalini AR{" "}
                    </a>
                    <Link className="btn btn-outline-primary" to="/">
                        Logout
                    </Link>
                </div>
            </nav>
        </>
    );
}
