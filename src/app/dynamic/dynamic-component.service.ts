import { Type } from '@angular/compiler/src/core';
import { ComponentFactoryResolver, ComponentRef, Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicComponent } from './dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  private viewContainerRef: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  initializeContainerRef(containerRef: ViewContainerRef): void {
    this.viewContainerRef = containerRef;
  }

  createComponent<T>(component: Type): Observable<ComponentRef<T>>
  {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    this.componentRef = this.viewContainerRef.createComponent<T>(componentFactory);

    return of(this.componentRef);
  }
}
