$(document).ready(function() {  
   
   // alert("OK");
    $.ajax({  
        
        type:"GET",  
        
        url:"http://demo1381866.mockable.io/v1/appointments",  
         
        dataType: "json",  
       
        success: function(data){  
           
            $('#tbody tr:first').remove();
           $.each(data,function(i,item){  

               $('#example2').append('<tr><td>'+item.id+'</td><td>'+'Tom'+'</td><td>'+item.start_datetime+'</td><td>'+item.end_datetime+'</td><td>'+item.payment.status+'</td></tr>');
              
            })
           
        },
        error: function(){
          alert("error");
        }  
    })  
    
});  

$(document).on('click', '#example2 tr', function(){
    var row_num = $(this).index();
    $('#m-body .body-procedure ul').empty();
    $('#example3 tbody').empty();
    $('#example4 tbody').empty();
    $('#m-body .body-nurse img').attr("src", '');
    $.ajax({  
        
        type:"GET",  
        
        url:"http://demo1381866.mockable.io/v1/appointments",  
       
        dataType: "json",  
      
        success: function(data){  
            //使用$.each方法遍历返回的数据date,插入到id为#result中 
            $('#nurse-name').html(data[row_num].nurse.salutation+data[row_num].nurse.name);
            $('#nurse-id').html("Nurse ID:"+data[row_num].nurse.id);
            $('#myModalLabel').html(data[row_num].title);
            $('#m-body .body-nurse img').attr("src", data[row_num].nurse.display_picture_url);
            $('#m-body .body-title').html(data[row_num].title);
            $('#m-body .body-description').html(data[row_num].description);
            $('#m-body #m-start').html(data[row_num].start_datetime);
            $('#m-body #m-end').html(data[row_num].end_datetime);
            $('#m-body .body-address').html(data[row_num].address_1+data[row_num].address_2+', '+data[row_num].state+', '+data[row_num].country+', '+data[row_num].postal);
            $.each(data[row_num].procedures, function(j,p_item){
            $('#m-body .body-procedure ul').append('<li>'+p_item.name+'</li>');  
            })
            $.each(data[row_num].consumables, function(j,p_item){
             $('#example3').append('<tr><td>'+p_item.name+'</td><td>'+p_item.quantity+'</td></tr>');
            })
            var date = data[row_num].payment.date_completed;
            if(typeof date === 'undefined')
              date = '-';
            var total = data[row_num].payment.total_before_discount - data[row_num].payment.discount;
            $('#example4').append('<tr><td>'+data[row_num].payment.status+'</td><td>'+"Cash"+'</td><td>'+data[row_num].payment.total_before_discount+'</td><td>'+data[row_num].payment.discount+'</td><td>'+total+'</td><td>'+data[row_num].payment.date_issued+'</td><td>'+date+'</td></tr>');
           
        },
        error: function(){
          alert("error");
        }  
    })  
    $('#myModal').modal('show')
});