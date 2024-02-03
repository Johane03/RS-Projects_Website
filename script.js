// Preload Images
var images = new Array();

function preloadImages()
{
    for (i=0; i < preloadImages.arguments.length; i++)
    {
        images[i] = new Image();

        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("RS_Logo.png","RS-Logo_Background.png","consulting.jpg","HSE.jpg","lifting.jpg","mechanical.jpg","rigging.jpg","sourcing.jpg","structural.jpg","technical.jpg","transporting.jpg");

// No Right Click
/*function f1() 
{
    if(document.all) { return false; }

}

function f2(e) 
{
    if(document.layers || (document.getElementById &! document.all)) 
    {
      if(e.which==2 || e.which==3) { return false; }
    }
}
  
if(document.layers) 
{
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = f1;
}
else 
{
    document.onmouseup = f2;
    document.oncontextmenu = f1;
}
document.oncontextmenu = new function("return false");*/

//Show Current Date
function showDate() 
{
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
}

// Email Validation
function validateEmail(theForm) 
{
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value))
    {
        return(true);
    }

    alert("Invalid e-mail address! Please enter again carefully!.");
    return(false);
}

/*Body:

<form onSubmit="return validateEmail(this);" action="">
E-mail Address:
<input type="text" name="emailid" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
</form>*/


