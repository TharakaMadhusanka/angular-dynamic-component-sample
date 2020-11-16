import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { childInterface } from './child.interface';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class ChildComponent implements OnInit, childInterface {

  constructor() { }

  @Input('inputFirstName') firstName: string;
  @Output() outPutEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  restMeEmitter(): void {
    this.outPutEmitter.emit(true);
  }
}
