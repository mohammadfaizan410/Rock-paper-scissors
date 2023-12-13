import React from "react";
import ReactDOM from "react-dom";
import "./header.css";
import "../score-card/score-card.js"
import ScoreCard from "../score-card/score-card.js";



export default function Header({score}) {

    return (
        <div className="header-wrapper">
            <div className="game-logo">
            </div>
            <ScoreCard score={score} />
        </div>
    );
}