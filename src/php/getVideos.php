<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Assuming you have a database connection established
$connection = mysqli_connect("localhost", "root", "", "mediav1");
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve videos from the database
$sql = "SELECT v.id, CONCAT('http://localhost/mediareact/src/php/', v.file_location) AS file_location, CONCAT('http://localhost/mediareact/src/php/', v.thumbnail_location) AS thumbnail, v.video_title, u.username AS user, c.category_name AS category, t.tag_name AS tag
        FROM videos v
        INNER JOIN users u ON v.user_id = u.id
        INNER JOIN categories c ON v.category_id = c.id
        INNER JOIN tags t ON v.tag_id = t.id";
$result = mysqli_query($connection, $sql);

$videos = array();
while ($row = mysqli_fetch_assoc($result)) {
    $videos[] = $row;
}

// Return videos as JSON response
echo json_encode($videos);

mysqli_close($connection);
?>
