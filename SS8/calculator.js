var result = '';
function addvalue(val){
    result = result + val;
    document.getElementById('result').innerHTML = result;
}
function deleteCal(){
    result = '';
    document.getElementById('result').innerHTML = '';
}
function cal(){
    result = eval(result);
    document.getElementById('result').innerHTML = result;
}
// chuoi trong js
// var str = "hi PHP05 java"
// console.log(str.length);
// console.log(str.indexOf('P'));
// console.log(str.lastIndexOf('P'));
// console.log(str.substring(3,8));
function back(){
    console.log(result.length);
    var lengthResult =result.length;
    // console.log(result.length);
     var newResult = result.substring(0,lengthResult-1);
     console.log(newResult.length);
     document.getElementById('result').innerHTML = newResult;
     result = newResult;
}


