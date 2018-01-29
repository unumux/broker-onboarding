import { questions } from '../constants/questions';
import _ from 'lodash';
import { answerOptions } from '../constants/answer_options';
import {
    allScenarios,
    answerKeys,
    answerQuestions,
    generateAllScenarios,
    generatePermutations,
    removeTrue,
    runTests,
} from './testUtil';
import {UiState} from './UiState';

let state;

beforeEach(() => {
    state = new UiState();
});

test('all answers should be undefined at start', () => {
    answerKeys.forEach((key) => {
        expect(state[key]).toBeUndefined();
    });
});

test('only Q1 should be visible at start', () => {
    expect(state.Q2Visible).toBe(false);
    expect(state.Q3Visible).toBe(false);
    expect(state.Q4Visible).toBe(false);
    expect(state.Q5Visible).toBe(false);
    expect(state.Q6Visible).toBe(false);
    expect(state.Q7Visible).toBe(false);
    expect(state.Q8Visible).toBe(false);
    expect(state.Q9Visible).toBe(false);
    expect(state.Q10Visible).toBe(false);
});

const Q2VisibleScenarios = [
    true
]

const Q3VisibleScenarios = generatePermutations([
    Q2VisibleScenarios,
    ["Broker", 'Enrollment Firm', 'Benefit Counselor (Enroller)']
]);

const Q3VisibleScenarios = generatePermutations([
    Q2VisibleScenarios,
    ["Broker", 'Enrollment Firm', 'Benefit Counselor (Enroller)']
]);

// test('Q2Visible', () => {
//     const expectedTrue = [
//         [true]
//     ];

//     const expectedFalse = [
//         [false]
//     ];

//     runTests(state, expectedTrue, 'Q2Visible', true);
//     runTests(state, expectedFalse, 'Q2Visible', false);
// });

// test('Q3Visible', () => {
//     const expectedTrue = [
//         [true, 'Broker'],
//         [true, 'Enrollment Firm'],
//         [true, 'Benefit Counselor (Enroller)']
//     ];

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(2));
//     runTests(state, expectedTrue, 'Q3Visible', true);
//     runTests(state, expectedFalse, 'Q3Visible', false);
// });

// test('Q4Visible', () => {
//     const expectedTrue = [
//         [true, 'Broker', true],
//         [true, 'Enrollment Firm', true]
//     ];

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(3));

//     runTests(state, expectedTrue, 'Q4Visible', true);
//     runTests(state, expectedFalse, 'Q4Visible', false);
// });

// test('Q5Visible', () => {
//     const expectedTrue = [
//         [true, 'Broker', true, 'Tax ID'],
//         [true, 'Enrollment Firm', true, 'Tax ID']
//     ];

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(4));

//     runTests(state, expectedTrue, 'Q5Visible', true);
//     runTests(state, expectedFalse, 'Q5Visible', false);
// });

// test('Q6Visible', () => {
//     const expectedTrue = generatePermutations([
//         [true],
//         ['Broker', 'Enrollment Firm'],
//         [true],
//         ['Tax ID'],
//         answerOptions['5']
//     ]);

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(5));

//     runTests(state, expectedTrue, 'Q6Visible', true);
//     runTests(state, expectedFalse, 'Q6Visible', false);
// });

// test('Q7Visible', () => {
//     const expectedTrue = generatePermutations([
//         [true],
//         ['Broker', 'Enrollment Firm'],
//         [true],
//         ['Tax ID'],
//         answerOptions['5'],
//         [true]
//     ]);

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(6));

//     runTests(state, expectedTrue, 'Q7Visible', true);
//     runTests(state, expectedFalse, 'Q7Visible', false);
// });

// test('Q8Visible', () => {
//     const expectedTrue = [
//         [true, 'Broker', true, 'Tax ID', answerOptions['5'][0], true, 'Colonial Life']
//     ]
    
//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(7));

//     runTests(state, expectedTrue, 'Q8Visible', true);
//     runTests(state, expectedFalse, 'Q8Visible', false);
// });

// test('Q9Visible', () => {
//     const expectedTrue = ([
//         [true, 'Broker', true, 'SSN']
//     ]);

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(4));

//     runTests(state, expectedTrue, 'Q9Visible', true);
//     runTests(state, expectedFalse, 'Q9Visible', false);
// });

// test('Q10Visible', () => {
//     const expectedTrue = [
//         [true, 'Broker', true, 'SSN', undefined, undefined, undefined, undefined, 'Colonial Life']
//     ];

//     const expectedFalse = removeTrue(expectedTrue, generateAllScenarios(9));
//     runTests(state, expectedTrue, 'Q10Visible', true);
//     runTests(state, expectedFalse, 'Q10Visible', false);
// });

// // test.only('Q3', () => {
// //     const questionVariants = questions[2];
// //     answerOptions['2'].forEach((option) => {
// //         const expectedQuestion = questions[option];
// //         console.log(expectedQuestion)
// //     });
// // })

