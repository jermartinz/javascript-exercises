const repeatString = function(word, num) {
    string = '';
    if(num < 0){
        return 'ERROR';
    }
    if(num === 0){
        return '';
    }
    for(let i = 0; i < num; i++){
        string += word;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
