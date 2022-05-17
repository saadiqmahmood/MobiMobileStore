// JAVASCRIPT FORM VALIDATION

// Creation of function called validateform
function validateform() 
    //Open function
{
    // Three variables created, for each field (name, email and comment)
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var comment=document.myform.comment.value;
    //  IF statement created. Contains three sections:
    // For name,
    if (name==null || name==""){
        alert("Please enter name");
        return false;
    }
    // Email
    else if (email==null || email==""){
        alert("Please enter email");
        return false;
    }
    // and Comment.
    else if (comment==null || comment==""){
        alert("Please enter comment");
        return false;
    }
    // Close function
}