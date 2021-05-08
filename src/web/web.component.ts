import { Component, VERSION } from "@angular/core";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "web-app",
  templateUrl: "./web.component.html",
  //styleUrls: ["./web.component.css"]
})

export class WebComponent {
  public name: string;
  constructor() {
    console.log("Class \"WebComponent\" was instantiated.");
    //this.name = "Angular " + VERSION.major;
    this.name = "Angular " + VERSION.major;
    //HelloComponent.prototype.setName = this.name;
    HelloComponent.prototype.setName = this.name;
    console.log(this.name);
    console.log(HelloComponent.prototype.getName);
  }
}