#Chat with Cats App
An Ionic Example App that lets you chat with some cats.

##Install
1. if you dont have ionic cli installed:
    ````npm install -g ionic
    ````
2. Clone this Repo

    ````npm install
    bower install
    ````

3. Add cordova plugins
    ````cordova plugin add cordova-plugin-camera
    cordova plugin add https://github.com/EddyVerbruggen/cordova-plugin-actionsheet.git`
    ````

3. Test/Preview
    ````gulp watch` - this watches\compiles the scss
    ionic serve --livereload`
    ````

##Features
 - An example of using the camera
 - Working with a few APIs to send and receive data
 - Modified file structure, I prefer to have templates/js in the same folder 
     + in order for Ionic View to work properly app.js needs to be in www/js folder, I havent done the work to overcome that, this structure could be improved but its partially there

