import { Component, OnInit } from '@angular/core';
import { ContainerComponentService } from '../container/container.component.service';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DynamicComponentInterface } from '../dynamic/dynamic.interface';

@Component({
  selector: 'app-requestor',
  templateUrl: './requestor.component.html',
  styleUrls: ['./requestor.component.css']
})

// This class is the Parent or Requestor
// Asks to render or create component dynamically.
export class RequestorComponent implements OnInit {

  constructor(private containerService: ContainerComponentService) { }

  ngOnInit(): void {
  }

  renderComponentDynamically(): void {
    this.containerService.createComponent<DynamicComponentInterface>(DynamicComponent)
      .subscribe((component: DynamicComponentInterface) => {
        
        // Bind Input Data
        component.dynamicComponentInput = 'Hello, I am passed by my Requestor';

        // Subscribe to Output emitter
        component.dynamicComponentOutPutEmitter.subscribe((response: boolean) => {
          if (response) {
            this.triggerFromChild();
          }
        });

        // Trigger Dyanmic Component Method
        component.dynamicComponentExposedMethod();
      });
  }

  triggerFromChild(): void {
    alert('OutPut Emitter Trigger From Dyanmically Created Child');
  }

}
