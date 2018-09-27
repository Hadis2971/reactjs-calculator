import React, {Component} from "react";

import Operand from "../components/Operand/operand";
import Operator from "../components/Operator/operator";
import Result from "../components/Result/result";

const numbers = {
    num1: undefined,
    num2: undefined,
    operator: "",
    computed: false
};

class Calculator extends Component {
    
    state = {
        result: ""
    };

    operandClickHandler = (value) => {

        if(numbers.computed){
            this.setState({result: ""});
            numbers.computed = false;
        }

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
        }else if(value === "." && /\./g.test(this.state.result)){
            return;
        }else{
            this.setState({result: value});
        }
        
        if(!numbers.num1 && value !== "."){
            numbers.num1 = parseFloat(this.state.result);
            numbers.operator = value;
        }else if(numbers.num1 && value !== "."){
            numbers.num2 = parseFloat(this.state.result);
            numbers.num1 = numbers.num2 + numbers.num1;
            numbers.num2 = undefined;
        }
          
    };

    computeResultHandler = () => {
        
        if(!numbers.num1 && !numbers.operator)return;
        
        if(!numbers.num2){
            numbers.num2 = parseFloat(this.state.result);
        } 

        let result = 0;
        switch(numbers.operator){
            case("/"): result = numbers.num1 / numbers.num2;break;
            case("*"): result = numbers.num1 * numbers.num2;break;
            case("-"): result = numbers.num1 - numbers.num2;break;
            case("+"): result = numbers.num1 + numbers.num2;break;
        }
        
        numbers.num1 = undefined;
        numbers.num2 = undefined;
        numbers.computed = true;
        this.setState({result: result});
        
    };

    eraseOneDigitHandler = () => {
        if(!/\d/g.test(this.state.result))return;
        let helpResult = this.state.result;
        helpResult = helpResult.slice(0, helpResult.length-1);
        this.setState({result: helpResult});
    };

    cleanResultHandler = () => {
        if(!/\d/g.test(this.state.result))return;
        let helpResult = this.state.result;
        helpResult = "";
        this.setState({result: helpResult});
    };

    changeSignHandler = () => {
        //if(!this.state.result.length)return;
        let helpResult = String(this.state.result);
        if(/\-/.test(helpResult)){
            helpResult = helpResult.slice(1, helpResult.length);
        }else{
            helpResult = "-".concat(helpResult);
            
        }
        
        this.setState({result: helpResult});
    };

    render(){
        return(
            <div>
                <Result result={this.state.result} />

                <Operator operatorClick={this.cleanResultHandler} value="CE"/>
                <Operator operatorClick={this.cleanResultHandler} value="C"/>
                <Operator operatorClick={this.eraseOneDigitHandler} value="BK"/>
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

                <Operator operatorClick={this.changeSignHandler} value="+-"/>
                <Operand  operandClick={this.operandClickHandler}   value="0"/>
                <Operator operatorClick={this.operatorClickHandler} value="."/>
                <Operator operatorClick={this.computeResultHandler} value="="/>
            </div>
        );
    }
};

export default Calculator;