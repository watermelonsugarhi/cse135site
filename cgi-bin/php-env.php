<html>
    <head>
        <title>
            Environment Variables
        </title>

    <style>
        h2:not(:first-of-type) {
            margin-top: 30px;
        }

        li:not(:first-of-type) {
            margin-top: 8px;
        }
    </style>
    </head>
    <body>
        
        <h1 align=center>
            Environment Variables
        </h1>
        
        <hr/>
        
        <ul>
            <?php
                $_ENV=getenv();
                echo "<h2>Environment Variables:</h2>";
                foreach($_ENV as $key => $val){
                    echo "<li><b>" . $key . "</b>: " . $val . "</li>";
                }
                echo "<h2>Server Variables</h2>";
                foreach($_SERVER as $key => $val){
                    echo "<li><b>" . $key . "</b>: " . $val . "</li>";
                }
            ?>
        </ul>
    </body>
</html>
