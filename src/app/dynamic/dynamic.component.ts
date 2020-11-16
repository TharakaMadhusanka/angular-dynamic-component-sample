import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentService } from './dynamic-component.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @ViewChild('dynamiccomponent', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private dynamicComponentService: DynamicComponentService
  ) {
  }

  ngOnInit(): void {
    this.dynamicComponentService.initializeContainerRef(this.viewContainer);
  }

}
