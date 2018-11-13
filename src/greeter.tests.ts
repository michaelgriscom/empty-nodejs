/// <reference path='../node_modules/@types/mocha/index.d.ts' />

import * as chai from "chai";
import { Greeter } from "./greeter";

const expect = chai.expect;

describe("Greeter", () => {
    it("should greet with message", () => {
        const greeter = new Greeter("friend");
        expect(greeter.greet()).to.equal("Bonjour, friend!");
    });
});
