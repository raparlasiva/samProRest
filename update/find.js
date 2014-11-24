function MM_preloadImages() 
{ 
	//v3.0
  	var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function FindAMeetNow(frm) {
	frm.hdnAction.value = 'FindAMeetNow';
	frm.submit();
}

function FindMenOnlyMtg(frm) {
	frm.hdnAction.value = 'menOnly';
	frm.submit();
}

function FindWomenOnlyMtg(frm) {
	frm.hdnAction.value = 'womenOnly';
	frm.submit();
}

function FindBusRouteMtg(frm) {
	frm.hdnAction.value = 'busRoutes';
	frm.submit();
}

function FindSpanishMtg(frm) {
	frm.hdnAction.value = 'spanish';
	frm.submit();
}

function FindGayLesbianMtg(frm) {
	frm.hdnAction.value = 'gayLesbian';
	frm.submit();
}

function MeetingSearch(frm) {
	frm.hdnAction.value = 'MeetingSearch';
	frm.submit();
}