"use strict";

var chai = require("chai");
var expect = chai.expect;

module.exports = function() {
  this.When(/^I search for (.*)$/, (str) => {
    browser.url("/");
    browser.setValue("#lst-ib", str + "\n");
  });

  this.Then(/^I see "([\w\s]+)" in the search results$/, (str) => {
    browser.waitForExist("#ires");
    expect(browser.isExisting(`//*[contains(text(),'${str}')]`)).to.be.true;
  });
};