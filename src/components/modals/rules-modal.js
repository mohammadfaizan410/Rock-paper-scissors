import React from "react";
import ReactDOM from "react-dom";
import "./rules-modal.css";

export default function RulesModal({closeAction}) {
    return(
        <div className="rules-modal">
           <div className="rules-modal-wrapper">
           <div className="rules-modal-header">
                <h1>Rules</h1>
                <button className="rules-closer" onClick={closeAction}>X</button>
            </div>
            <div className="rules-modal-content">
            </div>
           </div>
        </div>
    )
};