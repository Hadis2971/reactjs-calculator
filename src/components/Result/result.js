import React from "react";

import "./result.css";

const result = (props) => {
    return(
        <div id="result">
            <p id="inner-result">
                {props.result}
            </p>
        </div>
    );
};

export default result;