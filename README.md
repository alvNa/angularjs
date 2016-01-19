# nga-tasks - Gulp tasks for nga
===========
Node tasks implemented with gulp task runner. For locally insted of install the nodejs artifact in a repository (like Nexus), go to the directory and write 

- npm link


# nga-ui - Angular architecture
========
Examples of some angular core services and componets. The intention is to show how reuse code from an app module with bower. At the same time this module uses the tasks implemented in nga-tasks. For using them locally you should go to the nga-ui project and write

- npm link nga-tasks


# nga-app-generator - Node generator with slush (based in gulp)
===================
http://slushjs.github.io/generators/
http://thejackalofjavascript.com/building-slush-generator/

To create the generator using slush you have to install slush 

- Windows --> npm i -g gulp slush slush-generator 
- Mac --> sudo npm i -g gulp slush slush-generator

and write this commands to scafold a new slush project

- slush slush generator

and fill the properties asked. For testing it locally

- [sudo] npm link

Create another directory anywhere and create the app with the name of your generator filled before. In this case

- slush nga-app-generator


# my-app - App example using nga bower module
========
Simple example to show how lo develop an angular app using the angular architecture defined in nga-ui.

Use gulp commnads to handle the app. To show the commands type
gulp help
