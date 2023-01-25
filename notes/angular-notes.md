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

# Components
* Componenets are building block on Angular Applications
* Component consists a HTML Template, Typescript Class and CSS Styles

## To create an component
```sh
# Long Hand
ng generate component <component_name>
# Short Hand
ng g c <component_name>

# Example
ng g c rooms
```
* This creates a folder with the component name
* Under this folder there are 4 files that angular generates
* For Example if our component name is **rooms** then the following are generated
* Angular also updates the src/app/app.module.ts
* rooms/
    * rooms.component.css
    * rooms.component.html
    * rooms.component.spec.ts
    * rooms.component.ts
---
* ### A component syntax sample
```ts
import { Component} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent{
    // Component Logic
}
```

## Binding Syntax
There are 3 ways to bind information available in the **rooms.component.ts** to **rooms.component.html**
* #### Interpolation
* #### Property Binding
* #### Event Binding
### Interpolation

Inside rooms.component.ts
```ts
import { Component} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent{
    // Component Logic
    hotelName:string = 'Taj Hotel'
}
```
* Now this `hotelName` can be used inside **rooms.component.html** by wrapping it in `{{}}`
```html
<h1>Welcome to {{hotelName}}!<h1> 
```
### Property binding
Inside rooms.component.ts
```ts
import { Component} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent{
    // Component Logic
    hotelName:string = 'Taj Hotel'
    numberOfRooms:number = 10
}
```
* Now this `numberOfRooms` can be used inside **rooms.component.html** by wrapping it in `[<html-property>]="<variable>"`
```html
<h1>{{hotelName}}<h1>
<p [innerText]="numberOfRooms"></p> 
```
### Event Binding
Inside rooms.component.ts
```ts
import { Component} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent{
    // Component Logic
    hotelName:string = 'Taj Hotel'
    numberOfRooms:number = 10
    hideRooms:boolean = false
    toggle(){
        this.hideRooms = !this.hideRooms
    }
}
```
* Now this `toggle()` can be used inside **rooms.component.html** by wrapping it in `(<event>)="<function()>"`
```html
<div [hidden]="hideRooms">
<h1>Welcome to {{hotelName}}!<h1>
<p [innerText]="numberOfRooms"></p>
</div>
<button (click)="toggle()">Toggle</button> 
```
# Directives
* Directives are used to change the behaviour and apperance if DOM element.
* Directives can implement all lifecyle hooks.
* Directives cannot have template

## Types of Directives
* **Structural Directives** - represented by **\***
    * these can add or remove DOM elements
* **Attribute Directives**
    * They can Modify DOM but cannot add or remove elements.

## Built-in Directives
* ### **\* ngIf**
* ### **\* ngFor**
* ### **\* ngSwitch**
    #### **\*ngSwitchCase**
    #### **\*ngSwitchDefault**
* ### **ngClass**
* ### **ngStyle**
---

1) ### **\* ngIf**  
    Consider this example
    ```html
    <div *ngIf="hideRooms">
    <h1 [innerText]="hotelName"></h1>
    <p>rooms works!</p>
    </div>

    <button (click)="toggle()">Toggle</button>

    {{rooms?.availableRooms ?? 'No Rooms'}}
    <!-- If rooms doesn't have a property 'availableRooms' then it renders 'No Rooms' -->
    <div *ngIf="rooms.availableRooms">
        Rooms List
    </div>
    ```
    * The `<div>` only exists in the DOM tree if the `hideRooms` evaluates to `true` else the `<div>` is removed from the DOM tree.
    * In the earlier example where we used `[hidden]="hideRooms"` just hides the `<div>` but it is present in the DOM tree.
    * If more such nodes are present, It would be expensive to render the entire `DOM Tree`.

2) ### **\* ngFor**
    * As shown in the below code **\* ngFor** is used for iterating.
    ```html
    <ul>
    <li *ngFor="let index of [0,1,2,3,4,5]">
        {{ index }}
    </li>
    </ul>
    ```
3) ### **\* ngSwitch**
    * As shown in the below code **\* ngSwitch** is used for switching.
    * Let's display data according to the role.
    ```html
    <div [ngSwitch]="role">
        <div *ngSwitchCase="'User'">
        Welcome User!
        </div>
        <div *ngSwitchCase="'Admin'">
            <app-rooms></app-rooms>
        </div>
        <div *ngSwitchDefault>
            <p> No Access! </p>
        </div>
    </div>
    ```
4) ### **ngClass**
    * ngClass is used for applying css classes to the elements.
    
    **`rooms.component.html`**
    ```html
    <div [ngClass]="'hello'">
        Hello World
    </div>
    ```
    **`rooms.component.css`**
    ```css
    .hello{
        background-color: tomato;
    }
    ``` 
5) ### **ngStyle**
    * ngStyle is used for applying inline-css to the elements.
    
    **`rooms.component.html`**
    ```html
   <div [ngStyle]="{'background-color':'blue'}">
        Words in blue BG
    </div>
    ```
# Pipes
* Pipes are used for data transformation
* Pipes don't change actual object

## Built-in Pipes

* **DatePipe**
* **UpperCasePipe**
* **LowerCasePipe**
* **TitleCasePipe**
* **CurrencyPipe**
* **DecimalPipe**
* **PercentPipe**
* **JsonPipe**
* **SlicePipe**
* **AsyncPipe**

## DatePipe
`app.component.html`
```html
<div>
    {{'Sun Jan 15 2023 14:41:22 GMT+0530 (India Standard Time)' | date}}
</div>
```
`outputs`
```
Jan 15, 2023
```
* For other Date and Time Formats
**[DatePipe Documentation](https://angular.io/api/common/DatePipe)**

## UpperCasePipe
`app.component.html`
```html
<div>
    {{'hello world' | uppercase}}
</div>
```
`outputs`
```
HELLO WORLD
```
**[UpperCasePipe Documentation](https://angular.io/api/common/UpperCasePipe)**

## LowerCasePipe
`app.component.html`
```html
<div>
    {{'HELLO WORLD' | lowercase}}
</div>
```
`outputs`
```
hello world
```
**[LowerCasePipe Documentation](https://angular.io/api/common/LowerCasePipe)**

## TitleCasePipe
`app.component.html`
```html
<div>
    {{'HELLO WORLD' | titlecase}}
</div>
```
`outputs`
```
Hello World
```
**[TitleCasePipe Documentation](https://angular.io/api/common/TitleCasePipe)**

## CurrencyPipe
`app.component.html`
```html
<div>
    {{'1000' | currency:'INR'}}
</div>
```
`outputs`
```
₹1000
```
**[CurrencyPipe Documentation](https://angular.io/api/common/CurrencyPipe)**

## JsonPipe
`rooms.component.ts`
```ts
@Component({
  selector: 'app-jsontest',
  template: `
  <div>
  <p>Without JSON pipe:</p>
  <pre>{{object}}</pre>
  <p>With JSON pipe:</p>
  <pre>{{object | json}}</pre>
  </div>
  `
})

export class JsontestComponent {
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
}
```
`outputs`
```
Without JSON pipe:

[object Object]

With JSON pipe:

{
  "foo": "bar",
  "baz": "qux",
  "nested": {
    "xyz": 3,
    "numbers": [
      1,
      2,
      3,
      4,
      5
    ]
  }
}
```
**[JsonPipe Documentation](https://angular.io/api/common/JsonPipe)**

## SlicePipe
`rooms.component.ts`
```ts
@Component({
  selector: 'slice-list-pipe',
  template: `<ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>`
})
export class SlicePipeListComponent {
  collection: string[] = ['a', 'b', 'c', 'd'];
}
```
`outputs`
```
<li>b</li>
<li>c</li>
```
**[SlicePipe  Documentation](https://angular.io/api/common/SlicePipe)**

## DecimalPipe
`app.component.html`
```ts
// Syntax:   
{{ value_expression | number [ : digitsInfo [ : locale ] ] }}
```
digitsInfo
```
{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
```

* **minIntegerDigits**: The minimum number of integer digits before the decimal point. **Default is 1**.

* **minFractionDigits**: The minimum number of digits after the decimal point. **Default is 0**.

* **maxFractionDigits**: The maximum number of digits after the decimal point. **Default is 3.**
* If the formatted value is truncated it will be rounded using the "to-nearest" method:
```ts
{{3.6 | number: '1.0-0'}}
<!--will output '4'-->

{{-3.6 | number:'1.0-0'}}
<!--will output '-4'-->
```

```html
<div>
    {{'1234.123' | number:'1.2-2'}}
</div>
```
`outputs`
```
1,234.1
```
**[DecimalPipe  Documentation](https://angular.io/api/common/DecimalPipe)**

## PercentPipe
```ts
@Component({
  selector: 'percent-pipe',
  template: `<div>
    <!--output '26%'-->
    <p>A: {{a | percent}}</p>

    <!--output '0,134.950%'-->
    <p>B: {{b | percent:'4.3-5'}}</p>

    <!--output '0 134,950 %'-->
    <p>B: {{b | percent:'4.3-5':'fr'}}</p>
  </div>`
})
export class PercentPipeComponent {
  a: number = 0.259;
  b: number = 1.3495;
}
```
**[PercentPipe  Documentation](https://angular.io/api/common/PercentPipe)**

## AsyncPipe
**[AsyncPipe  Documentation](https://angular.io/api/common/AsyncPipe)**

# Component Communication
* The scenario where two or more components needs to interact is known as **component communication**.
* There are multiple ways to achieve the component communication
## Ways for Component Communication
* Using **@Input** and **@Output**
* Using **@ViewChild** and **@ContentChild**
* Using Services

## Using @Input
* Using @Input becomes a property on top of the component tag  
`creating component under rooms`  
**`ng g c rooms-list`**   
`inside rooms-list.component.ts`  
* We expose an attribute to use on the component tag   
**`@Input() rooms: roomsList[] = []`**  
```ts
import { Component, Input } from '@angular/core';
import { roomsList } from '../roomsInterfaces';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  @Input() rooms: roomsList[] = []
  originalOrder: any = (a: any, b: any): number => {
    return 0;
  }
}
```

**`inside rooms-list.component.html`**
```html
<table>
    <tr>
        <th>Index</th>
        <th>Even/Odd</th>
        <th *ngFor="let room of rooms[0]| keyvalue: originalOrder">{{room.key}}</th>
    </tr>
    <tr *ngFor="let room of rooms;let i=index">
        <td>{{i}}</td>
        <td>{{room.roomNumber}}</td>
        <td>{{room.price}}</td>
        <td>{{room.roomType}}</td>
        <td>{{room.amenities}}</td>
        <td>{{room.checkInTime }}</td>
        <td>{{room.checkOutTime | date: 'short'}}</td>
    </tr>
</table>
```
* We can use the attribute rooms in rooms.component.html
```html
<div *ngIf="hideRooms">
    <h1 [innerText]="hotelName"></h1>
    <app-rooms-list [rooms]="hotelRoomList"></app-rooms-list>
</div>
```  
**`<app-rooms-list [rooms]="<variable or data>"></app-rooms-list>`**

## Using @Output
> This is done in a seperate angular app to demonstrate the feature
* Outputs are actually events  
`@Output <event_name> = new EventEmitter<data_type_to_send>();`
* Check the below example  
`Lets create a component inside app`  
    ```
    ng g c output-pipe
    ```  
`inside output-pipe.component.html`
```html
<div *ngFor="let i of [1,2,3,4,5]">
    <button (click)="clickHandler(i)">{{i}}</button>
</div>
```
`inside output-pipe.component.ts`
* We are creating an @Output event for emitting number that we select.
```ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() emitNumber = new EventEmitter<number>();
  clickHandler(num: number) {
    this.emitNumber.emit(num)
  }
}
```
`Inside app.component.html`
* We are utilising the `emitNumber` that we created earlier in the child component
```html
<div>You have selected {{clickedNum ? clickedNum : 'Nothing'}}</div>
<app-output (emitNumber)="emittedNumber($event)"></app-output>
```
`Inside app.component.ts`
* Initializing the `clickedNum` variable to the data that we emitted in the child component and later we can use it for anything we want.
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe_test';
  clickedNum!: number;
  emittedNumber(num: number) {
    this.clickedNum = num
  }
}
```
# Lifecycle Hooks
* Component instance has lifecycle hooks which can help you hook into different events on Components
* Lifecycle ends when component is destroyed

## Few Lifecycle Hooks
* **ngOnChanges**
* **ngOnInit**
* **ngDoCheck**
* **ngAfterContentInit**
* **ngAfterContentChecked**
* **ngAfterViewInit**
* **ngAfterViewChecked**
* **ngOnDestroy**

## ngOnInit
**TLDR**
```
* Constructor initialize class members.
* ngOnInit() is a place to put the code that we need to execute at very first as soon as the class is instantiated.
```
---
* **ngOnInit** is a life cycle hook called by Angular to indicate that the Angular is done creating the component.
* In order to use OnInit we have to import it in the component class like this:  
    ```ts
    import {Component, OnInit} from '@angular/core';
    ```
* Actually implementing OnInit in every component is not mandatory. But considered good practice.
* A class implements OnInit like this:
    ```ts
    export class AppComponent implements OnInit { }
    ```
```ts
// import OnInit
import {Component, OnInit} from '@angular/core';
...

@Component({
	...
})
// implementing OnInit
export class AppComponent implements OnInit {
  
  constructor() {
     // constructor called first time before the ngOnInit()
  }

  ngOnInit() {
     // called after the constructor and called  after the first ngOnChanges() 
  }
  
}
```
* Angular calls its **ngOnChanges()** method whenever it detects changes to the value of input properties of the component (or directive).

### Difference between ngOnInit() and constructor()
---
* We use `constructor()` for all the initialization/declaration.
* It’s better to avoid writing actual work in the constructor.
* The `constructor()` should only be used to initialize class members but shouldn't do actual "work".
* So we should use `constructor()` to setup Dependency Injection, Initialization of class fields etc.
* **ngOnInit()** is a better place to write "actual work code" that we need to execute as soon as the class is instantiated.
* Like loading data from Database — to show the user in your HTML template view. Such code should be written in **ngOnInit()**.

# Change Detection
* **Angular Change Detection** is a mechanism for detecting when data changes in any component of your app and re-renders the view, so it displays the updated values or objects to end-users right away.
* Changes occur on different occasions and derive from different events:  
    * Data received from network requests or component events
    * Mouse clicks, scrolling, mouseover, keyboard navigation
    * Use of JavaScript timer functions such as setTimeOut, SetInterval
    * AJAX calls
* By default, Angular performs **change detection on all components** (from top to bottom) 
* This happens whenever something triggers a change in your app - either a user event or data received from a network request
* To detect and update the DOM with changed data, the framework provides its own change detector to each component.
* The change detector reads the binding on a template, and reflects the updated data to the view, ensuring that both the data model and the DOM are in sync.
### [changeDetectionDocumentation](https://angular.io/guide/change-detection)
## ngOnChanges
* Can only be applied on component or directive which has `@Input()` property
```ts
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent implements OnChanges {
  @Input() cities: string[] = []
  @Output() emitNumber = new EventEmitter<number>();
  clickHandler(num: number) {
    this.emitNumber.emit(num)
  }
  numbers: number[] = [1, 2, 3, 4, 5]
  addNumber() {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['cities']) {
      console.log('inside changes')
      this.cities = changes['cities'].currentValue
    }
  }
}
```
### [ngOnChanges Documentation](https://angular.io/api/core/OnChanges)