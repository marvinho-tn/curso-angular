import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    // @HostBinding('attr.style')
    // attrStyle: string = 'background-color: orange; color: white;';

    // @HostBinding('style')
    // propStyle: string = 'background-color: orange; color: white;';

    @HostBinding('style')
    propStyle =  {
        backgroundColor: 'orange',
        color: 'white',
        fontSize: '40px'
    };

    // @HostBinding('style.backgoundColor')
    // bgColor: string = 'orange';

    // @HostBinding('style.color')
    // color: string = 'white';

    // @HostBinding('style.fontSize.px')
    // size: number = 40;
}
