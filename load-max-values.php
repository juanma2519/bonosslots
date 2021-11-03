<?php

    include_once("db_connect.php");
    $sql="select distinct slots.maxValue from slots order by slots.maxValue";

?>
    <option hidden selected value="maxValue" id="undefined">Máximo</option>
    <option value="maxValue" id="maxValue">Todos</option>
  
<?php

    $resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
    while( $record = mysqli_fetch_assoc($resultset) ) {

?>
    <option value="<?php echo $record['maxValue'];?>" id="<?php echo $record['maxValue'];?>"><?php echo $record['maxValue'];?> €</option>

<?php } ?>