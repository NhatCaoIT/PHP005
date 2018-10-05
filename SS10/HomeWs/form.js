// function date(){
//     var a = parseInt(document.getElementById('nb1').value);
//     var b = parseInt(document.getElementById('nb2').value);
//     if(b>a){
//         document.getElementById('tb').innerHTML = ' * Childrens smaller than persons';
//     }
//     else{
        
//     }
// }
// function time(){
//     var start

// }
$('#submit').click(function(){
    if ( $('#nb1').val() < $('#nb2').val() ){
        $('#tb').html(' * Childrens smaller than persons');
    }
    if($('#name').val() ==''){
        $('#tb1').html('* Ban chua nhap ten');
    }
    else{
        $('#name').val() ='';
    }
    if($('#startdate').val() >= $('#enddate').val() ){
        $('#tb2').html('* StartDate <= EndDate');
    }
    else{

    }
    var now = Date.now();
    console.log($('#startdate').val());
    console.log($('#enddate').val());
    console.log(now);
    var startdate =new Date($('#startdate').val());
    console.log(startdate);
   if(now >= startdate){
       $('#tb3').html("* StartDate >= Now");
   }

})