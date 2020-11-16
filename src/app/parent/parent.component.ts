import { Component, ComponentRef, OnInit } from '@angular/core';
import { childInterface } from '../child/child.interface';
import { DynamicComponentService } from '../dynamic/dynamic-component.service';
import { myform } from '../my-form/imy-form.interface';
import { MyFormComponent } from '../my-form/my-form.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private dynamicService: DynamicComponentService) { }

  ngOnInit(): void {
  }

  renderComponentDynamically(): void {
    this.dynamicService.createComponent<childInterface>(MyFormComponent).subscribe((component: childInterface) => {
      component.inputFirstName = 'Tharaka';
      // Subscribe to Output emitter
      component.outPutEmitter.subscribe((response: boolean) => {
        if (response) {
          this.triggerFromChild();
        }
      });
    });
  }

  triggerFromChild(): void {
    alert('Trigger From Dyanmically Created Child');
  }

}
