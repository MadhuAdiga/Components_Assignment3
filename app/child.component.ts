import { Component, Input } from '@angular/core';//Import decorator dependencies

@Component({
  selector: 'child',//selector
  template: `<p><b>{{child_content}} </b></p>`,//interpolate the child_content variable
              
})


export class ChildComponent  { 
    @Input () child_content:string;//Input the child_content data from the parent
 }
