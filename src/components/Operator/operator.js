import React from "react";

const operator = (props) => {
    return(
        <button onClick={() => props.operatorClick(props.value)}>
            {props.value}
        </button>
    );
};

export default operator;