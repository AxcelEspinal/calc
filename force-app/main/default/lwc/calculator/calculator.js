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
    
    handleBtns(event) {
        let operator = event.target.dataset.id;

        switch (operator) {
            case "Add":
                this.result = this.firstNum + this.secondNum;
                break;
        
            case "Substract":
                this.result = this.firstNum - this.secondNum;
                break;

            case "Multiply":
                this.result = this.firstNum * this.secondNum;
                break;

            case "Divide":
                this.result = this.firstNum / this.secondNum;
                break;
        }
    }
}