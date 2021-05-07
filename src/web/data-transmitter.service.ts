import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})

export class DataTransmitterService {
  private valueToTransmit: string;
  constructor() { 
    console.log("Class \"DataTransmitterService\" was instantiated.");
    
    this.valueToTransmit = "test";
  }
  public get getValue() {
    return this.valueToTransmit;
  }
  public set setValue(value) {
    value = this.valueToTransmit;
  }
}