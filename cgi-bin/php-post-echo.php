<html>
    <head>
        <title>POST Request Echo</title>
    </head>
    <body>
        <h1 align=center>POST Request Echo</h1>
        <hr/>
        <p>
            <b>Message Body:</b> 
        </p>

            <ul>
                <?php
                    foreach($_POST as $key => $value){
                        echo "<li>" . $key . ": " . $value;
                    }
                ?>
            </ul>
    </body>
</html>