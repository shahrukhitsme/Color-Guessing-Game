$(document).ready(function() {
    $("#do_login").click(function() { 
       console.log("Hey");
       var id=document.getElementById("user").value;
       var password=document.getElementById("pass").value;
       if(id=="admin"&&password=="password")
       {
        window.location.replace("colorGame.html");
       }
       else
       {
        document.getElementById("info").innerHTML="Wrong Credentials!";
       }
        var proceed = true;
        $("#login_form input").each(function(){
            
            if(!$.trim($(this).val())){
            	$(this).parent().find('span').css("display","block");  
                proceed = false;
            }
        });
       
        if(proceed)
        {
            $(this).parent().find('span').css("display","block");
        }
    });
    
    $("#login_form input").keyup(function() { 
        $(this).parent().find('span').css("display","none");
    });
});