import { Type } from '@angular/compiler/src/core';
import { ComponentFactoryResolver, ComponentRef, Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerComponentService {

  private viewContainerRef: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  initializeContainerRef(containerRef: ViewContainerRef): void {
    this.viewContainerRef = containerRef;
  }

  // Generic Method to Create given type of Component and Inject to Container
  createComponent<T>(component: Type): Observable<T>
  {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.componentRef = this.viewContainerRef.createComponent<T>(componentFactory);

    // return the created component type instance
    return of(this.componentRef.instance);
  }
}
