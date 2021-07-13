var total=0,absent=0;
var res=[];
var absentees =new Set();
var x;
$.get('test.txt', function(data) {
    // $('.result').html(data);
     res = data.split("\r\n");

     console.log(res);
     var ul = document.getElementById("students");
     for(var i in res)
     {
         var li = document.createElement("li");
         var stu = document.createTextNode(res[i]); 
         li.classList.add("list-group-item");
         li.classList.add("bg-success");
         li.classList.add("text-light");
         li.appendChild(stu);      
         ul.appendChild(li);
         
    }
 });
$(document).ready(function(){
    
    $("li").click(function(){
        $(this).addClass("bg-danger");
        x = $(this).html()
        absentees.add(x);
        $("#absent").text("ABSENT = " + absentees.size)
        var n=[]
        absentees.forEach(v=>n.push(v))
        $("#names").text( n)
        console.log(n)
       
    })  
    total=res.length;
    $("#total").append("TOTAL = " + total)
   
})
