<?php
    session_start();
    $name = $_POST["username"];
    $id= $_GET["PHPSESSID"];
    if(!is_null($name)){
        session_unset();
        session_destroy();
        session_start();
        $id=session_id();
        $_SESSION["username"]=$name;
        $_SESSION[$id]=1;
    }
?>
<html>
    <head>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align=center>PHP Sessions Page 1</h1>
        <hr/>
        
        <?php
            echo "<p><b>Name:</b>";
            if(!is_null($name)){
                echo $name;
            }else if (isset($_SESSION[$id])&&isset($_SESSION["username"])){
                echo $_SESSION["username"];
            }else{
                echo "You do not have a name set";
            }
            echo "</p><a href=\"/php-cgiform.html?PHPSESSID=" . $id . "\">CGI Form</a><br />";
            echo " <a href=\"/cgi-bin/php-URL-sessions-2.php?PHPSESSID=" . $id . "\">Session Page 2</a>";
        ?>
        <form style="margin-top:30px" action="/cgi-bin/php-destroy-URL-session.php" method="get">
            <?php
                echo "<input type=\"hidden\" name=\"PHPSESSID\" value=\"" . $id . "\" />";
            ?>
            <button type="submit">Destroy Session</button>
        </form>
        
        
    </body>
</html>