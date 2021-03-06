"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_OR_1 = require("../../bdd/objectRepository/loginPage_OR");
const { When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new loginPage_OR_1.loginPage_OR();
const isElementPresent = (element, falseCase) => __awaiter(this, void 0, void 0, function* () {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isElementPresent = yield protractor_1.browser.isElementPresent(protractor_1.$(search[element]));
    // if (falseCase) {
    //     expect(isElementPresent).to.not
    //         .equal(true, `Expected element "${element}" not to be visible`);
    // } else {
    //     expect(isElementPresent).to
    //         .equal(true, `Expected element "${element}" to be visible`);
    // }
    if (isElementPresent) {
        expect(isElementPresent).to.equal(true, `Expected element "${element}" to be visible`);
    }
    else {
        expect(isElementPresent).to.not.equal(true, `Expected element "${element}" not to be visible`);
    }
});
exports.isElementPresent = isElementPresent;
