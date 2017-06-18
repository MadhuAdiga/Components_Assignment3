import { Component, Input } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'child',//selector
  template: `<h3> {{child_content}} </h3>`,//interpolate the child_content variable
              
})


export class ChildComponent  { 
    @Input () child_content:string;//Input the child_content data from the parent
 }
