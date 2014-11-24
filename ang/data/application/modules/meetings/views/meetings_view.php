<!DOCTYPE html>
<html lang="en">
<head>
   <base href="<?php echo base_url(); ?>"/>
    <meta charset="utf-8">
    <title>Meetings</title>
    
    <link rel="stylesheet" href="css/table.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" media="screen">  
    <link rel="stylesheet" href="css/TableTools.css">
    <link rel="stylesheet" href="css/DT_bootstrap.css">
    
    <!---------- Bootstrap Modal CSS ----------------->
    <link href="css/bootstrap-modal.css" rel="stylesheet" /> 
    <script src="js/jquery.js"></script>
    <script src="js/jquery.dataTables.js"></script>
    <script src="js/TableTools.js"></script>
    <script src="js/ZeroClipboard.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/DT_bootstrap.js"></script>
    
     <!------------ Bootstrap Modal JS ------------->
    <script src="js/bootstrap-modalmanager.js"></script>
    <script src="js/bootstrap-modal.js"></script>
    
    <!------------ google Maps API ------------->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGZD6GOVuDxcrL2tm-JrVPknAk6SCkQvM&sensor=false"></script>
    
    <script src="js/meetingModule.js"></script>
    <style>

/*        #customMap {
            width: 400px;
            height: 200px;
        }*/
    </style>
</head>
 
<body>

<?//php print_r($result)?>
    
    
<ul class="nav nav-tabs" id="myTab">
  <li class="active"><a href="#all" data-toggle="tab">Search</a></li>
  <li><a href="#next5" data-toggle="tab">Next 5 Hours</a></li>
  <li><a href="#men" data-toggle="tab">Men Only</a></li>
  <li><a href="#women" data-toggle="tab">Women Only</a></li>
  <li><a href="#glbt" data-toggle="tab">GLBT</a></li>
  <li><a href="#spanish" data-toggle="tab">Spanish</a></li>
</ul>
 
<div class="tab-content">
  <div class="tab-pane active" id="all">
      <div class="container-fluid">
       
        <div id="advancedfind"class="well well-small">

                  <div id="dayselect" class="input-prepend">
                    <div class="btn-group">
                          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            Day
                            <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu">
                              <li><a href="#">All Days</a></li>
                              <li class="divider"></li>
                              <li><a href="#">Sunday</a></li>
                              <li><a href="#">Monday</a></li>
                              <li><a href="#">Tuesday</a></li>
                              <li><a href="#">Wednesday</a></li>
                              <li><a href="#">Thursday</a></li>
                              <li><a href="#">Friday</a></li>
                              <li><a href="#">Saturday</a></li>
                          </ul>
                     </div>
                    <input class="input-mini" id="dayinput" type="text">
                </div>
                  <div id="areaselect" class="input-prepend">
                         <div class="btn-group">
                              <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                                Area of Town
                                <span class="caret"></span>
                              </a>
                              <ul class="dropdown-menu">
                                  <li><a href="#">All Areas</a></li>
                                  <li class="divider"></li>
                                  <li><a href="#">INDPLS-East</a></li>
                                  <li><a href="#">INDPLS-Midtown</a></li>
                                  <li><a href="#">INDPLS-North</a></li>
                                  <li><a href="#">INDPLS-South</a></li>
                                  <li><a href="#">INDPLS-West</a></li>
                                  <li><a href="#">N-Carmel</a></li>
                                  <li><a href="#">N-Fishers</a></li>
                                  <li><a href="#">N-Lebanon</a></li>
                                  <li><a href="#">N-Noblesville</a></li>
                                  <li><a href="#">N-Thorntown</a></li>
                                  <li><a href="#">N-Westfield</a></li>
                                  <li><a href="#">N-Zionsville</a></li>
                                  <li><a href="#">S-Beech Grove</a></li>
                                  <li><a href="#">S-Centerton</a></li>
                                  <li><a href="#">S-Edinburgh</a></li>
                                  <li><a href="#">S-Franklin</a></li>
                                  <li><a href="#">S-Greenwood</a></li>
                                  <li><a href="#">S-Martinsville</a></li>
                                  <li><a href="#">S-Nashville</a></li>
                                  <li><a href="#">S-Nineveh</a></li>
                                  <li><a href="#">S-Shelbyville</a></li>
                                  <li><a href="#">E-Fortville</a></li>
                                  <li><a href="#">E-Greenfield</a></li>
                                  <li><a href="#">E-Lawrence</a></li>
                                  <li><a href="#">E-New Palestine</a></li>
                                  <li><a href="#">W-Avon</a></li>
                                  <li><a href="#">W-Brownsburg</a></li>
                                  <li><a href="#">W-Cloverdale</a></li>
                                  <li><a href="#">W-Danville</a></li>
                                  <li><a href="#">W-Mooresville</a></li>
                                  <li><a href="#">W-Pittsboro</a></li>
                                  <li><a href="#">W-Plainfield</a></li>
                              </ul>
                         </div>
                       <input class="span2" id="areainput" type="text">
                  </div>
                   <div id="typeselect" class="input-prepend .hidden-phone">
                         <div class="btn-group">
                              <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                                Type
                                <span class="caret"></span>
                              </a>
                              <ul class="dropdown-menu">
                                  <li><a href="#">All Types</a></li>
                                  <li class="divider"></li>
                                  <?php echo $result7;?>
 
                              </ul>
                         </div>
                       <input class="span2" id="typeinput" type="text">
                  </div>

              <div id="busselect" class="input-prepend .hidden-phone">
                     <div class="btn-group">
                          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            Bus Routes
                            <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu">
                              <li><a href="#">All</a></li>
                              <li class="divider"></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li><a href="#">4</a></li>
                              <li><a href="#">5</a></li>
                              <li><a href="#">8</a></li>
                              <li><a href="#">10</a></li>
                              <li><a href="#">11</a></li>
                              <li><a href="#">12</a></li>
                              <li><a href="#">14</a></li>
                              <li><a href="#">15</a></li>
                              <li><a href="#">16</a></li>
                              <li><a href="#">17</a></li>
                              <li><a href="#">18</a></li>
                              <li><a href="#">19</a></li>
                              <li><a href="#">21</a></li>
                              <li><a href="#">22</a></li>
                              <li><a href="#">24</a></li>
                              <li><a href="#">25</a></li>
                              <li><a href="#">26</a></li>
                              <li><a href="#">28</a></li>
                              <li><a href="#">31</a></li>
                              <li><a href="#">34</a></li>
                              <li><a href="#">38</a></li>
                              <li><a href="#">39</a></li>
                          </ul>
                     </div>
                 <input class="span1" id="meetingtype" type="text">
                 <a class="btn" id="reset" href="#">Reset <i class="icon-remove"></i></a> 
              </div>   
			  		
        </div>    
    <span id="dataTable-wrapper">
        <div style="margin-top: 10px">
            <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered table-hover" id="mytable" >
                <thead>
                    <tr>
                        <th>Meeting ID</th>
                        <th>Name</th>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Building</th>
                        <th>Address</th>
                        <th>Area</th>
                        <th>Zip</th>
                        <th>Type</th>
                        <th>Bus</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>DayId</th>
                        <th>MeetTime</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="cursor: pointer;">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </span>
      
      
      
  </div> 
</div>
  <div class="tab-pane" id="next5">
      <div id="table3">
            <?php if(is_array($result2)): ?>
                <table class="table table-striped table-bordered table-hover showmap">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Type</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result2 as $row):?> 

                                <tr recordid="<?php echo$row->MeetingId; ?>">
                                    <td><?php echo$row->MeetingName;?></td>
                                    <td><?php echo $row->Day; ?></td>
                                    <td><?php echo date('h:i a',strtotime($row->MeetTime)); ?></td>
                                    <td><?php echo $row->BuildingName; ?></td>
                                    <td><?php echo $row->Address; ?></td>
                                    <td><?php echo $row->Area; ?></td>
                                    <td><?php echo $row->Zip; ?></td>
                                    <td><?php echo $row->Symbol; ?></td>
                                </tr>
                         <?php endforeach;?> 
                    </tbody>
                </table>
            <?php endif; ?>
        </div> <!--Close Table-->
      
  </div>
  <div class="tab-pane" id="men">
      <div id="table3">
            <?php if(is_array($result3)): ?>
                <table class="table table-striped table-bordered table-hover showmap">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Type</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result3 as $row):?> 

                                <tr recordid="<?php echo$row->MeetingId;?>">
                                    <td><?php echo $row->MeetingName;?></td>
                                    <td><?php echo $row->Day; ?></td>
                                    <td><?php echo date('h:i a',strtotime($row->MeetTime)); ?></td>
                                    <td><?php echo $row->BuildingName; ?></td>
                                    <td><?php echo $row->Address; ?></td>
                                    <td><?php echo $row->Area; ?></td>
                                    <td><?php echo $row->Zip; ?></td>
                                    <td><?php echo $row->Symbol; ?></td>
                                </tr>
                         <?php endforeach;?> 
                    </tbody>
                </table>
            <?php endif; ?>
        </div> <!--Close Table-->
      
  </div>
  <div class="tab-pane" id="women">
      <div id="table4">
            <?php if(is_array($result4)): ?>
                <table class="table table-striped table-bordered table-hover showmap">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Type</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result4 as $row):?> 

                                <tr recordid="<?php echo$row->MeetingId;?>">
                                    <td><?php echo $row->MeetingName;?></td>
                                    <td><?php echo $row->Day; ?></td>
                                    <td><?php echo date('h:i a',strtotime($row->MeetTime)); ?></td>
                                    <td><?php echo $row->BuildingName; ?></td>
                                    <td><?php echo $row->Address; ?></td>
                                    <td><?php echo $row->Area; ?></td>
                                    <td><?php echo $row->Zip; ?></td>
                                    <td><?php echo $row->Symbol; ?></td>
                                </tr>
                         <?php endforeach;?> 
                    </tbody>
                </table>
            <?php endif; ?>
        </div> <!--Close Table-->
      
  </div>
    
  <div class="tab-pane" id="glbt">
      <div id="table5">
            <?php if(is_array($result5)): ?>
                <table class="table table-striped table-bordered table-hover showmap">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Type</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result5 as $row):?> 

                                <tr recordid="<?php echo$row->MeetingId;?>">
                                    <td><?php echo $row->MeetingName;?></td>
                                    <td><?php echo $row->Day; ?></td>
                                    <td><?php echo date('h:i a',strtotime($row->MeetTime)); ?></td>
                                    <td><?php echo $row->BuildingName; ?></td>
                                    <td><?php echo $row->Address; ?></td>
                                    <td><?php echo $row->Area; ?></td>
                                    <td><?php echo $row->Zip; ?></td>
                                    <td><?php echo $row->Symbol; ?></td>
                                </tr>
                         <?php endforeach;?> 
                    </tbody>
                </table>
            <?php endif; ?>
        </div> <!--Close Table-->
      
  </div>
    
  <div class="tab-pane" id="spanish">
      <div id="table6">
            <?php if(is_array($result6)): ?>
                <table class="table table-striped table-bordered table-hover showmap">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Type</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result6 as $row):?> 

                                <tr>
                                    <td><?php echo anchor("order/find/$row->MeetingId", $row->MeetingName);?></td>
                                    <td><?php echo $row->Day; ?></td>
                                    <td><?php echo date('h:i a',strtotime($row->MeetTime)); ?></td>
                                    <td><?php echo $row->BuildingName; ?></td>
                                    <td><?php echo $row->Address; ?></td>
                                    <td><?php echo $row->Area; ?></td>
                                    <td><?php echo $row->Zip; ?></td>
                                    <td><?php echo $row->Symbol; ?></td>
                                </tr>
                         <?php endforeach;?> 
                    </tbody>
                </table>
            <?php endif; ?>
        </div> <!--Close Table-->
      
  </div>
    

      
  </div>
    
    
    <div id="responsive" class="modal hide"  data-width="560">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3 id="modalCustomHeading">Responsive</h3>
        </div>
        <div class="modal-body">
            <div class="row-fluid">
                <div class="span4">
                    <address>
                        <strong id="modalDayTime"></strong>
                    </address>
                    
                    <address id="modalMeetingNameAddAreaZip">
                       
                        
                    </address>
                    
                    <address id="modalMeetingTypeSymbol">
                        
                    </address>
                    <div id="directionsMessage">
                        
                    </div>
                    
                </div>
                <div class="span8">
                    <div id="customMap">
                        
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div class="modal-footer">
             <button type="button" data-dismiss="modal" class="btn btn-primary">Close</button>
<!--          <button type="button" data-dismiss="modal" class="btn">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>-->
        </div>
    
    </div>
        <div id="mtmodal" class="modal hide"  data-width="560">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h3>Meeting Types</h3>
        </div>
        <div class="modal-body">
            <div class="row-fluid">
                <div class="span12">
                    <dl class="dl-horizontal">
                      <dt>C</dt>
                      <dd>Closed Meeeting (For Alcoholics Only)</dd>
                      <dt>O</dt>
                      <dd>Open Meeting (Anyone May Attend)</dd>
                      <dt>D</dt>
                      <dd>Discussion Meeting (Topic Selected and Discussed Amongst Group</dd>
                      <dt>S</dt>
                      <dd>Speaker Meeting (1 or 2 People Share Their Story)</dd>
                      <dt>Lit</dt>
                      <dd>Literature Meeting (AA Literature Studied and Discussed)</dd>
                      <dt>D/S</dt>
                      <dd>Discussion and Speaker Meeting</dd>
                      <dt>NS</dt>
                      <dd>Non Smoking Meeting</dd>
                      <dt>M</dt>
                      <dd>Men's Meeting</dd>
                      <dt>W</dt>
                      <dd>Women's Meeting</dd>
                      <dt>YP</dt>
                      <dd>Young People</dd>
                      <dt>***</dt>
                      <dd>Gay and Lesbian</dd>
                      <dt>WCA</dt>
                      <dd>Wheel Chair Accessible</dd>
                      <dt>AFG</dt>
                      <dd>Alanon Same Location</dd>
                      <dt>ATN</dt>
                      <dd>Alateen Same Location</dd>
                      <dt>ASL</dt>
                      <dd>American Sign Language</dd>
                    </dl>
            </div>
            
        </div>
        <div class="modal-footer">
             <button type="button" data-dismiss="modal" class="btn btn-primary">Close</button>
<!--          <button type="button" data-dismiss="modal" class="btn">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>-->
        </div>
    </div>

 


 
</body>
</html>
