function sum(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
        var Tong = a+b;
        document.getElementById('KQ').innerHTML = Tong;
}
function sub(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
        var hieu = a-b;
        document.getElementById('KQ').innerHTML = hieu;
}
function multi(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
        var Multi = a*b;
        document.getElementById('KQ').innerHTML = Multi;
}
function chia(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var thuong = a/b;
    if(b=0){
        document.write('nhap b khac 0');
    }
    else
        document.getElementById('KQ').innerHTML = thuong;
}