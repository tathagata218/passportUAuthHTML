$(function(){
    $("#submitStuff").click(function(){
    var data = {
        username : $("#userName").val().trim(),
        password : $("#passWord").val().trim()
    };
    $.post("/newlogin" ,data);
});
});