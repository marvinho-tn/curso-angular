import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DatePipe } from './date.pipe';

@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DatePipe,
    ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DatePipe,
    ],
})
export class PipesModule { }