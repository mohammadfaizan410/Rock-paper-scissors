import React from "react";
import ReactDOM from "react-dom";
import "./score-card.css";


export default function ScoreCard({score}) {
    return(
        <div className="score-card-wrapper">
            <div className="score-card">
                <div className="score-card-title">
                    Score
                </div>
                <div className="score-card-score">
                    {score}
                </div>
            </div>
        </div>
    )

};