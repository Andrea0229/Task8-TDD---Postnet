
const getArrays = require("../lib/getArrays");
function getNumbers(sub_str) {
    let result = [];

    for (let i = 1; i < sub_str.length - 2; i++) {
        let zip = "";
        for (let j = 0; j < 5; j++) {
            if (sub_str[i][j] === "|") {
                zip += "1"
            }
            else {
                zip += "0"
            }

        }
        // console.log(zip + ":" + parseInt(zip, 2))
        result.push(parseInt(zip, 2))       //二进制转化为数字
    }

    return result;
}

/**
 * 根据数值找到转换表的下表
 * @param item
 */
function getIndex(item, conversions){
    // console.log(typeof (item)+ typeof (conversions[0]))
    return(conversions.indexOf(item));
}

/**
 * 将编码对应二进制的十进制数转化为转换表中的数值
 * @param nums
 */
function getZip(nums){
    let zips = [];
    let conversions = getArrays();

    nums.forEach(item =>{
        let index = getIndex(item,conversions);
        zips.push(index);
    })
    // console.log(zips.length)
    if(nums.length === 9){
        zips.splice(5,0,"-")
    }
    return zips;
}

/**
 * 将编码转化为二进制
 * @param str
 * @returns {Array}
 */
function changeToZip(str) {

    let sub_str = str.split(" ");
    let result = getNumbers(sub_str);
    let zips = getZip(result);

    return zips;
}

module.exports = changeToZip;