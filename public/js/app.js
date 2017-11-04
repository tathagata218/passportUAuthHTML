$(function(){

    $("#mainSubmit").click(function(){
        var data = {
            userName : $("#returnUser").val().trim(),
            userPass : $("#returnPass").val().trim()
        }
        console.log(data);
        $.post("/login", data, function(err,data){
            console.log(data);
            console.log(err);

        });
        $("#returnUser").val('');
        $("#returnPass").val('');
    });

    

});