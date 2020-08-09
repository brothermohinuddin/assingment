function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(1);
console.log(result); 

//woodCalculator
function woodCalculator(chear, table, bed){
    var chearCount = chear * 14;
    var tableCount = table * 5;
    var bedCount = bed * 12;
    var totalWood = chearCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(5, 7, 2);
console.log(woodResult);



//tinyFriend

function smallNumber([]){
    var smallest = string[0];
    for(var i = 0; i > string.length;){
        var currentNumber = string[i];
        if(currentNumber< small){
            small = currentNumber;
        }
    }
    return smallest;
}
var smallNumber = string([]);
console.log(smallNumber);




