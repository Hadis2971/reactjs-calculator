import React, {Component} from "react";

import Operand from "../components/Operand/operand";
import Operator from "../components/Operator/operator";
import Result from "../components/Result/result";

const numbers = {
    num1: undefined,
    num2: undefined,
    operator: ""
};

class Calculator extends Component {
    
    state = {
        result: ""
    };

    operandClickHandler = (value) => {

        if(!/\d/g.test(this.state.result)){
            this.setState({result: value});
        }else{
            this.setState(prevState => ({
                result: prevState.result + value
            }));
        }
    };

    operatorClickHandler = (value) => {

        if(value === "." && !/\./g.test(this.state.result)){
            this.setState(prevState => ({
                result: prevState.result + value
            }));
        }else{
            if(value === ".")return
            this.setState({result: value});
        }
        
        if(!numbers.num1){
            numbers.num1 = parseFloat(this.state.result);
            numbers.operator = value;
        }
        console.log(numbers);
    };

    computeResultHandler = (x) => {
        numbers.num2 = parseFloat(this.state.result);
        let result = 0;
        switch(numbers.operator){
            case("/"): result = numbers.num1 / numbers.num2;break;
            case("*"): result = numbers.num1 * numbers.num2;break;
            case("-"): result = numbers.num1 - numbers.num2;break;
            case("+"): result = numbers.num1 + numbers.num2;break;
        }
        
        numbers.num1 = undefined;
        numbers.num2 = undefined;

        this.setState({result: result});
    };

    render(){
        return(
            <div>
                <Result result={this.state.result} />

                <Operator operatorClick={this.operatorClickHandler} value="CE"/>
                <Operator operatorClick={this.operatorClickHandler} value="C"/>
                <Operator operatorClick={this.operatorClickHandler} value="BK"/>
                <Operator operatorClick={this.operatorClickHandler} value="/"/>

                <Operand  operandClick={this.operandClickHandler}  value="7"/>
                <Operand  operandClick={this.operandClickHandler}  value="8"/>
                <Operand  operandClick={this.operandClickHandler} value="9"/>
                <Operator operatorClick={this.operatorClickHandler} value="*"/>

                <Operand  operandClick={this.operandClickHandler}  value="4"/>
                <Operand  operandClick={this.operandClickHandler}  value="5"/>
                <Operand  operandClick={this.operandClickHandler}  value="6"/>
                <Operator operatorClick={this.operatorClickHandler} value="-"/>

                <Operand  operandClick={this.operandClickHandler}  value="1"/>
                <Operand  operandClick={this.operandClickHandler}  value="2"/>
                <Operand  operandClick={this.operandClickHandler}  value="3"/>
                <Operator operatorClick={this.operatorClickHandler} value="+"/>

                <Operator value="+-"/>
                <Operand  operandClick={this.operandClickHandler}   value="0"/>
                <Operator operatorClick={this.operatorClickHandler} value="."/>
                <Operator operatorClick={this.computeResultHandler} value="="/>
            </div>
        );
    }
};

export default Calculator;