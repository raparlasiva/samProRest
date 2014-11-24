<?php
/*
HTTP_HOST = dev.lookbeforeyouleap.net 
	OR
HTTP_HOST = www.lookbeforeyouleap.net
*/
define('HTTP_HOST', $HTTP_SERVER_VARS['HTTP_HOST']);

function quickLocation($page) {
	return 'Location: http://'.$_SERVER["HTTP_HOST"].'/'.dirname($_SERVER["URL"]).'/'.$page;
}

?>