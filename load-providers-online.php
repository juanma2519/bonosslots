<?php

    include_once("db_connect.php");
    $sql="select * from providers WHERE 1=1";
    $resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
    while( $record = mysqli_fetch_assoc($resultset) ) {
    ?>
    <article class="cubo">
        <a href="<?php echo $record['website']; ?>" title="<?php echo $record['name']; ?>" target='_blank' rel='nofollow'>
            <img alt="" src="<?php echo $record['image'];?>" width="339">
            <div class="card-body info">
                <p class="card-title"><?php echo $record['name']; ?></p>
            <div class="cubo-description">
                <p class='titulo3'>Desde
                    <br>
                    <span><?php echo $record['year']; ?></span>
                </p>
                <p class='titulo3'>Pais
                    <br>
                    <span><?php echo $record['state']; ?></span>
                </p>
                <p class='titulo3'>SLOTS
                    <br>
                    <span>+ <?php echo $record['slots']; ?></span>
                </p>
            </div>
            <p class='boton'>Reseña</p>
                <div class="desc"> <a target="_blank" href="<?php echo $record['website']; ?>"></a></div>
            </div>
        </a>
    </article>

            <?php } ?>
