# Docker-File-For-Nodejs-Application
Hello, i have created a dockerfile for node js application.  



Prerequisite-
  
You have to install Docker in system you can reffer to the link below for installation 


    https://docs.docker.com/engine/install/
    
Process - 

  1 - You need to pull the image form docker hub to pull the image from docker hub -			
  		
		
		$docker pull lakshaymaheshwari88/nodejs:0.0.1.RELEASE
		
  2 - After pulling you can the Container using image that is pulled(you can change port) -
  
  		$docker container run -d -p 3000:3000 lakshaymaheshwari88/nodejs:0.0.1.RELEASE
		

If you want to create your own image then you can clone the repo in your system then using Dockerfile code you can create a NodeJs Image of your application. 

  1 To clone the repo -
		
		https://github.com/lakshay88/Docker-File-For-Nodejs-Application.git
	
  2 Then copy the Dockerfile in your NodeJs working dir and run the command -
		
		$docker build -t "Your Tag" .
  this will create a docker image in your system. You can check the created image by -
	
		$docker images 
