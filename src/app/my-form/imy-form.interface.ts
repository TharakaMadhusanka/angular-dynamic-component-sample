import { EventEmitter } from "@angular/core";

export interface myform {
    inputFirstName: string;
    outPutEmitter: EventEmitter<boolean>;
}
