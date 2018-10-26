import _ from 'lodash';

import { questions } from '../constants/questions';
import { answerOptions } from '../constants/answer_options';
import { observable, computed, observe } from 'mobx';
import { links } from '../constants/links';

export class UiState {
    @observable answers = new Array(10);

    @computed get Q2Visible() {
        return this.answers[0] === true;
    }

    @computed get Q3Visible() {
        return (
            this.Q2Visible 
            && this.answers[1] !== undefined
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
        );
    }

    @computed get Q7Visible() {
        return (
            this.Q6Visible
            && answerOptions['5'].indexOf(this.answers[4]) >=0
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

        let allOptions = [...answerOptions['nmoMember'], ...answerOptions['nmoOwned']];

        if(this.answers[4] === "Agency, Brokerage Firm, or Company") {
            allOptions = [...allOptions, 'Colonial Life'];   
        }

        return allOptions = ['Independent Company', ...allOptions.sort()];
    }
    
    @computed get A9Options() {

        let allOptions = [...answerOptions['nmoMember'], ...answerOptions['nmoOwned'], 'Colonial Life', 'NY Life'];

        return allOptions = ['Independent Broker', ...allOptions.sort()];
    }

    @computed get link() {
        const answers = this.answers.toJS();
        const sharedLinkArray = ["Third Party Administrator", "Benefit Administrator", "Technology Provider"];

        // checks to see if the user's role selection matches any in the "SharedLinkArray" and if so, reassigning
        // the user's selection to "Shared Link" because all three of those roles share the same end link.
        // this way only have to store the end link once.
        if(sharedLinkArray.indexOf(answers[1]) >= 0) {
            answers[1] = "Shared Link";
        };

        // Handles an Agency, Brokerage firm, or Co.(Q5) NMO selection (Q7)     
        if(this.answers[4] === 'Agency, Brokerage Firm, or Company' && answerOptions['nmoMember'].indexOf(answers[6]) >= 0)
            answers[6] = "NMO Member";

        // Handles an Individual Broker (Q5) NMO selection (Q7)     
        if(this.answers[4] === 'Individual Broker' && (answerOptions['nmoMember'].indexOf(answers[6]) >= 0 || answerOptions['nmoOwned'].indexOf(answers[6]) >= 0))
            answers[6] = "NMO";

        // Is A8 a NMO Member?     
        if(answerOptions['nmoMember'].indexOf(answers[8]) >= 0)
            answers[8] = "NMO Member";

        const foundLink = _.find(links, (o) => _.isEqual(o.answers, answers) );
        if(foundLink) {
            return foundLink.link;
        }

        return undefined;
    }

    @computed get endProcess() {

        this.answers['nmoOut'] = false;

        if(this.answers.indexOf(false) >= 0) {
            return true;
        }

        if(this.answers[1] === "General Agent") {
            return true;
        }

        if((this.answers[4] !== 'Individual Broker' && answerOptions['nmoOwned'].indexOf(this.answers[6]) >= 0) || answerOptions['nmoOwned'].indexOf(this.answers[8]) >= 0) {
            this.answers['nmoOut'] = true;
            return true;
        }

        return false;
    }

    //reset
    constructor() {
        observe(this.answers, (change) => {
            for(let i = change.index + 1; i < this.answers.length; i++) {
                this.answers[i] = undefined;
            }
        });
    }
}

export default new UiState();