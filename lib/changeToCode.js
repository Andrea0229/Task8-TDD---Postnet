/**
 *  将数字转换为编码
 * @param num
 * @returns {*}
 */
const getConversion = require("../lib/getConversion");
const getArrays = require("../lib/getArrays");
var codeToZip = require("../lib/codeToZip")

/**
 * 将给定的数字编码去除‘-’
 * @param str
 * @returns {*}
 */
function getNumbers(str) {
    // console.log(str[3]);
    if(str.indexOf("-") >= 0) {
        let sub_str = str.split("-");
        str = sub_str[0] + sub_str[1];
    }
    // console.log(str);
    return str;
}

function changeToCode(str) {
    str = getNumbers(str);
    let correspond_array = getArrays();     //将数字转换为编码对应的二进制所对应的数（好吧，有点绕）
    let result = ["|"];
    let nums = addCheckCode(str);                //获取校验码并将每一位转换为数字

    nums.forEach(item=>{
        // let num = parseInt(str[i]);
        let code_binary = getConversion(correspond_array[item])  //将二进制数转换为编码
        result.push(codeToZip(code_binary));    //将二进制数转换为编码
    })
    result.push("|");

    return result;
}

/**
 * 给定一个字符串数字，计算其校验码，并将每一位转换为数字
 * @param nums
 */
function addCheckCode(nums){
    let result = [];
    let sum = 0;

    for(let i=0; i<nums.length; i++)
    {
        let num = parseInt(nums[i]);
        sum += num;
        result.push(num)
    }
    let check_code;
    (sum%10 ===0) ? check_code = 0 : check_code = 10 - sum%10
    result.push(check_code);

    return result;
}


module.exports = changeToCode;