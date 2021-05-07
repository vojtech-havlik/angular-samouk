import { Component } from "@angular/core";
import { Injectable } from '@angular/core';

@Component({
  selector: "web-app",
  templateUrl: "./app.component.html",
  //styleUrls: ["./app.component.css"]
})

export class AppComponent {
  constructor() {
    console.log("Class \"AppComponent\" was instantiated.");
  }
}