import React from "react";
import "./stage-1.css";



export default function Stage1({pickAction}) {
    return(
        <div className="stage1-wrapper">
            <div className="icon-wrapper-paper">
            <div className="icon-wrapper-paper-inner">
            <div className="stage-1-paper" id="paper" onClick={() => pickAction("paper")}></div>
            </div>
            </div>
            <div className="icon-wrapper-scissor">
            <div className="icon-wrapper-scissor-inner">
            <div className="stage-1-scissor" id="scissor" onClick={() => pickAction("scissor")}></div>
            </div>
            </div>
            <div className="icon-wrapper-rock">
            <div className="icon-wrapper-rock-inner">
            <div className="stage-1-rock" id="rock" onClick={() => pickAction("rock")}></div>
            </div>
            </div>
        </div>
    )
};
