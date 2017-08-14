
function getConversion(num){
    let num_binary = num.toString(2);
    return (Array(6-num_binary.length).join('0')+num_binary);
}

module.exports = getConversion;