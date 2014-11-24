function HideMeet(frm)
{
    if (confirm('Are you sure you want to hide this meeting?'))
	{
		frm.action = 'HideMeetAction.php';
		frm.submit();
	}
}

function DeleteMeet(frm)
{
    if (confirm('Are you sure you want to Delete the:\n\n' + 
					frm.selMeetId.options[frm.selMeetId.selectedIndex].text + '\n\n' +
					'meeting?'))
	{
		frm.action = 'DeleteMeetAction.php';
		frm.submit();
	}
}