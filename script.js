// Preload Images
var images = new Array();
var path = /images/;

function preloadImages(path) 
{
    for (i=0; i < preloadImages.arguments.length; i++)
    {
        images[i] = new Image();

        images[i].src = path + preloadImages.arguments[i];
    }
}

preloadImages("images/","RS_Logo.png","RS-Logo_Background.png","consulting.jpg","HSE.jpg","lifting.jpg","mechanical.jpg","rigging.jpg","sourcing.jpg","structural.jpg","technical.jpg","transporting.jpg");

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
/*function validateEmail(form) 
{
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(form.email.value))
    {
        return(true);
    }

    alert("Invalid e-mail address! Please enter again carefully!.");
    return(false);
}*/

/*Body:

<form onSubmit="return validateEmail(this);" action="">
E-mail Address:
<input type="text" name="emailid" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
</form>*/

// Function to scroll to the top
function scrollToTop() 
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

