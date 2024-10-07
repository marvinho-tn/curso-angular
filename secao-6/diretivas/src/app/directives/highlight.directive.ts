import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
})
export class HightlightDirective {
    @HostBinding('style.background-color')
    bgColor: string = 'tranparent';

    @HostListener('mouseover')
    onMouseOver() {
        this.bgColor = 'orange';
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.bgColor = 'transparent';
    }
}