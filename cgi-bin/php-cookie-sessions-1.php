<?php
     $name= $_POST["username"];
    if(!is_null($name)){
        setcookie("username", $name, time() + 86400, "/");
    }
?>
<html>
    <head>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align=center>PHP Sessions Page 1</h1>
        <hr/>

        <p>
            <b>Name:</b>
            <?php
                $username=$_COOKIE['username'];
                if(!is_null($name)){
                    echo $name;
                }else{
                    echo $username;
                }
                
            ?>
        </p>
        <a href="/php-cgiform.html">CGI Form</a><br />
        <a href="/cgi-bin/php-cookie-sessions-2.php">Session Page 2</a>
        <form style="margin-top:30px" action="/cgi-bin/php-destroy-cookie-session.php" method="get">
            <button type="submit">Destroy Session</button>
        </form>
    </body>
</html>