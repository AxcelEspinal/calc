import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    result;
    firstNum;
    secondNum;
    handleFirstChange(event) {
        this.firstNum = parseFloat(event.target.value);
    };

    handleSecondChange(event) {
        this.secondNum = parseFloat(event.target.value);
    };

    handleAdd() {
        this.result = this.firstNum + this.secondNum;
    };

    handleSubstract() {
        this.result = this.firstNum - this.secondNum;
    };

    handleMultiply() {
        this.result = this.firstNum * this.secondNum;
    };

    handleDivide() {
        this.result = this.firstNum / this.secondNum;
    };
}