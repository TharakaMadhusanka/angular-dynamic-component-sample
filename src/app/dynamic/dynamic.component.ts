import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicComponentInterface } from './dynamic.interface';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit, DynamicComponentInterface {

  constructor() { }

  @Input('dynamicComponentInput') dynamicComponentInput: string;
  @Output() dynamicComponentOutPutEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  restMeEmitter(): void {
    this.dynamicComponentOutPutEmitter.emit(true);
  }

  dynamicComponentExposedMethod(): void {
    alert('Hello, I am triggered method by my Requestor');
  }
}
