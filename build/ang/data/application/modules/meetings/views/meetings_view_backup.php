<!DOCTYPE html>
<html lang="en">
<head>
    <base href="<?php echo base_url(); ?>"/>
    <meta charset="utf-8">
    <title>Meetings</title>
      <!-- Bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css" media="screen">  
    <link rel="stylesheet" href="css/bootstrap-responsive.min.css"> 
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
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
      
      
      
      
  </div> 
</div>
  <div class="tab-pane" id="men">
      <div id="table3">
            <?php if(is_array($result3)): ?>
                <table class="table table-striped table-bordered table-condensed">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Symbol</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result3 as $row):?> 

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
  <div class="tab-pane" id="women">
      <div id="table4">
            <?php if(is_array($result4)): ?>
                <table class="table table-striped table-bordered table-condensed">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Symbol</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result4 as $row):?> 

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
    
  <div class="tab-pane" id="glbt">
      <div id="table5">
            <?php if(is_array($result5)): ?>
                <table class="table table-striped table-bordered table-condensed">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Symbol</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($result5 as $row):?> 

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
    
  <div class="tab-pane" id="spanish">
      <div id="table6">
            <?php if(is_array($result6)): ?>
                <table class="table table-striped table-bordered table-condensed">
                     <thead>
                        <tr>
                            <th>Meeting Name</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Building</th>
                            <th>Address</th>
                            <th>Area</th>
                            <th>Zip</th> 
                            <th>Symbol</th> 
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
    
    
</div>
    
    
</div>
    
    
</div>

 


 
</body>
</html>