Our auto deployment uses post receieve hook. When we edit our code and push to our repository, the server code doesn't get updated, so nothings will be made on the actual site.
WE created a repository using --bare flag so that it only consists of version control information, not our code base. We stored this repository in var folder in the server. Once we
feel comfortable with our code, we can then just git push prod master, it will triger the post receive hook, which then pull the changes from the repository to the production server.

login info:grader
passward:cse135

To change the server header, I first install Apache mod_security module and mod_headers module, and then I opened Apache.conf, and added
ServerTokens Full
SecServerSignature "CSE135 Server", and the name will be changed after I restart the server using sudo systemctl restart apache2