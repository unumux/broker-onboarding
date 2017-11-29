import { observable, computed } from 'mobx';

class UiState {
    @observable answer1;
    @observable answer2;
    @observable answer2a;
    @observable answer3;
    @observable answer4;
    @observable answer4a;
    @observable answer4b;
    @observable answer5;
    @observable answer5_confirmation;
    @observable answer6;
    @observable answer6_confirmation    

    @computed get question2Visible() {
        return this.answer1;
    }

    @computed get question2aVisible() {
        return this.question2Visible && this.answer2 !== undefined;
    }

    @computed get question3Visible() {
        return (
            this.question2aVisible
            && ['Broker', 'Enrollment Firm'].indexOf(this.answer2) >= 0
            && this.answer2a
        );
    }
}

export default new UiState();