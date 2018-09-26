import React from "react";

const operand = (props) => {
    return(
        <button onClick={() => props.operandClick(props.value)}>
            {props.value}
        </button>
    );
};

export default operand;