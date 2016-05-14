# Typescript-Express-Server
Example Express Server using Typescript which can be deployed via Heroku

##Difference from deploying normal nodejs app in Heroku
* Install typescript, typings via npm
* Install required typings (node, express in this case)

Microsoft guide : https://code.visualstudio.com/docs/runtimes/nodejs#_typings

`typings install node --ambient`

`typings install express serve-static express-serve-static-core --ambient`

* Add a reference to the main typings file (something.d.ts) in index.ts
* Create Procfile which asks to run tsc command (to create corresponding .js file wherever specified) and start node
