<?php

    include_once("db_connect.php");
    $sql="select distinct slots.minValue from slots order by slots.minValue";

?>
    <option hidden selected value="minValue" id="undefined">minValue</option>
    <option value="minValue" id="minValue">Todos</option>
  
<?php

    $resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
    while( $record = mysqli_fetch_assoc($resultset) ) {

?>
    <option value="<?php echo $record['minValue'];?>" id="<?php echo $record['minValue'];?>"><?php echo $record['minValue'];?></option>

<?php } ?>