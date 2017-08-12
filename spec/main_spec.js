"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const getLyrics = require("../lib/getLyrics");
var main = require("../lib/main");


describe("99 bottles of beer on the wall", function(){
    sinon.spy(console, 'log');

    it("test1：测试返回所有歌词", function(){
        var result = main(99);
        var expect_string = getLyrics(99);

        expect(expect_string.join("")).to.equal(result.join(""));
    });

    it("test2：测试空输入：", function(){
        var expect_string = '';
        var result = main();

        expect(expect_string).to.equal(result);
    });

    it("test3:从56开始：", function () {
        var result = main(56);
        var expect_string = getLyrics(56);

        expect(expect_string.join("")).to.equal(result.join(""));
    })
});