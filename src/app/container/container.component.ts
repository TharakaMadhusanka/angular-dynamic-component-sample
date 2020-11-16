import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ContainerComponentService } from './container.component.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class ContainerComponent implements OnInit {

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
