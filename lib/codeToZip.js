/**
 * 将二进制数转换为对应编码
 * @param code
 */
function codeToZip(code){
    let result = [];

    for(let i=0; i<code.length; i++){
        if(code[i] == 0){
            result.push(':')
        }
        else{
            result.push('|')
        }

    }

    return result.join('');
}

module.exports = codeToZip;