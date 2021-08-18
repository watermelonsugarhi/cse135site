<html>
    <head>
        <title>PHP Sessions</title>
    </head>
    <body>
        <h1 align=center>PHP Sessions Page 2</h1>
        <hr/>
        <?php
            session_start();
            $id=$_GET["PHPSESSID"];
            echo "<p><b>Name:</b>";
            if (isset($_SESSION[$id])&&isset($_SESSION["username"])){
                echo $_SESSION["username"];
            }else{
                echo "You do not have a name set";
            }
            echo "</p><a href=\"/php-cgiform.html?PHPSESSID=" . $id . "\">CGI Form</a><br />";
            echo " <a href=\"/cgi-bin/php-URL-sessions-1.php?PHPSESSID=" . $id . "\">Session Page 1</a>";
        ?>
        <form style="margin-top:30px" action="/cgi-bin/php-destroy-URL-session.php" method="get">
            <?php
                echo "<input type=\"hidden\" name=\"PHPSESSID\" value=\"" . $id . "\" />";
            ?>
            <button type="submit">Destroy Session</button>
        </form>
    </body>
</html>