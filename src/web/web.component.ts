import { Component, VERSION } from "@angular/core";
import { HelloComponent } from "./hello.component";

@Component({
  selector: "web-app",
  templateUrl: "./web.component.html",
  //styleUrls: ["./web.component.css"]
})

export class WebComponent {
  public name: string;
  public hello: HelloComponent;
  constructor() {
    console.log("Class \"WebComponent\" was instantiated.");
    this.name = "Angular " + VERSION.major;
    console.log(this.name);
    this.hello = new HelloComponent();
    this.hello.setName = this.name;
    console.log(this.name);
    console.log(this.hello.getName);
  }
}