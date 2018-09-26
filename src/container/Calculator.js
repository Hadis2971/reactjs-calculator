import React, {Component} from "react";

import Operand from "../components/Operand/operand";
import Operator from "../components/Operator/operator";

class Calculator extends Component {
    
    state = {
        result: ""
    };

    operandClickHandler = (value) => {
        this.setState(prevState => ({
            result: prevState.result + value
        }));
    };

    operatorClickHandler = (value) => {

        if(value === "."){
            this.setState(prevState => ({
                result: prevState.result + value
            }));
        }else{
            this.setState({
                result: value
            });
        }        
    };

    render(){
        return(
            <div>
                <Operator value="CE"/>
                <Operator value="C"/>
                <Operator value="BK"/>
                <Operator value="/"/>

                <Operand  value="7"/>
                <Operand  value="8"/>
                <Operand  value="9"/>
                <Operator value="*"/>

                <Operand  value="4"/>
                <Operand  value="5"/>
                <Operand  value="6"/>
                <Operator value="-"/>

                <Operand  value="1"/>
                <Operand  value="2"/>
                <Operand  value="3"/>
                <Operator value="+"/>

                <Operator value="+-"/>
                <Operand  value="0"/>
                <Operator value="."/>
                <Operator value="="/>
            </div>
        );
    }
};

export default Calculator;