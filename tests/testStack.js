/**
 * Created by laurie on 2/12/2015.
 */
/* global require, it, describe */


// comment out require statement when running from html page
var chai = require("chai") ;

var expect = chai.expect;


// comment out when running from html page

var stack = require("../source/js/stack.js");

describe("stack", function() {
    "use strict";
   /* var quizEngineObject = new QuizEngine(bridgeQuizTestData);
    describe("constructor-title", function() {
        it("title should be 'Bridge Quiz'", function() {

            expect(quizEngineObject.getTitle()).to.equal(bridgeQuizTestData.title);
        });
    });
    describe("number", function() {
        it("Number of questions should be '2'", function() {
            expect(quizEngineObject.numQuestions()).to.equal(2);
        });
    });
    describe("question", function() {
        it("First question answer should be 'hardhats' ", function() {
            expect(quizEngineObject.getQuestion(0).answer).to.equal("hardHats");
        });
    });*/

    describe ( "create", function () {
        "use strict";
        var stackList = new stack();

        stackList.push(1);
        stackList.push(2);
        stackList.push(3);

        it ("value should be 1", function() {
            expect(stackList.pop()).to.equal(3);
       });
    })  ;



   /* stackList.reportList();

    var item = stackList.pop();
    console.log("popped: " + item);
    stackList.reportList();
    var item = stackList.pop();
    console.log("popped: " + item);
    var item = stackList.pop();
    console.log("popped: " + item);
    var item = stackList.pop();
    console.log("popped: " + item);
    stackList.reportList();*/
});
