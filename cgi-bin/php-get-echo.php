<html>
    <head>
        <title>GET Request Echo</title>
    </head>
    <body>
        <h1 align=center>GET Request Echo</h1>
        <hr/>
        <p>
            <b>Query String:</b> </p>
            <ul>
                <?php
                    foreach($_GET as $key => $value){
                        echo "<li>" . $key . ": " . $value;
                    }
                ?>
            </ul>
    </body>
</html>