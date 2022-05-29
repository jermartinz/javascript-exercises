const removeFromArray = function(array, ...position) {
    position = position.map(Number);
    let index = array.indexOf(position);
    if(index > -1){
        array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
