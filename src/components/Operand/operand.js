import React from "react";

import "./operand.css";

const operand = (props) => {
    return(
        <button className="operand" onClick={() => props.operandClick(props.value)}>
            {props.value}
        </button>
    );
};

export default operand;