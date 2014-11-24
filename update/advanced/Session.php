<?php
session_start();
$password="44aa44";

if (!empty($_SESSION['password']) && $_SESSION['password']==$password) {
	// do nothing, the user is authenticated

} else if (isset($_POST["password"]) && ($_POST["password"]==$password)) {
	// the user just submitted the form and the password is correct
	$_SESSION['password'] = $password;

} else if (isset($_POST["password"]) && ($_POST["password"]!=$password)) {
	// the user just submitted the form and the password is incorrect
	unset($_SESSION['password']);
	print '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">';
	print '<html><head></head><body>';
	print "<p align=\"center\"><font color=\"red\"><b>Incorrect Password</b><br>Please enter the correct password</font></p>";
	print "<form method=\"post\"><p align=\"center\">Please enter your password for access<br>";
	print "<input name=\"password\" type=\"password\" size=\"25\" maxlength=\"10\"><input value=\"Login\" type=\"submit\"></p></form>";
	print '<BR></body></html>';
	exit;
} else {

	print '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">';
	print '<html><head></head><body>';
	print "<form method=\"post\"><p align=\"center\">Please enter your password for access<br>";
	print "<input name=\"password\" type=\"password\" size=\"25\" maxlength=\"10\"><input value=\"Login\" type=\"submit\"></p></form>";
	print '<BR></body></html>';
	exit;
}
?>

