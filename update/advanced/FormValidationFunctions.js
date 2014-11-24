function Has_Value(Field_Name, Error_Message)
//this function is used to make sure that required form fields have values.
//Field_Name: name of a form field in the form of document.form_name.form_field_name that will be validated.
//Error_Message: this is the alert error message that will be displayed to the user.
{
	if(Field_Name.value.length == 0)
	{
		alert(Error_Message);
		Field_Name.select();
		Field_Name.focus();
		return false;   
	}
	if (Field_Name.value.charAt(0) == " ")
	{
		alert("A blank space cannot be the first character in this field.");
		Field_Name.select();
		Field_Name.focus();
		return false;	
	}
	return true;
}

function Is_Valid_Email(email)
//this function is used to make sure that emails are in the proper format.
//email: name of the form field in the document where the email is input, comes
//in the form of document.form_name.form_field_name
{
	if (email.value.length == 0)
	{
       	return true;
	}
	if(email.value.indexOf("@")==-1)
	{
		alert("Email Address format requires the '@' symbol");
		email.focus();
		return false;
	}
	else
	{
		if(email.value.indexOf(".")==-1)
		{
			alert("Email Address format requires a period (.) and a 3 digit domain.  Example(.com, .net)");
			email.focus();
			return false;
		}
	}
	//loop through checking each char in address.
	//var period_counter; // counts periods in email
	//period_counter = 0;
	var at_symbol_counter; // counts the @ symbol in emails
	at_symbol_counter = 0;
	if (email.value.charAt(0) == "@")
	{
		alert("The @ symbol cannot be the first character of an email address.");
		email.focus();
		return false;	
	}
	for (i=0; i<email.value.length; i++)
	{
		/*
		if (email.value.charAt(i) == ".")
		{
			period_counter = period_counter + 1;
			if (period_counter > 1)
			{
				alert("Email address cannot contain more than one period.");
				email.focus();
				return false;	
			}
		}
		*/
		if (email.value.charAt(i) == "@")
		{
			at_symbol_counter = at_symbol_counter + 1;
			if (at_symbol_counter > 1)
			{
			alert("Email address cannot contain more than one @ symbol.");
			email.focus();
			return false;
		}
	}
	if (email.value.charAt(i) == ";")
	{
		alert("Email address cannot contain a semicolon.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == ",")
	{
		alert("Email address cannot contain a comma.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == ">")
	{
		alert("Email address cannot contain the > symbol.");
		email.focus();
		return false	
	}
	if (email.value.charAt(i) == "<")
	{
		alert("Email address cannot contain the < symbol.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == ")")
	{
		alert("Email address cannot contain the ) symbol.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == "(")
	{
		alert("Email address cannot contain the ( symbol.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == "*")
	{
		alert("Email address cannot contain the * symbol.");
		email.focus();
		return false;	
	}
	if (email.value.charAt(i) == " ")
	{
		alert("Email address cannot contain spaces.");
		email.focus();
		return false;	
	}
  }
  return true;  //Passed all test!
}

function Is_Valid_Zip(Field_Name, Error_Message)
{
    if  (!_CF_checkzip(Field_Name.value))
    {
    	alert(Error_Message);
		Field_Name.select();
		Field_Name.focus();
		return false;
     }
	 //passed test so..
	 return true;
}

function _CF_checkzip(object_value)
    {
    if (object_value.length == 0)
        return true;
		
    if (object_value.length != 5 && object_value.length != 10)
        return false;

	// make sure first 5 digits are a valid integer
	if (object_value.charAt(0) == "-" || object_value.charAt(0) == "+")
        return false;

	if (!_CF_checkinteger(object_value.substring(0,5)))
		return false;

	if (object_value.length == 5)
		return true;
	
	// make sure

	// check if separator is either a'-' or ' '
	if (object_value.charAt(5) != "-" && object_value.charAt(5) != " ")
        return false;

	// check if last 4 digits are a valid integer
	if (object_value.charAt(6) == "-" || object_value.charAt(6) == "+")
        return false;

	return (_CF_checkinteger(object_value.substring(6,10)));
}
	
function _CF_checknumber(object_value)
{
    //Returns true if value is a number or is NULL
    //otherwise returns false	

    if (object_value.length == 0)
        return true;

    //Returns true if value is a number defined as
    //   having an optional leading + or -.
    //   having at most 1 decimal point.
    //   otherwise containing only the characters 0-9.
	var start_format = " .+-0123456789";
	var number_format = " .0123456789";
	var check_char;
	var decimal = false;
	var trailing_blank = false;
	var digits = false;

    //The first character can be + - .  blank or a digit.
	check_char = start_format.indexOf(object_value.charAt(0))
    //Was it a decimal?
	if (check_char == 1)
	    decimal = true;
	else if (check_char < 1)
		return false;
        
	//Remaining characters can be only . or a digit, but only one decimal.
	for (var i = 1; i < object_value.length; i++)
	{
		check_char = number_format.indexOf(object_value.charAt(i))
		if (check_char < 0)
			return false;
		else if (check_char == 1)
		{
			if (decimal)		// Second decimal.
				return false;
			else
				decimal = true;
		}
		else if (check_char == 0)
		{
			if (decimal || digits)	
				trailing_blank = true;
        // ignore leading blanks

		}
	        else if (trailing_blank)
			return false;
		else
			digits = true;
	}	
    //All tests passed, so...
    return true
}
	
function _CF_checkinteger(object_value)
{
    //Returns true if value is a number or is NULL
    //otherwise returns false	

    if (object_value.length == 0)
        return true;

    //Returns true if value is an integer defined as
    //   having an optional leading + or -.
    //   otherwise containing only the characters 0-9.
	var decimal_format = ".";
	var check_char;

    //The first character can be + -  blank or a digit.
	check_char = object_value.indexOf(decimal_format)
    //Was it a decimal?
    if (check_char < 1)
	return _CF_checknumber(object_value);
    else
	return false;
}
