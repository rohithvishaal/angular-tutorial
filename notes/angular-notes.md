# Frameworks
* Frameworks generally contains set of libs.
* You can extend the frameworks
* Examples : **Angular**, **.NET**, **Ionic**, **Express** **JS** e.t.c

# Libraries
* Libs perform a specific operation
* You can combine multiple libs to build apps
* Examples : **React**, **MomentJS**, **Lodash**

# What is Angular?
* A UI framework built by google
* A Component-based framework for building scalable apps
* Provided collections of libs to cover features like Routing, Forms
* Re-Written entirely in TypeScript
* Current Version at the the time of writing : Ver 14

# Features of Angular
* Template
* Databinding
* Forms
* Routing
* Observables
* PWA

# Single Page Application 

* SPA doesn't not make requests to server for every URL requests.
* You can use modern frameworks like Angular, react, Vue to create SPA.

# How Angular Helps

* Angular has **Routing Functionality** to create SPA
* Angular also offers **SSR(Server Side Rendering)** which supports SPA

# Installation
```sh
npm i @angular/client -g
```
* Check Angular Version
```sh
# Version
ng version
```
# Intro to mono-repo
* create and maintain multiple apps in same repo
* Use libs within the project
* Deploy multiple apps/libs from the same repo
* Easy to share code within the project

# Create Angular Workspace
* **Angular CLI provides two options**  
    * **Create only a workspace**
        ```sh
        ng new hotelInventoryapp -- createApplication=false

        # If you want to create app inside the workspace
        npm i

        # g - generate
        ng g app hotelinventory
        ```
    * **Create a workspace with a default Application**
        ```sh
        ng new hotelInventoryapp
        ```
# Workspace Walkthrough

* **src/**  
    * app/  
        * app-routing.module.ts
        * app.component.html
        * app.component.css
        * app.componenet.spec.ts
        * app.component.ts
        * app.module.ts
    * assets/
    * environments/  
        * environment.prod.ts
        * environment.ts
    * favicon.ico
    * index.html
    * mains.ts
    * polyfill.ts
    * styles.css
    * test.ts  
* **node_modules**
* **package.json**
* **tsconfig.app.json**
* **tsconfig.json**
* **tsconfig.spec.json**
* **angular.json**
* **karma.conf.json**

# Details of WorkSpace  
## tsconfig.json
* this file consists configurations for **typescript** and **angular** related settings

## tsconfig.spec.json
* Extends the **tsconfig.json**
* This config file is related to unit tests and angular uses it to **compile** those **unittest TS files**.
* the unittest file are written in the format : **\*.spec.ts**
* Angular looks into this json file for unittest related settings

## tsconfig.app.json
* This file used for compiling the TS code related to the app

## README.md
* For info on the VCS Platforms like github, gitlab e.t.c

## package.json
* All the dependencies that we are using and some **command aliases**.
* **dependencies** - which are required for the app to work in production
* **devDependencies** - which are required for the development.

## karma.conf.js
* It is a taskrunner for running tests
* Test cases are written in **jasmine** and we use **karma** to run all those tests.

## angular.json
* Holds Information about current workspace
* If we add any project into the workspace. The entry gets updated in the angular.json file

## .gitignore
* A file to ignore on what file and folders should be ignored for checking.

## .editorconfig
* Custom configurations for editor 

## .browserslistrc
* This is an important file where it shows for what browsers your output is generated

## src
* where we write our code
    ### test.ts
    * This file is required for karma.conf.js and we don't need to modify anything
    ### style.css
    * For global CSS 
    ### polyfills.ts
    * This makes sure that our app is backward compitable
    * It adds some lines of code to the final bundle for compitibility for other browsers
    ### main.ts
    * This is the entry point for the application
    ### index.html
    * Main index.html which will be served to user
    ### favicon.ico
    * icon for the tab
    ### environments/
    * add environment variables to both files as it required when we generate the final build.
    ### assets
    * all static files must reside here
    ### app/
    * where we write the main logic



