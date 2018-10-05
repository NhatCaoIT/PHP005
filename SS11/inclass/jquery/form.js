$('#submit').click(function(){
    // var namsinh = new $('#yearold').val();
    if($('#yearold').val() <= 1990 ){
        $('#tb').html('nam sinh lon hon 1990');
    }
    console.log($('#yearold').val());

})