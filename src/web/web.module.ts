import { NgModule, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { WebComponent } from "./web.component";
import { HelloComponent } from "./hello.component";
import { FormComponent } from "./form-auto.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [WebComponent, HelloComponent, FormComponent],
  bootstrap: [WebComponent]
})

export class WebModule {
  constructor() {
    console.log("Class \"WebModule\" was instantiated.");
  }
}