<html>
<head>
    <title>Hello PHP World</title>
</head>
<body>
    <h1 align=center>Hello PHP World</h1>
    <hr/>
    <?php
        echo "Hello World from PHP!" . "<br>";
        echo "Today's date is " . date("Y-m-d") . "<br>";
        echo "Your IP address is " . $_SERVER['SERVER_ADDR'];

    ?>
</body>
</html>