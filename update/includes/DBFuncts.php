<?php
function db_connect()
{

	//$result = mysql_pconnect('MySQL6.webcontrolcenter.com', 'billw', 'igr1849');
	$result = mysql_pconnect('aameet.db.11109601.hostedresource.com', 'aameet', 'Mouse@769');

	if (!$result)
	{
		return false;
	}

	if (!mysql_select_db('aameet'))
	{
		return false;
	}
	
	return $result;
}
?>
