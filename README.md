# Typescript-Express-Server
Example Express Server using Typescript which can be deployed via Heroku

##Difference from deploying normal nodejs app in Heroku
* Install typescript, typings via npm
* Init typings

`typings init`

This will create a typings.json that contains dependancies.

* Install required typings (node, express in this case)

Microsoft guide : https://code.visualstudio.com/docs/runtimes/nodejs#_typings

`typings install node --ambient --save`

`typings install express serve-static express-serve-static-core --ambient --save`

`typings install mime --ambient --save`

Dependencies will be added to typings.json and thus you can gitignore typings folder. Later you can use this command to install dependencies

`typings install`

* Init tsc 

`tsc --init`

This will create a tsconfig.json that contains compilerOptions required for typescript compiler.

* Add a reference to the main typings file (something.d.ts) in index.ts
* Create Procfile which asks to install all typings dependencies,  run tsc command (to create corresponding .js file wherever specified) and start node
* Add all js files (*.js), typings folder in gitignore (and node_modules as usual). tsc command in Procfile will generate those for us.
