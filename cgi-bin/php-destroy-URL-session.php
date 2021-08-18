<?php   
        session_start();
        session_unset();
        session_destroy();
    
?>
<html>
    <head>
        <title>PHP Session Destroyed</title>
    </head>
    <body>
        <h1>Session Destroyed</h1>
        <a href="/php-cgiform.html">Back to the CGI Form</a>
        <br />
        <a href="/cgi-bin/php-URL-sessions-1.php">Back to Page 1</a>
        <br />
        <a href="/cgi-bin/php-URL-sessions-2.php">Back to Page 2</a>
    </body>
</html>