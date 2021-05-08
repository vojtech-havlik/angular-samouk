import { Component, Input } from "@angular/core";
import { WebComponent } from "./web.component";

@Component({
  selector: 'hello',
  template: `<h1>Ahoj vývojáři projektu v {{name}}!</h1>`,
  styles: [`h1 { font-family: sans-serif; }`]
})
// zkusit použít prostředníka <pozdrav.service>, který po stisknutí tlačítka vezme z <web.component> řetězec s pozdravem a předá ho k zobrazení <ahoj.component>
export class HelloComponent{
  public name: string;
  constructor(){
    this.name = name;
    console.log("Class \"HelloComponent\" was instantiated.");
  }
  set setName(value: string){
    value = name;
  }
  get getName(){
    return name;
  }
}