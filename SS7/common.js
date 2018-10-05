// alert("a");
document.getElementById('demo1').innerHTML = 'xin chao';
document.write('hello documentwrite');
console.log('hello');

// Bien trong javascript
var userName;
var passWord;
// khai bao ten tuoi sdt
var name;
var email;
var phoneNumber;
var age;
// function hamtrong javascript
function myfunction(){
    // yourcode!
}
//  goi ham
myfunction();
document.write('<br>');
function sumNumber(a=3,b=4){
    return a+b; 
}
document.write(sumNumber(1,3));
var condition = true;
if (condition) {
    // true
}
else if (condition1) {
    // false;
}
else {
    // condition1 false thuc hien lenh nay
}
// vong lap for
document.write('<br>');
document.write('<br>');
for ( var i = 1; i < 10; i++) {
    document.write(i);
    document.write('<br>');
}

var x = 5;
var y = 7;
var z;
z = x++ +5;
document.write('<br>');
document.write(z);
for (var i = 1; i < 20 ; i++) {
    if(i%3==0 && i%5==0 && i%15==0){
        document.write('<br>');
        document.write(i ,'chia het cho ca 3 ,5,15')

    }
    else{
        document.write('<br>');
        document.write(i,' khong chia het cho ca 3,5,15');
    }

}
   
