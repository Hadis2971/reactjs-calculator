import React from "react";

import "./operator.css";

const operator = (props) => {
    return(
        <button className="operator" onClick={() => props.operatorClick(props.value)}>
            {props.value}
        </button>
    );
};

export default operator;