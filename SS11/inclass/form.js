$('#submit').click(function(){
   //lay ra nam hien tai
    var now = new Date();
    var d  = now.getFullYear();
    var clear = $('#yearold').val();
    console.log(d);
    // dieu kien cho nam sinh
    if($('#yearold').val() <= 1990 || $('#yearold').val() > d  ){
        $('#tb').html('* nam sinh lon hon 1990 va nho hon nam hien tai !');
        clear = "";
    }
    else if($('#yearold').val()>2000){
        $("#boss").css({"background-color": "blue"});
    }
    else{
        $('#boss').css({"background-color": "green" });
    }
    if($('#yearold').val() ==''){
        $('#tb').html('* ban chua nhap nam sinh !')
    } 
    //dieu kien cho name
    if($('#name').val()==""){
        $('#tb1').html('* ban chua nhap ten !');
    }
    // chuyen trang khi chon gioi tinh
   
    
})
