import { questions } from '../constants/questions';
import _ from 'lodash';
import { answerOptions } from '../constants/answer_options';
import {UiState} from './UiState';

let state;

beforeEach(() => {
    state = new UiState();
});

test('all answers should be undefined at start', () => {
    state.answers.forEach((answer) => {
        expect(answer).toBeUndefined();
    });
});

test('no outcome should be shown at start', () => {
    expect(state.endProcess).toBe(false);
    expect(state.link).toBeUndefined();
});

test('only Q1 should be visible at start', () => {
    expectVisibleQuestions({});
});

describe('outcomes', () => {
    // all of these tests are based on the excel sheet
    test('outcome row 2', () => {
        setAnswers({ a1: false });
        expectVisibleQuestions({ endProcess: true });
    });

    test('outcome row 3', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: false });
        expectVisibleQuestions({ q2: true, q3: true, endProcess: true });
    });

    test('outcome row 4', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN", a9: "Colonial Life" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true, q10: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN", a9: "Colonial Life", a10: false });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true, q10: true, endProcess: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN", a9: "Colonial Life", a10: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true, q10: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpBBkxv9SZexjQ==" });
    });

    test('outcome row 5', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN", a9: "Independent Broker" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpBLKyf5AhE8IQ==" });
    });

    test('outcome row 8', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN", a9: "NY Life" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q9: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpA51Bnz+VqcKA==" });
    });

    test('outcome row 9', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true, a7: "Colonial Life" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true, q8: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true, a7: "Colonial Life", a8: false });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true, q8: true, endProcess: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true, a7: "Colonial Life", a8: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true, q8: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpCfQ3TIuPD1bQ==" });
    });

    test('outcome row 10', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true, a7: "Independent Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, q7: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpBWil9IfBnaHg==" });
    });

    test('outcome row 13', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: false });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, endProcess: true });
    });

    test('outcome row 14', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Individual Broker", a6: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpBZ+XSBXEvejw==" });
    });

    test('outcome row 16', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Broker" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Broker", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q4: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true });
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Individual Broker", a6: false });
        expectVisibleQuestions({ q2: true, q3: true, q4: true, q5: true, q6: true, endProcess: true });
    });

    test('outcome row 17', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Benefit Counselor (Enroller)" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Benefit Counselor (Enroller)", a3: false });
        expectVisibleQuestions({ q2: true, q3: true, endProcess: true });
    });

    test('outcome row 18', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Benefit Counselor (Enroller)" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Benefit Counselor (Enroller)", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpAOeDIhO4tHyw==" });
    });

    test('outcome row 19', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Enrollment Firm" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: false });
        expectVisibleQuestions({ q2: true, q3: true, endProcess: true });
    });

    test('outcome row 20', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Enrollment Firm" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q6: true });
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: true, a6: true });
        expectVisibleQuestions({ q2: true, q3: true, q6: true, link: "https://pangea.geninfo.com/Unum/Apply/Default.aspx?BY29ChRPFpBWil9IfBnaHg==" });        
    });

    test('outcome row 21', () => {
        setAnswers({ a1: true });
        expectVisibleQuestions({ q2: true });
        setAnswers({ a1: true, a2: "Enrollment Firm" });
        expectVisibleQuestions({ q2: true, q3: true });
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: true });
        expectVisibleQuestions({ q2: true, q3: true, q6: true });
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: true, a6: false });
        expectVisibleQuestions({ q2: true, q3: true, q6: true, endProcess: true });        
    });
});

describe("dynamic text", () => {
    test("q3 - broker", () => {
        setAnswers({ a1: true, a2: "Broker" });
        expect(state.Q3).toEqual("By agreeing, I hereby certify that I am either an individual or represent an organization who acts as an intermediary between an insurer and employers or employees in the sale and servicing of insurance contracts and wish to be onboarded with Unum as such.")
    });

    test("q3 - benefit counselor", () => {
        setAnswers({ a1: true, a2: "Benefit Counselor (Enroller)" });
        expect(state.Q3).toEqual("By agreeing, I hereby certify that I am a licensed insurance sales person responsible for assisting employees in the purchase of insurance products including providing educational information during enrollments and wish to be onboarded with Unum as such.")
    });

    test("q3 - enrollment firm", () => {
        setAnswers({ a1: true, a2: "Enrollment Firm" });
        expect(state.Q3).toEqual("By agreeing, I hereby certify that my company is operating solely as a professional enrollment organization that is responsible for driving and supporting the enrollment process and wish to be onboarded with Unum as such.")
    });

    test("q6 - agency", () => {
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company" });
        expect(state.Q6).toEqual("By agreeing, I hereby certify that my Agency/Broker Firm/Company has been established with Unum and I wish to be onboarded with Unum as an agent employed by that Agency/Broker Firm/Company.")
    });

    test("q6 - individual broker", () => {
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Individual Broker" });
        expect(state.Q6).toEqual("By agreeing, I hereby certify that I am an officer of the company and represent that I have the full authority to execute this request and following documentation on behalf of the company.")
    });

    test("q6 - enrollment firm", () => {
        setAnswers({ a1: true, a2: "Enrollment Firm", a3: true });
        expect(state.Q6).toEqual("By agreeing, I hereby certify that my Agency/Broker Firm/Company has been established with Unum and I wish to be onboarded with Unum as an agent employed by that Agency/Broker Firm/Company.")
    });
});

describe("dynamic options", () => {
    test("a7", () => {
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "Tax ID", a5: "Agency, Brokerage Firm, or Company", a6: true });
        expect(state.A7Options).toEqual(["Colonial Life", "Independent Company"]);
    });

    test("a9", () => {
        setAnswers({ a1: true, a2: "Broker", a3: true, a4: "SSN" });
        expect(state.A9Options).toEqual(["Colonial Life", "Independent Broker", "NY Life"]);
    });
})

function setAnswers({ a1, a2, a3, a4, a5, a6, a7, a8, a9, a10 }) {
    state.answers = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
}

function expectVisibleQuestions({ q2, q3, q4, q5, q6, q7, q8, q9, q10, endProcess, link }) {
    expect(state.Q2Visible).toBe(q2 === true);
    expect(state.Q3Visible).toBe(q3 === true);
    expect(state.Q4Visible).toBe(q4 === true);
    expect(state.Q5Visible).toBe(q5 === true);
    expect(state.Q6Visible).toBe(q6 === true);
    expect(state.Q7Visible).toBe(q7 === true);
    expect(state.Q8Visible).toBe(q8 === true);
    expect(state.Q9Visible).toBe(q9 === true);
    expect(state.Q10Visible).toBe(q10 === true);
    expect(state.endProcess).toBe(endProcess === true);
    expect(state.link).toBe(link);
}