import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Injectable } from "@angular/core";
import { DataTransmitterService } from "./data-transmitter.service";

@Component({
  selector: "form-auto",
  templateUrl: "./form-auto.component.html"
})

export class FormComponent {
  vstup = new FormControl("");
  //data = new DataTransmitterService();
  constructor(public data: DataTransmitterService) {
    console.log("Class \"FormComponent\" was instantiated.");
    //console.log(this.data.getValue); // getter funguje
    this.vstup.valueChanges.subscribe(vstup => {
      console.log(vstup);
      this.data.setValue = vstup; // setter nefunguje
      console.log(this.data.getValue); // getter
    });
  }
}