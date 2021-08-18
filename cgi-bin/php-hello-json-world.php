<html>
<head>
    <title>Hello Json Php World</title>
</head>
<body>
    <?php
        echo "{\"message\":\"Hello World form PHP!\",";
        echo "\"date\":\"Today's date is " . date("Y-m-d") . "\",";
        echo "\"ipAddress\":\"" . $_SERVER['SERVER_ADDR'] . "\"}";
    ?>
</body>
</html>