import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDisabled]',
})
export class DisabledDirective {
    // @HostBinding('attr.disabled')
    // attrDisabled: boolean = true;
    
    @HostBinding('disabled')
    propDisabled: boolean = true;
}