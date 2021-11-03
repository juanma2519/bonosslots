<?php
$servername = "localhost";
$username = "root";
$port = "8080";
$password = "251994";
$dbname = "slots";
$conn = mysqli_connect($servername, $username, $password, $dbname, $port) or die("Connection failed: " . mysqli_connect_error());
?>