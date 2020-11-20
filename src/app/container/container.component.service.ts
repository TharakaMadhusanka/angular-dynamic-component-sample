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

  // Initialization is called at the Container component onInit
  initializeContainerRef(containerRef: ViewContainerRef): void {
    this.viewContainerRef = containerRef;
  }

  // Generic Method to Create given type of Component and Inject to Container.
  // T, interface of the requested component.
  // This is not required to be an interface, but to maintain the abstraction use it.
  createComponent<T>(component: Type): Observable<T>
  {

    // Asks angular component Factory to instantiate requsted component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    // Attach the created component to our container
    this.componentRef = this.viewContainerRef.createComponent<T>(componentFactory);

    // return the created component type instance
    return of(this.componentRef.instance);
  }
}
