import React from "react";
import Card from "./Card";
import {
    faBook,
    faUserPlus,
    faPeopleLine,
    faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";
import Visible from "../Visible";

function DashBoard() {
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 black">Dashboard</h1>
            </div>
            <div class="row">
                <Card
                    title="Borrowed"
                    value="200"
                    color="primary"
                    icon={faBook}
                    cl="primary"
                />
                <Card
                    title="Overdue"
                    value="35"
                    color="primary"
                    icon={faBookOpenReader}
                    cl="primary"
                />
                <Card
                    title="Visitors"
                    value="400"
                    color="primary"
                    icon={faPeopleLine}
                    cl="primary"
                />
                <Card
                    title="New member"
                    value="50"
                    color="primary"
                    icon={faUserPlus}
                    cl="primary"
                />
            </div>
            <Visible />
        </>
    );
}

export default DashBoard;
