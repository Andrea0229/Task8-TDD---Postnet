function getBottles(i) {
    let lyr = "";
    if(i >= 2){
        lyr = "    " + i + " bottles of beer on the wall, " + i + " bottles of beer.\n";
        if(i > 2){
            lyr += "    Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n";
        }
        else if(i === 2){
            lyr += "    Take one down and pass it around, " + "1 bottle of beer on the wall.\n";
        }
    }

    else if(i === 1){
        lyr = "    1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "    Take one down and pass it around, no more bottles of beer on the wall.\n" ;
    }
    else{
        lyr += "    No more bottles of beer on the wall, no more bottles of beer.\n" +
            "    Go to the store and buy some more, 99 bottles of beer on the wall."
    }
    return lyr;
}

function main(num){

    if(num === undefined){
        return "";
    }
    var result = [];
    let k = num;

    for(let i=num; i>=0; i--){
        let lyr = getBottles(i);
        result.push(lyr);
    }
    return result;
    
}

module.exports = main;
