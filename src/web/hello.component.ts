import { Component, Input } from "@angular/core";
import { WebComponent } from "./web.component";

@Component({
  selector: 'hello',
  template: `<h1>Ahoj vývojáři projektu v {{name}}!</h1>`,
  styles: [`h1 { font-family: sans-serif; }`]
})

export class HelloComponent{
  public name: string;
  constructor(){
    this.name = this.getName;
    console.log("Class \"HelloComponent\" was instantiated.");
  }
  set setName(value: string){
    value = this.name;
  }
  get getName(){
    return this.name;
  }
}