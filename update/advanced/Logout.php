<?php
session_start();
unset($_SESSION['password']);
print '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">';
print '<html><head></head><body>';
print '<br><br><p align="center"><b>You are logged out. <a href="index.php">Click here to log in.</a></p>';
print '<BR></body></html>';
exit;
?>
