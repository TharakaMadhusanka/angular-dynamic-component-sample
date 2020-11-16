import { EventEmitter } from "@angular/core";

export interface childInterface {
    inputFirstName: string;
    outPutEmitter: EventEmitter<boolean>;
}
