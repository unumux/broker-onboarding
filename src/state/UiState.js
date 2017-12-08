import { questions } from '../constants/questions';
import { observable, computed } from 'mobx';

export class UiState {
    @observable A1;
    @observable A2;
    @observable A3;
    @observable A4;
    @observable A5;
    @observable A6;
    @observable A7;
    @observable A8;
    @observable A9;
    @observable A10; 

    @computed get Q2Visible() {
        return this.A1 === true;
    }

    @computed get Q3Visible() {
        return (
            this.Q2Visible 
            && this.A2 !== undefined
        );
    }

    @computed get Q4Visible() {
        return (
            this.Q3Visible
            && ['Broker', 'Enrollment Firm'].indexOf(this.A2) >= 0
            && this.A3 === true
        );
    }

    @computed get Q5Visible() {
        return (
            this.Q4Visible
            && this.A4 === 'Tax ID'
        );
    }

    @computed get Q6Visible() {
        return (
            this.Q5Visible
            && this.A5 !== undefined
        );
    }

    @computed get Q7Visible() {
        return (
            this.Q6Visible
            && this.A6 === true
        );
    }

    @computed get Q8Visible() {
        return (
            this.A2 === 'Broker'
            && this.Q7Visible
            && this.A5 === 'Agency, Brokerage Firm, or Company'
            && this.A7 === 'Colonial Life'
        );
    }

    @computed get Q9Visible() {
        return (
            this.Q4Visible
            && this.A2 === 'Broker'            
            && this.A4 === 'SSN'
        );
    }

    @computed get Q10Visible() {
        return (
            this.Q9Visible
            && this.A9 === 'Colonial Life'
        );
    }

    @computed get Q3() {
        return questions[this.A2];
    }
}

export default new UiState();