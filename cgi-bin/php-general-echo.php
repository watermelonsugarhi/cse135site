
<html>
    <head>
        <title>General Request Echo</title>
    </head>
    <body>
        <h1 align="center">General Request Echo</h1>
        <hr/>
        <?php
            echo "<p> <b>Request Method:</b>" . $_SERVER[REQUEST_METHOD] . "</p>";
            echo "<p> <b>Protocol:</b>" . $_SERVER[SERVER_PROTOCOL] . "</p>";
            echo "<p> <b>Query:</b>" . $_SERVER[QUERY_STRING] . "</p>";
            echo "<p> <b>Message Body:</b></p>";   
        ?>
         <ul>
        <?php
            foreach($_POST as $key => $value){
                echo "<li>" . $key . ": " . $value;
            }
        ?>
        </ul>

    </body>
</html>