/**
 * Created by Мирослав on 01.05.2016.
 */
var myFile = require ('../js/script.js');

describe("myFile", function() {
    it("testQuestions.length", function() {
        var testQuestionsLength = testQuestions.length;
        expect(testQuestionsLength).toBe(3);
    });
});