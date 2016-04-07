# desktop-rhino

Create cross platform desktop applications with server side scripting languages.

Desktop Rhino instantly converts NW.js applications into server side desktop applications. 

By utilizing NW.js' ability to call Node.js scripts from the DOM, Desktop Rhino's core functionality is written purely in javascript!



GETTING STARTED (PHP Version)

1) Downlaod NW.js 12.3 here - http://dl.nwjs.io/v0.12.3/ (Latest version currently being tested)

2) Unzip your file and place it into a destination with no spacing in it's path 

   i.e., C:/users/johnsmith but not C:/users/john smith
   

3) Open Node.js command line and navigate inside the NW.js directory and run 

     npm install --save desktoprhino
   
   This adds an index.html, index.php, package.json, bin folder, app folder and index.php within the app folder to your directory

4) Download your required php version and add it to the bin folder with the path to the executable being - bin/php
  
  Recommended Download Sites
    
    Windows - http://windows.php.net/download/
     
    Mac OSX - http://php-osx.liip.ch/ (Macs come with php pre-installed and if your version is PHP 5.4+ you can skip this step)
     


     
5) If you are on Windows you are done, just start the application and enjoy! 

   If you are on Mac OSX edit the index.html fileand change server.serverup() to...

        
     server.macinternal();  # for mac php pre-built 
     server.macserver();    # for executable in bin folder


Your are now ready to begin running PHP programs as ordinary desktop applications. 
Refer to NW.js documentation - http://docs.nwjs.io/en/latest/



HOW IT WORKS 

Desktop Rhino searches the users machine for available ports beginning at port 8000 at atartup. It then launches PHP's built in web server (with the avialbale port) as a child process of NW.js using Node. 

Rhino utlizes 3 simple commands 

This starts a php server on windows from the bin folder.

     server.winserver();

This starts a php server by accessing OSX's pre-packaged php executable.

     server.macinternal();

This starts a php server on OSX from the bin folder.

     server.macserver(); 

Change path or server

If you'd like to change your server to a python server for instance, go to node_modules/desktoprhino/desktoprhino.js and edit th exec command. You can also redirect the path to your server here as well.  



WHY DESKTOP RHINO?

Scalable & Non-Obtrusive

 Since Desktop Rhino is not bound to a single port or a randomly selected port, you can rest assured users can have many   
 Rhinos running on their machine without any port conflicts.

Anti-Racing

  Desktop Rhino does a great job at preventing port racing in normal use case. Users can go click crazy on rhino and each window will   open within it's appropriate port. If the machine freezes during startup, it is possible for 2 windows to open with the same port     number, however each windows will have it's own server instance eliminating any conflict.
  
Single CodeBase 

  Give users offline access to web apps with minimal to no alterations to your code. PHP and other scripting languages may not be the   best choice for desktop software but then again neither is javascript, css or html but they've proven to be highly effective at the   task. With PHP 7's improved speed being compared with HHVM and modern websites providing desktop lile services, it becomes clear PHP   and other web scripting languages should be considered in the modern software development landscape.
  
Interchangeable Server

  You are not bound to using php server or scripting language. You can easily swap servers and scripting languages quickly. 
  
  
  
KNOWN ISSUES

As of 4/6/2016 tested on 

Windows -  10 - ia32 & x64,
           7  - ia32 & x64 
           
Mac OSX -  10.11 - x64,
           10.10 - x64,
           10.7  - x64

Bugs on...

Mac OSX

1)Currently child process does not end with killall command form terminal. This can be resolved by renaming php executable to the same   name as parent process, i.e., your app name. This is not resolvable when running pre-packaged php. 

2)Single instance seems to remain in default despite be set to false. May be an issue with NW.js but currently investigating. 

Windows
No known issues
