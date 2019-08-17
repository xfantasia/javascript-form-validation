
//------------------------------------//
// JAVASCRIPT FORM VALIDATION          
// DEVELOPER : Atsu Emmanuel T.
// EMAIL: atsuemmanuel@gmail.com
//------------------------------------//
	
function validate_form(){

	//FORM FIELDS
	 var first_name = document.getElementById('first_name').value;
	 var last_name = document.getElementById('last_name').value;
	 var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
	 var password2 = document.getElementById('password2').value;
	
	//PASSWORD REG EXP CHECK
	 var password_check = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	

	//CHECK FOR EMPTY FIELDS
	if(
		first_name == "" ||
		last_name == "" ||
		email == "" ||
		password == "" ||
		password2 == ""
	  ) 
		{ 
			first_name = "First Name"
			document.getElementById('error_msg').innerHTML =  "Fields cannot be empty";
			document.getElementById("error_msg").focus();
			return false;
		}else{}
	
	//CHECK FOR VALID EMAIL
	if(/(.+)@(.+){2,}\.(.+){2,}/.test(email)) 
	{}else{
		document.getElementById('error_msg').innerHTML =  "Email provided is not valid";
		document.getElementById("error_msg").focus();
        return false
	}

	//CHECK FOR STRONG PASSWORD ENTRY
	if(password.length >= 8)
	{ 
		if(password.match(password_check)){}
		else{
		document.getElementById('error_msg').innerHTML =  "Password must contain at least an Uppercase, Lowercase and a Special Character. E.g. <b>ABcDef$G@ </b><br><i><b>This ensures tighter Security</b></i>";
		document.getElementById("error_msg").focus();
        return false;}
    }else{
		document.getElementById('error_msg').innerHTML =  "Password must be up to 8 characters long.<br><i><b>This ensures tighter Security</b></i>";
	    	document.getElementById("error_msg").focus();
		return false;
	}
	
   	//CHECK FOR PASSWORD MATCH
	if(password != password2) 
	{ 
		document.getElementById('error_msg').innerHTML =  "Passwords do not match,";
		document.getElementById("error_msg").focus();
        return false;
    }else{return true;}
}
