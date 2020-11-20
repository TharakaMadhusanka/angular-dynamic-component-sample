import { EventEmitter } from "@angular/core";

export interface DynamicComponentInterface {
    dynamicComponentInput: string;
    dynamicComponentOutPutEmitter: EventEmitter<boolean>;
    dynamicComponentExposedMethod(): void;
}
