import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { myform } from './imy-form.interface';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit, myform {

  constructor() { }

  @Input('inputFirstName') firstName: string;
  @Output() outPutEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  restMeEmitter(): void {
    this.outPutEmitter.emit(true);
  }
}
