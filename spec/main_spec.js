// "use strict";

/**
 * 如何实现：
 * 1. 将数字转换为编码
 *  ① 将数字转换为编码所对应二进制数的数字。即1对应3；2对应5
 *  ② 根据10进制数，将数字转换为二进制
 *  ③ 将而二进制的每一位对应为相应得编码，即0对应：  1对应|
 * @type {_}
 * @private
 */
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const getConversion = require("../lib/getConversion");
const getArrays = require("../lib/getArrays");
var main = require("../lib/main");
var codeToZip = require("../lib/codeToZip")


describe("TDD Postnet", function(){

    it("test1:数字转换为编码二进制对应的数值", function(){
        let correspond_array = getArrays();

        expect_array = [24,3,5,6,9,10,12,17,18,20];
        expect(expect_array[3]).to.equal(correspond_array[3]);
    });

    it("test2：将数字转换为对应编码的二进制：", function(){
        let correspond_array = getArrays();

        let num = 3;
        let code_binary = getConversion(correspond_array[num]);
        let expect_string = "00110";
        expect(expect_string).to.equal(code_binary);

        expect_string = "11000";
        num = 0;
        code_binary = getConversion(correspond_array[num])
        expect(expect_string).to.equal(code_binary);
    });

    it("test3:将二进制数转换为对应编码：", function () {
        let code_binary = [1,0,1,0,0];
        let result = codeToZip(code_binary);
        let expect_string = "|:|::"

        expect(expect_string).to.equal(result);
    })

    it("test4:将一个数字转换为对应编码",function () {
        let num = 7;
        let correspond_array = getArrays();     //将数字转换为编码对应的二进制所对应的数（好吧，有点绕）
        let code_binary = getConversion(correspond_array[num])  //将二进制数转换为编码
        let result = codeToZip(code_binary);    //将二进制数转换为编码
        let expect_string = "|:::|";

        expect(expect_string).to.equal(result);

    })

    // it("test5:将")
});