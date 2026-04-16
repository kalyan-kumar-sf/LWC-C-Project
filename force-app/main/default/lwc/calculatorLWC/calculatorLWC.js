import { LightningElement, api } from 'lwc';
export default class CalculatorLWC extends LightningElement {

    //public -- @api and isExposed = false
    //global --- @api and isExposed = true -- 
    @api firstNumber = 20; 
    @api secondNumber = 10;
    result;
    showResult = false;
    //DOM events

    handleBlurFirstNumber(event){
        this.firstNumber = event.target.value;
    }
    handleBlurSecondNumber(event){
        this.secondNumber = event.target.value;
    }

    add(){
        this.showResult = true;
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    sub(){
        this.showResult = true;
        this.result = this.firstNumber - this.secondNumber;

        //if firstNumber is greater then will it show in negitive or error?
    }
    mult(){
        this.showResult = true;
        this.result = this.firstNumber * this.secondNumber;
    }
    div(){
        this.showResult = true;
        this.result = this.firstNumber / this.secondNumber;

    }
    
}