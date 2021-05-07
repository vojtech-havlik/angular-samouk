import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  //template: `<h1>Hello {{name}}!</h1>`,
  template: `<h1>Hello user!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  constructor(){
    
    //@Input() name: string;
    //this.name = name;
    //@Input() name: string;

    //@Input() name;
  }
  //@Input() name: string;
}