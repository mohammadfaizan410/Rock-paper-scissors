import React from "react";
import "./stage-2.css";



export default function Stage1({gameStage, myPick, compPick, result, restart}) {
    return(
        <div className="stage2-wrapper">
            <div className="my-pick-div">
            <h1 className="pick-title">Your Pick</h1>
            <div className={`icon-wrapper-${myPick}-2`}>
            <div className={`icon-wrapper-${myPick}-inner-2`}>
            <div className={`stage-2-${myPick}`} id={myPick}></div>
            </div>
            </div>
            </div>

            {result !== null && 
                <div className="result-div">
                <h1 className="result-title">{result}</h1>
                <button onClick={restart} className="play-again-btn">Play Again</button>
                </div>
            }

            {compPick !== null ? 
                <div className="comp-pick-div">
                <h1 className="pick-title">The House Picked</h1>
                <div className={`icon-wrapper-${compPick}-2`}> 
                <div className={`icon-wrapper-${compPick}-inner-2`}>
                <div className={`stage-2-${compPick}`} id={compPick}></div>
                </div>
                </div>
                </div>
            
            : <div className="placeholder"></div> }

        </div>
    )
};
