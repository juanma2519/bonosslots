<?php

    include_once("db_connect.php");
    $sql="select * from slots WHERE 1=1";
    if ($_GET['slot-name'] && $_GET['slot-name'] != 'undefined' ) $sql .= " AND name like '%".$_GET['slot-name']."%'";
    $provider = $_GET['provider'];
    $volatility = $_GET['volatility'];
    $minValue = $_GET['minValue'];
    $maxValue = $_GET['maxValue'];
    $init = $_GET['init'];

    if ($provider && $provider != "proveedores" && $provider != "undefined") $sql .= " AND provider = '$provider'";
    if ($volatility && $volatility != "volatilidad" && $volatility != "undefined") $sql .= " AND volatility = '$volatility'";
    if ($minValue && $minValue != "minValue" && $minValue != "undefined") $sql .= " AND slots.minValue = '$minValue'";
    if ($maxValue && $maxValue != "maxValue" && $maxValue != "undefined") $sql .= " AND slots.maxValue = '$maxValue'";
    if ($init && $init != "undefined" && $init === "true") $sql .= " LIMIT 10";

              
    $resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
    if($init && $init != "undefined" && $init === "true"){
        $init = "false";
    }

    while( $slot = mysqli_fetch_assoc($resultset) ) {
    ?>
    <article class="cubo">
    <?php
                        if( $slot['activeSlot'] == 1){
                            echo '<a href="'.$slot['website'].'" title="'.$slot['name'].'" target="_blank" rel="nofollow" title="'.$slot['name'].'">';
                       
                       }else if ( $slot['activeSlot'] == 0 ){
                            echo '<a title="'.$slot['name'].'" rel="nofollow">';
                       }
                       ?>
            <img alt="" onerror="this.onerror=null; this.src='https://bonosslots.online/images/slots/slot-no-disponible.png'" src="<?php echo $slot['image'];?>" width="339" height="180" title="<?php echo $slot['name'];?>" alt="<?php echo $slot['name'];?>"/>
            <div class="card-body info">
                <p class="card-title"><?php echo $slot['name']; ?></p>
            <div class="cubo-description">
                <p class='titulo3'>APUESTA
                    <br>
                    <span><?php echo $slot['minValue']; ?>€ -</span>
                    <span><?php echo $slot['maxValue']; ?>€</span>
                </p>
                <p class='titulo3'>RTP
                    <br>
                    <span><?php echo $slot['rtp']; ?>%</span>
                </p>
                <p class='titulo3'>VOLATILIDAD
                    <br>
                    <?php
                    for ($i = 1; $i <= 5; $i++) {
                        if($i <= $slot['volatility']){
                            echo '<span class="fa fa-star checked"></span>';
                           }else{
                            echo '<span class="fa fa-star"></span>';
                           }
                    }
                    ?>
                </p>
            </div>
            <?php
                       if( $slot['activeSlot'] == true){
                        echo '<p class="boton">Reseña</p><div class="desc"><a target="_blank" href="'.$slot["website"].'"></a></div>';
                       
                       }else if ( $slot['activeSlot'] == false ){
                        echo '<p class="boton">Próximamente</p><div class="desc"></div>'; 
                       }
                    ?>
                
            </div>
        </a>
  </article>

            <?php } ?>
