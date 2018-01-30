import _ from 'lodash';

import { questions } from '../constants/questions';
import { NMOMemberOfferings, NMOOwnedOfferings } from '../constants/answer_options';
import { observable, computed, observe } from 'mobx';
import { links } from '../constants/links';

export class UiState {
    @observable answers = new Array(10);
    // @observable A1; // True, False
    // @observable A2; // Broker, Benefit Counselor (Enroller), Enrollment Firm, Third Party Administrator (TPA), Benefit Administrator (Ben Admin), Technology Provider (Tech Funding Partner), General Agent (GA)
    // @observable A3; // True, False
    // @observable A4; // SSN, Tax ID
    // @observable A5; // Agency, Brokerage Firm, or Company; Individual Broker
    // @observable A6; // True, False
    // @observable A7; // Colonial Life, Independent Company, [NMO_TYPES]
    // @observable A8; // True, False
    // @observable A9; // Colonial Life, Independent Broker, [NMO_TYPES], NY Life
    // @observable A10; // True, False

    @computed get Q2Visible() {
        return this.answers[0] === true;
    }

    @computed get Q3Visible() {
        return (
            this.Q2Visible 
            && ['Broker', 'Enrollment Firm', 'Benefit Counselor (Enroller)'].indexOf(this.answers[1]) >= 0
        );
    }

    @computed get Q4Visible() {
        return (
            this.Q3Visible
            && ['Broker'].indexOf(this.answers[1]) >= 0
            && this.answers[2] === true
        );
    }

    @computed get Q5Visible() {
        return (
            this.Q4Visible
            && this.answers[3] === 'Tax ID'
        );
    }

    @computed get Q6Visible() {
        return (
            (
                this.Q5Visible
                && this.answers[4] !== undefined
            )
            || (
                this.Q2Visible
                && this.answers[1] === 'Enrollment Firm'
                && this.answers[2] === true
            )
        );
    }

    @computed get Q7Visible() {
        return (
            this.Q6Visible
            && this.answers[4] === "Agency, Brokerage Firm, or Company"
            && this.answers[5] === true
        );
    }

    @computed get Q8Visible() {
        return (
            this.answers[1] === 'Broker'
            && this.Q7Visible
            && this.answers[4] === 'Agency, Brokerage Firm, or Company'
            && this.answers[6] === 'Colonial Life'
        );
    }

    @computed get Q9Visible() {
        return (
            this.Q4Visible
            && this.answers[1] === 'Broker'            
            && this.answers[3] === 'SSN'
        );
    }

    @computed get Q10Visible() {
        return (
            this.Q9Visible
            && this.answers[8] === 'Colonial Life'
        );
    }

    Q1 = questions.Q1;
    Q2 = questions.Q2;
    
    @computed get Q3() {
        return questions["Q3"][this.answers[1]];
    }
    
    Q4 = questions.Q4;
    Q5 = questions.Q5;

    @computed get Q6() {
        if(this.answers[1] === "Enrollment Firm" || this.answers[4] === "Agency, Brokerage Firm, or Company") {
            return questions["Q6"][0]
        }
        
        return questions["Q6"][1];
    }

    Q7 = questions.Q7;
    Q8 = questions.Q8;
    Q9 = questions.Q9;
    Q10 = questions.Q10;

    @computed get A7Options() {
        if(this.answers[4] === "Agency, Brokerage Firm, or Company") {
            return [
                "Colonial Life",
                "Independent Company"
            ];
        }

        return [
            "Independent Company"
        ];
    }

    @computed get A9Options() {
        return [
            "Colonial Life",
            "Independent Broker",
            "NY Life"
        ];
    }

    @computed get link() {
        const answers = this.answers.toJS();
        const foundLink = _.find(links, (o) => _.isEqual(o.answers, answers) );
        if(foundLink) {
            return foundLink.link;
        }

        return undefined;
    }

    @computed get endProcess() {
        if(this.answers.indexOf(false) >= 0) {
            return true;
        }

        return false;
    }

    constructor() {
        observe(this.answers, (change) => {
            for(let i = change.index + 1; i < this.answers.length; i++) {
                this.answers[i] = undefined;
            }
        });
    }
}

export default new UiState();