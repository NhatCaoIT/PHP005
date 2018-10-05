var x = $('#soluong').val();

$('#cong').click(function(){
    x++;
    $('#soluong').html(x);
    var gia = x * 180000000;
    console.log(gia);
    $('#gia').html(gia);
})
$('#tru').click(function(){
    x--;
    $('#soluong').html(x);
    var gia = x * 18000000;
    $('#gia').html(gia);
})
$('#mua').click(function(){
    if(x<=0){
        $('#tb').html('Số lượng không hợp lệ !')
    }
    else{
        window.location.replace('https://www.lazada.vn/?spm=a2o4n.shipping.header.dhome.6ec0705bQpL1Ne#hp-collections');
    }
})