import { Component, ComponentRef, OnInit } from '@angular/core';
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

  showDynamicComponent(): void {
    this.dynamicService.createComponent<myform>(MyFormComponent).subscribe((compRef: ComponentRef<myform>) => {
      compRef.instance.inputFirstName = 'Tharaka';
      compRef.instance.outPutEmitter.subscribe((response: boolean) => {
        if (response) {
          this.triggerFromChild();
        }
      });
    });
  }

  triggerFromChild(): void {
    alert('Trigger From Child');
  }

}
