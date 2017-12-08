import _ from 'lodash';
import { answerOptions } from '../constants/answer_options';

export let answerKeys = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'A10'
];

export const possibleValues = [
    [true, false, undefined], // answer1
    [...answerOptions['2'], undefined], // answer2
    [true, false, undefined], // answer3
    [...answerOptions['4'], undefined], // answer4
    [...answerOptions['5'], undefined], // answer5
    [true, false, undefined], // answer6
    [...answerOptions['7'], undefined], // answer7
    [true, false, undefined], // answer8
    [...answerOptions['9'], undefined], // answer10
    [true, false, undefined], // answer9
];

export const allScenarios = generateAllScenarios();

export function runTests(state, scenarios, variableKey, expectedValue) {
    for(var i = 0; i < scenarios.length; i++) {
        answerQuestions(state, scenarios[i]);
        expect(state[variableKey]).toBe(expectedValue);    
    }
}

export function answerQuestions(state, answers) {
    answers.forEach((val, index) => {
        state[answerKeys[index]] = val;
    });
}

export function reset(state) {
    answerKeys.forEach((val) => {
        state[val] = undefined;
    });
}

export function removeTrue(trueScenarios, scenarios) {
    return _.chain(scenarios)
            .filter((scenario) => {
                for(let i = 0; i < trueScenarios.length; i++) {
                    const trueScenario = trueScenarios[i];
                    if(_.isEqual(trueScenario, scenario)) {
                        return false;
                    }
                }
                return true;
            })
            .value();
}

export function generateAllScenarios(max = possibleValues.length) {
    return generatePermutations(possibleValues, max);
}

export function generatePermutations(input, max = input.length) {
    var r = [];
    function helper(arr, i) {
        for (var j=0, l=input[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(input[i][j]);
            if (i===max-1)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}
