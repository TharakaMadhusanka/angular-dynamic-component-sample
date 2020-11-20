import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ContainerComponentService } from './container.component.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @ViewChild('dynamiccomponent', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef;

  constructor(
    private containerComponentService: ContainerComponentService
  ) {
  }

  ngOnInit(): void {
    // Initialize the Container to behave as an anchor
    // This can be considered as router-outlet
    this.containerComponentService.initializeContainerRef(this.viewContainer);
  }

}
