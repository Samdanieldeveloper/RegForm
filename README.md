# RegForm
This is register form with the use of HTML, CSS with bootstrap(CSS Framework), JavaScript, Node.js and MongoDB 

# components
this folders requires the components (i.e web pages) for our project with different purposes
    1. Index.html
        Index.html is the primary file and web page to be displayed in our project that has a form which will post the user input

        In each input tag there have name attribute which will helpful to identify with the object key in node.js(refer index.js file) server and user value will be the value for that object

    2. Success.html
        Once the details stored in node.js object and stored in mongoose, the primary webpage moved to success.html. you will see the url box "http://localhost:5009/success"

    3. Error.html
        This webpage will be executed when the user input is not stored in mongoDB usually it will never because we never gave any condition except for email you will see it below

    4. Email.html
        Yes. For Email we gave the condition we all know email is the unique and cannot be duplicate so if the user input of email is already existing then it will show the warning, then after clicking OK in the alert it move towards the primary page. 

# Tools and Properties

    we have used node.js and MongoDb as a tool to store the data. which is present in the index.js file

    1. Index.js
        This file contains the server side scripting that will make run under live server (Localhost) and save the user input which the user typed in the primary web page. 

        we have used express, body-parser, mongoose, {fileURLToPath}, {dirname} in the node.js the tools between curly braces are specific function in the folder rather others are the folder itself

        express is the folder of npm packages and is the easy way to create the server it the function of its name itself we save it in the constant app in the line 10. use property is also from express folder

        body-parser is the folder of npm packages that will format the details to json format so it will be stored in mongoDB and also easy to transfer within files and change the url that will able to store the data. Refer line 13 in index.js

        {fileURlToPath} and {dirname} is the functions of the folder url and path that will used to retrive the fileurl to path which is needed for us and dirname function will be used to get the filepath directory which is needed for us as for example the fileURL will be like "//file:/directory/index.js"
        converting it into path with the help of (fileURLToPath()) will be like /"directory/index.js" and using dirname() will be like "/directory". refer line 9 and 10