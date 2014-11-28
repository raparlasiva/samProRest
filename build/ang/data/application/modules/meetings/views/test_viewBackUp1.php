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
    <script src="js/jquery.js"></script>
    <script src="js/jquery.dataTables.js"></script>
    <script src="js/TableTools.js"></script>
    <script src="js/ZeroClipboard.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/DT_bootstrap.js"></script>
    <script src="js/meetingModule.js"></script>
</head>
<body>
    <d  iv class="container-fluid">
     
        <div class="well well-small">

                  <div id="dayselect" class="input-prepend">
                    <div class="btn-group">
                          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                            Day of Week
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
                    <input class="span2" id="dayinput" type="text">
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
              <div id="busselect" class="input-prepend">
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
                 <input class="span1" id="businput" type="text">
                 <a class="btn" id="reset" href="#">Reset <i class="icon-remove"></i></a> 
              </div>  
        </div>   
   </div>    
    <span id="dataTable-wrapper">
        <div style="margin-top: 10px">
            <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="mytable" >
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
                        <th>Symbol</th>
                        <th>Bus</th>
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
                    </tr>
                </tbody>
            </table>
        </div>
    </span>
    <div id="myModalEditBtn" class="modal hide fade">
        <div class="modal-header">
             <h3 id="modalCustomHeadingDataTable">Custome Heading</h3>
        </div>
        <div class="modal-body">
            <section class="row-fluid">
                
            </section>
        </div>
        <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                <button type="submit" id="validateModalMeeting" class="btn btn-primary btnlarge" >Save</button>
        </div>
    </div>
  </div>
</body>
</html>