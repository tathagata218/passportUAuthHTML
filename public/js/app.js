$(function(){

    $("#mainSubmit").click(function(){
        event.preventDefault();
        var data = {
            userName : $("#returnUser").val().trim(),
            userPass : $("#returnPass").val().trim()
        }
      
        $.post("/login", data, function(err,data){
            console.log(data);
            console.log(err);

        });

        $("#returnUser").val('');
        $("#returnPass").val('');
    });
    

    

});