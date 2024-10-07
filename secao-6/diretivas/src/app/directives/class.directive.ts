import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appClass]'
})
export class ClassDirective {
    @HostBinding('class')
    classObj = {
        'meu-texto': true,
        'meu-size': true,
    };

    // @HostBinding('attr.class')
    // attrClass: string = 'meu-texto meu-size';

    // @HostBinding('class')
    // propClass: string = 'meu-texto meu-size';
    
    // @HostBinding('className')
    // propClass: string = 'meu-texto';
}