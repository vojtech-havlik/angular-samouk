import { Component, VERSION } from "@angular/core";
import { Injectable } from '@angular/core';

@Component({
  selector: "web-app",
  templateUrl: "./web.component.html",
  //styleUrls: ["./web.component.css"]
})

export class WebComponent {
  constructor() {
    console.log("Class \"WebComponent\" was instantiated.");
  }
  name = "Angular " + VERSION.major;
}