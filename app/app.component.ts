import { Component } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'my-app',//selector
  template: ` <h3> This is the parent Component</h3>
              
              <child [child_content]="content"></child>`, //use child selector and pass content through a variable 'content'
              
})


export class AppComponent  { 
  content = 'This content has been passed to child from parent'; //define a variable content which holds a string
  }
