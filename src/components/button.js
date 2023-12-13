import React from "react";
import { ReactDOM } from "react";
import "./buttons.css";


export default function Button({text,action,}) {
    return(
        <div className="">
            <button onClick={action} className="rules-opener">{text}</button>
        </div>
    )
}