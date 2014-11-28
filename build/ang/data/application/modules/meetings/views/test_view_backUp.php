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
      <div id="table3">
            <?php if(is_array($result)): ?>
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
                        <?php foreach($result as $row):?> 

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
        </div> <!--Close Table 3-->
 
      
  </div>
</div>

 


 
</body>
</html>