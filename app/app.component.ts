import { Component } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'my-app',//selector
  template: ` <h2>Component: Assignment 3</h2>
  
              <p><b> This is the parent Component</b></p>
              
              <child [child_content]="content"></child>`, //use child selector and pass content through a variable 'content'
              
})


export class AppComponent  { 
  content = 'This content has been passed to child from parent'; //define a variable content which holds a string
  }
